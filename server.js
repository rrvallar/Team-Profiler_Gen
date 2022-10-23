const html = require('./src/templateHTML');
const inquirer = require("inquirer");
const fs = require('fs');
const util = require('util');
const writeFile = util.promisify(fs.writeFile);
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

var teamInfos = [];
var teamInfoString = ``;

async function main() {
  await promptInfo();

  for (let i = 0; i < teamInfos.length; i++)
  {
    teamInfoString = teamInfoString + html.cardHTML(teamInfos[i]);
  }

  let completeHTML = html.templateHTML(teamInfoString);
  writeFile("./dist/index.html", completeHTML);
}


async function promptInfo() {
  let completeResponse = "";
  
  do {
       try {
            let conditionResponse = "";
            res = await inquirer.prompt([
                 {
                      type: "input",
                      name: "name",
                      message: "What is employee name?: "
                 },
                 {
                      type: "input",
                      name: "id",
                      message: "Enter the employee ID: "
                 },
                 {
                      type: "input",
                      name: "email",
                      message: "Enter the employee email address: "
                 },
                 {
                      type: "list",
                      name: "role",
                      message: "What what is the employee role:",
                      choices: [
                           "Engineer",
                           "Intern",
                           "Manager"
                      ]
                 }
            ]);



            if (res.role === "Engineer") {
                 conditionResponse = await inquirer.prompt([
                    {
                      type: "input",
                      name: "name",
                      message: "What is the github username?:",
                    },
               ]);
                //  push object
                 const engineer = new Engineer(res.name, res.id, res.email, conditionResponse.name);
                 teamInfos.push(engineer);
            } 
            else if (res.role === "Intern") {
                 conditionResponse = await inquirer.prompt([{
                      type: "input",

                 
                      name: "role",
                      message: "What school is the employee attending?:",
                 }, ]);
                 const intern = new Intern(res.name, res.id, res.email, conditionResponse.role);
                 teamInfos.push(intern);
            } 
            else if (res.role === "Manager") {
                 conditionResponse = await inquirer.prompt([{
                      type: "input",
                      name: "num",
                      message: "What is the employee's office number?:",
                 }, ]);
                 const manager = new Manager(res.name, res.id, res.email, conditionResponse.num);
                 teamInfos.push(manager);
            }
       } catch (err) {
            return console.log(err);
       }

       completeResponse = await inquirer.prompt([{
            type: "list",
            name: "Complete",
            message: "Would you like to continue?: ",
            choices: [
                 "Yes",
                 "No"
            ]
       }, ]);

  } while (completeResponse.finish === "Yes");
}

main();
const templateHTML = function (team) {

  return `<!DOCTYPE html>
  <html lang="en">
  
  <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Team Profile Generator</title>
  <style>
      body {
        background-repeat: no-repeat;
        background-size: 100% 100%;
      }

      .header {
          background-color: rgb(145, 69, 41);
          border: solid rgb(255, 255, 255);
          text-align: center;
          font-size: 30px;
      }

      .container-body {
          display: flex;
          justify-content: space-evenly;
      }

      .card {
          background-color:rgb(91, 142, 163);
          margin-top: 7%;
          border: solid black;
          font-size: x-large;
      }
      .card-header{
          margin: 20%;
      }
 </style>
 
</head>
  
  <body>
 <div class="header">
     <h1>Team Profile</h1>
 </div>
 <div class="container-body">

       ${team} 

       </div>
  </body>
  
  </html>`

}


const cardHTML = function (profile) {

  let role;

  if (profile.title === "Manager") {
    role = `The manager office number is ${profile.officeNumber}`
  } else if (profile.title === "Engineer") {
    role = `The github profile user is ${profile.github}`
  } else if (profile.title === "Intern") {
    role = `The intern school is ${profile.school}`
  }

  return `
  <div class="card">
      <div class="card-header">
        <h2>${profile.name}</h2>  
        <h2><i class=""></i> ${profile.title}</h2>
      </div>
      
      <hr>
      
      <div class="card-body">
    
      <ul>
      <li>1.Id: ${profile.id}</li>
      <li>2.Email: ${profile.email}</li>
      <li>3.${role} </li>
      </ul>
  </div>
</div>`
}

exports.templateHTML = templateHTML;
exports.cardHTML = cardHTML;
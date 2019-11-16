const inquirer = require("inquirer");
const axios = require("axios");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your name?"
        },
        {
            type: "input",
            name: "username",
            message: "Enter your GitHub username:"
        },
        {
            type: "input",
            name: "color",
            message: "What is your favorite color?"
        }
    ])
}

async function callAPI(answers) {
    let usernameCall = await axios.get('https://api.github.com/users/' + answers.username);
    let objData = usernameCall.data;
    let newData = JSON.parse(JSON.stringify(objData));
    return newData;
}

function generateHTML(answers, data) {
    return `<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
          integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
      <title>User GitHub Info</title>
  </head>
  <body>
      <div class="container mt-5">
          <div class="row"><img src="${data.avatar_url}" alt="profile picture" class="mx-auto d-block"  style="max-height: 200px;"></div>
          <div class="row justify-content-center">
              <div class="col-md-12 text-center">
                  <div class="card text-white" style="background-color: ${answers.color};">
                      <div class="card-body">
                          <h1>Hi! My name is ${answers.name}!</h1>
                      </div>
                  </div>
              </div>
          </div>
          <div class="row">
              <div class="col-md-4">
                  <div class="card text-white m-2" style="background-color: ${answers.color};">
                      <div class="card-body fas fa-location-arrow text-center"> ${data.location}</div>
                  </div>
              </div>
              <div class="col-md-4">
                  <div class="card text-white m-2" style="background-color: ${answers.color};">
                      <div class="card-body fab fa-github text-center"> ${answers.username}</div>
                  </div>
              </div>
              <div class="col-md-4">
                  <div class="card text-white m-2" style="background-color: ${answers.color};">
                      <div class="card-body fas fa-rss text-center"> ${data.blog}</div>
                  </div>
              </div>
          </div>
          <div class="row justify-content-center">
              <div class="card col-md-6 text-center pt-4 text-white" style="min-height: 125px; width: 45%; background-color: ${answers.color};">
                  <div class="card-body">Public Repositories: ${data.public_repos}</div>
              </div>
              <div class="card col-md-6 text-center pt-4 text-white" style="min-height: 125px; width: 45%; background-color: ${answers.color};">
                  <div class="card-body">Stars: B</div>
              </div>
          </div>
          <div class="row justify-content-center">
              <div class="card col-md-6 text-center pt-4 text-white" style="min-height: 125px; width: 45%; background-color: ${answers.color};">
                  <div class="card-body">Followers: ${data.followers}</div>
              </div>
              <div class="card col-md-6 text-center pt-4 text-white" style="min-height: 125px; width: 45%; background-color: ${answers.color};">
                  <div class="card-body">Following: ${data.following}</div>
              </div>
          </div>
      </div>
  </body>
  </html>`;
}

async function init() {
    console.log("Hello!");
    try {
        const answers = await promptUser();
        let data = await callAPI(answers);
        const html = generateHTML(answers, data);
        await writeFileAsync("index.html", html);
        console.log("Successfully wrote to index.html");
    } catch (err) {
        console.log(err);
    }
}

init();
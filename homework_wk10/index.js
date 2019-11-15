const inquirer = require("inquirer");
const axios = require("axios");
const fs = require("fs");
const util = require("util");
const gs = require('git-scraper');

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
      message: "What is your GitHub username?"
    },
    {
      type: "input",
      name: "color",
      message: "What is your favorite color?"
    },
    {
      type: "input",
      name: "location",
      message: "where are you from?"
    }
  ])
}

function callAPI(answers) {
  let usernameCall = axios.get('https://api.github.com/search/users?q=' + answers.username);
  console.log(usernameCall);
}

function generateHTML(answers) {
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
          <div class="row"><img src="#" alt="profile picture" class="mx-auto d-block"></div>
          <div class="row justify-content-center">
              <div class="col-md-12 text-center">
                  <div class="card text-white" style="background-color: green;">
                      <div class="card-body">
                          <h1>Hi! My name is Alex Griep!</h1>
                      </div>
                  </div>
              </div>
          </div>
          <div class="row">
              <div class="col-md-4">
                  <div class="card text-white m-2" style="background-color: green;">
                      <div class="card-body fas fa-location-arrow text-center"> Minneapolis, MN</div>
                  </div>
              </div>
              <div class="col-md-4">
                  <div class="card text-white m-2" style="background-color: green;">
                      <div class="card-body fab fa-github text-center"> zandermate</div>
                  </div>
              </div>
              <div class="col-md-4">
                  <div class="card text-white m-2" style="background-color: green;">
                      <div class="card-body fas fa-rss text-center"> blog</div>
                  </div>
              </div>
          </div>
          <div class="row justify-content-center">
              <div class="card col-md-6 text-center pt-4 text-white" style="min-height: 125px; width: 45%; background-color: green;">
                  <div class="card-body">Public Repositories: 5</div>
              </div>
              <div class="card col-md-6 text-center pt-4 text-white" style="min-height: 125px; width: 45%; background-color: green;">
                  <div class="card-body">Stars: 0</div>
              </div>
          </div>
          <div class="row justify-content-center">
              <div class="card col-md-6 text-center pt-4 text-white" style="min-height: 125px; width: 45%; background-color: green;">
                  <div class="card-body">Followers: 17</div>
              </div>
              <div class="card col-md-6 text-center pt-4 text-white" style="min-height: 125px; width: 45%; background-color: green;">
                  <div class="card-body">Following: 15</div>
              </div>
          </div>
      </div>
  </body>
  </html>`;
}

promptUser()
  .then(function (answers) {
    console.log(answers);
    const html = generateHTML(answers);

    return writeFileAsync("index.html", html);
  })
  .then(function () {
    console.log("Successfully wrote to index.html");
  })
  .catch(function (err) {
    console.log(err);
  });
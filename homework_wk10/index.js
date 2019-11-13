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
  return ``;
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
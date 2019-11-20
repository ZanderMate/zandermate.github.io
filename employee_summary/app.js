const inquirer = require("inquirer");

inquirer.prompt([
    {
        type: "list",
        message: "Which job are we starting with?",
        name: "title"
    },
    {
        type: "input",
        message: "What is the employee's name?",
        name: "name"
    },
    {
        type: "input",
        message: "What is the employee's ID number?",
        name: "id"
    },
    {
        type: "input",
        message: "What is the employee's e-mail address?",
        name: "email"
    }
]);
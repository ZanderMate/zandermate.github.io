const inquirer = require("inquirer");

inquirer.prompt([
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
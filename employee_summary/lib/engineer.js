const Employee = require("./employee");
//const App = require("../app");
const inquirer = require("inquirer");
const fs = require("fs");
//const util = require("util");

//Constructor for subclass Engineer
class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        super(name, id, email);
        this.gitHub = gitHub;
    }
    getGithub() {
        return this.gitHub;
    };
    getRole() {
        return "Engineer";
    };
    //questions just for the engineer
    promptEngineer() {
        return inquirer.prompt([
            {
                type: "input",
                message: "What is the engineer's name?",
                name: "name"
            },
            {
                type: "input",
                message: "What is the engineer's ID number?",
                name: "id"
            },
            {
                type: "input",
                message: "What is the engineer's e-mail address?",
                name: "email"
            },
            {
                type: "input",
                message: "What is the engineer's GitHub username?",
                name: "gitHub"
            }
        ])
    }
    //to verify if there are anymore engineers
    continuingEngineer() {
        return inquirer.prompt([
            {
                type: "confirm",
                message: "Are there any engineers on the team?",
                name: "nextEngineer"
            }
        ]);
    }
    //generates HTML string using engineer html template
    generateHTML(data) {
        let engineerAnswers = fs.readFileSync('templates/engineer-template.html', 'utf8');
        return eval('`' + engineerAnswers + '`');
    }
}

module.exports = Engineer;
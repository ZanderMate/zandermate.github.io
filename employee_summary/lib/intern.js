const Employee = require("./employee");
const App = require("../app");
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    getSchool() {
        return this.school;
    }
    getRole() {
        return "Intern";
    }
    promptIntern() {
        return inquirer.prompt([
            {
                type: "input",
                message: "What is the intern's name?",
                name: "name"
            },
            {
                type: "input",
                message: "What is the intern's ID number?",
                name: "id"
            },
            {
                type: "input",
                message: "What is the intern's e-mail address?",
                name: "email"
            },
            {
                type: "input",
                message: "What school is the intern from?",
                name: "school"
            }
        ])
    }
    generateHTML(data) {
        let internAnswers = fs.readFileSync('templates/intern-template.html', 'utf8');
        return eval('`' + internAnswers + '`');
    }
    continuingIntern() {
        return inquirer.prompt([
            {
                type: "confirm",
                message: "Are there any interns on the team?",
                name: "nextIntern"
            }
        ])
    }
}

module.exports = Intern;
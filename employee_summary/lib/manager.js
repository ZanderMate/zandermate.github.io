const App = require("../app");
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const Employee = require("./employee")

class Manager extends Employee {
    constructor(name, id, email, officeNumber, nextMember) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.nextMember = nextMember;
    };
    getRole() {
        return "Manager";
    };
    getOfficeNumber() {
        return this.officeNumber;
    };
    promptManager() {
        return inquirer.prompt([
            {
                type: "input",
                message: "What is the manager's name?",
                name: "name"
            },
            {
                type: "input",
                message: "What is the manager's ID number?",
                name: "id"
            },
            {
                type: "input",
                message: "What is the manager's e-mail address?",
                name: "email"
            },
            {
                type: "input",
                message: "What is the manager's office number?",
                name: "officeNumber"
            }
        ])
    };
    generateHTML(data) {
        let managerAnswers = fs.readFileSync('templates/manager-template.html', 'utf8');
        return eval('`' + managerAnswers + '`');
    };
}

module.exports = Manager;
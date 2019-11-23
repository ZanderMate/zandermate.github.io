const App = require("../app");
const inquirer = require("inquirer");
const fs = require("fs");

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        // this.title = title;
        this.email = email;
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    };
    getEmail() {
        return this.email;
    };
    getRole() {
        return "Employee";
    };
    promptEmployee() {
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
            }
        ])
    };
    generateHTML() {
        return fs.readFileSync('templates/employee-template.html', 'utf8');
    }
};



module.exports = Employee;
const Employee = require("./employee");

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        super(name, id, email);
        this.github = gitHub;
    }
    getGithub() {
        return this.github;
    };
    getRole() {
        return "Engineer";
    };
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
            },
            {
                type: "confirm",
                message: "Any other engineers on the team?",
                name: "nextMember",
            }
        ])
    }
}

module.exports = Engineer;
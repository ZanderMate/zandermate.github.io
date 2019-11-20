const Employee = require("./employee");
const inquirer = require("inquirer");

class Engineer extends Employee {
    constructor(name, id, title, gitHub) {
        super(name, id, title);
        this.gitHub = gitHub;
    }
    getGithub() {

    };
    getRole() {

    };
}
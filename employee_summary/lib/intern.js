const Employee = require("./employee");
const inquirer = require("inquirer");

class Intern extends Employee {
    constructor(name, id, title, school){
        super(name, id, title);
        this.school = school
    }
}
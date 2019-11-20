const Employee = require("./employee");
const inquirer = require("inquirer");

class Manager extends Employee {
    constructor(name, id, title, offnum){
        super(name, id, title);
        this.offNum = offNum;
    }
    getRole() {
        
    };
}
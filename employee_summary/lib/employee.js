const fs = require("fs");
const App = require("../app");

//Constructor for Employee
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
    //generates employee html template into a string
    generateHTML() {
        return fs.readFileSync('templates/employee-template.html', 'utf8');
    }
};



module.exports = Employee;
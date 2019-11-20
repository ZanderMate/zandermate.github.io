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
}
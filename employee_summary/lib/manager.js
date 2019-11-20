const Employee = require("./employee");

class Manager extends Employee {
    constructor(name, id, email, offNum){
        super(name, id, email);
        this.offNum = offNum;
    }
    getRole() {
        return "Manager";
    }
    getOffice(){
        return this.offNum;
    }
}
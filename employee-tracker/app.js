const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require("console.table");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "employeetracker_db"
});

let allEmployees = [];

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    startApp();
});

function startApp() {
    inquirer
        .prompt({
            name: "initialquestion",
            type: "rawlist",
            message: "What would you like to do?",
            choices: [
                "View All Employees",
                "View All Employees by Department",
                "View all Employees by Manager",
                "Add Employee",
                "Remove Employee",
                "Update Employee Role",
                "Update Employee Manager",
                "Done",
            ]
        })
        .then(function (answer) {
            switch (answer.initialquestion) {
                case "View All Employees":
                    showAllEmployees();
                    break;
                case "View All Employees by Department":
                    showEmployeesDept();
                    break;
                case "View All Employees by Manager":
                    showEmployeesManager();
                    break;
                case "Add Employee":
                    addEmployee();
                    break;
                case "Remove Employee":
                    removeEmployee();
                    break;
                case "Update Employee Role":
                    updateRole();
                    break;
                case "Update Employee Manager":
                    updateManager();
                    break;
                case "Done":
                    done();
                    break;
            }
        })
};

function showAllEmployees() {
    let sql = "SELECT * FROM employee";
    connection.query(sql, function (err, result) {
        if (err) throw err;
        allEmployees = result;
        console.table(allEmployees);
    });
    startApp();
}

function showEmployeesDept() {
    inquirer.prompt({
        name: "department",
        message: "Which department would you like to look at?",
        type: "rawlist",
        choices: ["Sales", "Engineering", "Finance", "Legal"]
    })
        .then(function (answer) {
            let sql = "SELECT name,first_name,last_name FROM employee INNER JOIN role ON employee.role_id = role.id JOIN department ON role.department_id = department.id WHERE name = ?";
            connection.query(sql, [answer], function (err, result) {
                if (err) throw err;
                console.table(results);
            });
            startApp();
        });
};

function showEmployeesManager() {
    inquirer.prompt({
        name: "manager",
        type: "",
        message: ""
    })
        .then(function (answer) {
            let sql = "";
            connection.query(sql, [], function (err, result) {
                if (err) throw err;
                console.table(result);
            });
            startApp();
        });
}

function addEmployee() {
    inquirer.prompt(
        {
            name: "firstname",
            type: "input",
            message: "What is the employee's first name?"
        },
        {
            name: "lastname",
            type: "input",
            message: "What is the employee's last name?"
        },
        {
            name: "role",
            type: "rawlist",
            message: "What is the employee's role?",
            choices: ["Salesperson",
                "Sales Manager",
                "Computer Engineer Lead",
                "Computer Engineer",
                "Accountant",
                "Accounting Lead",
                "Lawyer",
                "Legal Lead"]
        },
        {
            name: "manager",
            type: "rawlist",
            message: "Who is the employee's manager?",
            choices: [],
        },
    ).then(function (answer) {
        let sql = "";
        connection.query(sql, [], function (err, result) {
            if (err) throw err;
            console.table(result);
        });
        startApp();
    })
}
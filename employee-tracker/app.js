const mysql = require("mysql");
const inquirer = require("inquirer");

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
            type: "list",
            message: "What would you like to do?",
            choices: [
                "View All Employees",
                "View All Employees by Department",
                "View All Employees by Role",
                //"View all Employees by Manager",
                "Add Department",
                "Add Role",
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
                case "View All Employees by Role":
                    showEmployeesRole();
                    break;
                // case "View All Employees by Manager":
                //     showEmployeesManager();
                //     break;
                case "Add Department":
                    addDepartment();
                    break;
                case "Add Role":
                    addRole();
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
    let sql = "SELECT employee.id, first_name, last_name, title, department_name, salary, manager_id FROM employee INNER JOIN role ON employee.role_id = role.id INNER JOIN department ON role.department_id = department.id ORDER BY last_name ASC;";
    connection.query(sql, function (err, result) {
        if (err) throw err;
        allEmployees = result;
        console.table(allEmployees);
        startApp();
    });
}

function showEmployeesDept() {
    deptArray = [];
    connection.query("SELECT department_name FROM department", function (err, result) {
        if (err) throw err;

        for (var i = 0; i < result.length; i++) {
            let depts = result[i].department_name;
            deptArray.push(depts);
        }
        inquirer.prompt([
            {
                name: "department",
                message: "Which department would you like to look at?",
                type: "list",
                choices: deptArray
            }
        ])
            .then(function (answer) {
                let sql = "SELECT employee.id as employee_id, employee.first_name, employee.last_name, role.title FROM employee INNER JOIN role ON employee.role_id = role.id INNER JOIN department ON role.department_id = department.id WHERE department.department_name = ?";
                connection.query(sql, [answer.department], function (err, result) {
                    if (err) throw err;
                    console.table(result);
                    startApp();
                });

            });
    })
}

function showEmployeesRole() {
    roleArray = [];
    connection.query("SELECT title FROM role", function (err, result) {
        if (err) throw err;

        for (var i = 0; i < result.length; i++) {
            let roles = result[i].title;
            roleArray.push(roles);
        }
        inquirer.prompt([
            {
                name: "roles",
                message: "Which role would you like to see the employees for?",
                type: "list",
                choices: roleArray
            }
        ]).then(function (answer) {
            let sql = "SELECT employee.id, first_name, last_name, title FROM employee INNER JOIN role ON employee.role_id = role.id WHERE role.title = ?";
            connection.query(sql, [answer.roles], function (err, result) {
                if (err) throw err;
                console.table(result);
                startApp();
            })
        })
    })
}

// function showEmployeesManager() {
//     managerArray = [];
//     connection.query("SELECT first_name, last_name FROM employee", function (err, result) {
//         if (err) throw err;

//         for (var i = 0; i < result.length; i++) {
//             let managers = result[i].first_name + " " + result[i].last_name;
//             managerArray.push(managers);
//         }
//         inquirer.prompt([
//             {
//                 name: "manager",
//                 type: "list",
//                 message: "Which manager's subordinates would you like to look at?",
//                 choices: managerArray
//             }
//         ]).then(function (answer) {
//             let sql = "SELECT employee.first_name, employee.last_name, role.title FROM employee INNER JOIN role ON employee.role_id = role.id WHERE manager_id = ?";
//             connection.query(sql, [answer.manager], function (err, result) {
//                 if (err) throw err;
//                 console.table(result);
//                 startApp();
//             });

//         });
//     })
// }

function addDepartment() {
    inquirer.prompt(
        {
            name: "department",
            type: "input",
            message: "What is the name of the department you would like to add?"
        }
    ).then(function (answer) {
        let sql = "INSERT INTO department (department_name) VALUES (?)";
        connection.query(sql, [answer.department], function (err, result) {
            if (err) throw err;
            startApp();
        })
    })
}

function addRole() {
    deptArray = [];
    connection.query("SELECT id, department_name FROM department", function (err, result) {
        if (err) throw err;

        for (var i = 0; i < result.length; i++) {
            let depts = result[i].department_name;
            deptArray.push(depts);
        }
        inquirer.prompt([
            {
                name: "rolename",
                type: "input",
                message: "What is the name of the role?"
            },
            {
                name: "salary",
                type: "input",
                message: "What is the yearly income of the role?"
            },
            {
                name: "department",
                type: "list",
                message: "What department is this role in?",
                choices: deptArray
            }
        ]).then(function (answer) {
            let deptID;
            let sql = "INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)";
            for (var j = 0; j < result.length; j++) {
                if (result[j].department_name === answer.department) {
                    deptID = result[j].id;
                }
            }
            connection.query(sql, [answer.rolename, answer.salary, deptID], function (err, result) {
                if (err) throw err;
                startApp();
            })
        })
    })
}

function addEmployee() {
    roleArray = [];
    roleIDArray = [];
    managerArray = [];
    managerIDArray = [];
    connection.query("SELECT id, title FROM role", function (err, result) {
        if (err) throw err;
        for (var i = 0; i < result.length; i++) {
            let roles = result[i].title;
            let roleID = result[i].id;
            roleArray.push(roles);
            roleIDArray.push(roleID);
        }
    })
    connection.query("SELECT id, first_name, last_name FROM employee", function (err, result) {
        if (err) throw err;
        for (var j = 0; j < result.length; j++) {
            let manager = result[j].first_name + " " + result[j].last_name;
            let managerID = result[j].id
            managerArray.push(manager);
            managerIDArray.push(managerID);
        }
        managerArray.push("None")
        inquirer.prompt([
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
                type: "list",
                message: "What is the employee's role?",
                choices: roleArray
            },
            {
                name: "manager",
                type: "list",
                message: "Who is the employee's manager?",
                choices: managerArray
            }
        ]).then(function (answer) {
            let roleID;
            let managerID = null;
            let sql = "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?);";
            for (var k = 0; k < roleArray.length; k++) {
                if (roleArray[k] === answer.role) {
                    roleID = roleIDArray[k];
                    break;
                }
            }
            for (var l = 0; l < managerArray.length; l++) {
                if (managerArray[l] === answer.manager) {
                    managerID = managerIDArray[l];
                    break;
                }
            }
            connection.query(sql, [answer.firstname, answer.lastname, roleID, managerID], function (err, result) {
                if (err) throw err
            });
            startApp();
        });
    });
}


function removeEmployee() {
    employeeArray = [];
    connection.query("SELECT id, first_name, last_name FROM employee", function (err, result) {
        if (err) throw err;
        for (var i = 0; i < result.length; i++) {
            let employees = result[i].first_name + " " + result[i].last_name;
            employeeArray.push(employees);
        }
        inquirer.prompt(
            {
                name: "deletename",
                type: "list",
                message: "Which employee would you like to remove?",
                choices: employeeArray
            }
        ).then(function (answer) {
            let deleteID;
            for (var j = 0; j < result.length; j++) {
                if (employeeArray[j] === answer.deletename) {
                    deleteID = result[j].id;
                }
                console.log(deleteID);
            }
            let sql = "DELETE FROM employee WHERE id = ?";
            connection.query(sql, [deleteID], function (err, result) {
                if (err) throw err;
                console.log("You have deleted an employee!")
            });
            startApp();
        });
    });
};

function updateRole() {
    employeeArray = [];
    employeeIDArray = [];
    roleArray = [];
    roleIDArray = [];
    connection.query("SELECT id, title FROM role", function (err, result) {
        if (err) throw err;
        for (var i = 0; i < result.length; i++) {
            let roles = result[i].title;
            let roleID = result[i].id;
            roleArray.push(roles);
            roleIDArray.push(roleID);
        }
    })
    connection.query("SELECT id, first_name, last_name FROM employee", function (err, result) {
        if (err) throw err;
        for (var j = 0; j < result.length; j++) {
            let employee = result[j].first_name + " " + result[j].last_name;
            let employeeID = result[j].id
            employeeArray.push(employee);
            employeeIDArray.push(employeeID);
        }
        inquirer.prompt([
            {
                name: "rolename",
                type: "list",
                message: "Which employee's role are you changing?",
                choices: employeeArray
            },
            {
                name: "newrole",
                type: "list",
                message: "What is the employee's new role?",
                choices: roleArray
            }

        ])
            .then(function (answer) {
                let roleID;
                let employeeID;
                let sql = "UPDATE employee SET `role_id` = ? where id = ?";
                for (var k = 0; k < roleArray.length; k++) {
                    if (roleArray[k] === answer.newrole) {
                        roleID = roleIDArray[k];
                        break;
                    }
                }
                for (var l = 0; l < employeeArray.length; l++) {
                    if (employeeArray[l] === answer.rolename) {
                        employeeID = employeeIDArray[l];
                        break;
                    }
                }
                console.log(roleID + " & " + employeeID);
                connection.query(sql, [roleID, employeeID], function (err, result) {
                    if (err) throw err;
                });
                startApp();
            })
    })
}

function updateManager() {
    let employeeArray = [];
    let managerArray = [];
    let managerIDArray = [];
    let employeeIDArray = [];
    connection.query("SELECT id, first_name, last_name FROM employee", function (err, result) {
        if (err) throw err;
        for (var i = 0; i < result.length; i++) {
            let employee = result[i].first_name + " " + result[i].last_name;
            let idNums = result[i].id;
            employeeArray.push(employee);
            employeeIDArray.push(idNums)
            managerArray.push(employee);
            managerIDArray.push(idNums);
        }
        managerArray.push("None");
        inquirer.prompt([
            {
                name: "managername",
                type: "list",
                message: "Which employee's manager are you changing?",
                choices: employeeArray
            },
            {
                name: "newmanager",
                type: "list",
                message: "Who is the employee's new manager?",
                choices: managerArray
            }
        ]).then(function (answer) {
            let managerID = null;
            let idNumber;
            let sql = "UPDATE employee SET `manager_id` = ? where id = ?";
            for (var k = 0; k < managerArray.length; k++) {
                if (managerArray[k] === answer.newmanager) {
                    managerID = employeeIDArray[k];
                    break;
                }
            }
            for (var j = 0; j < employeeArray.length; j++) {
                if (employeeArray[j] === answer.managername) {
                    idNumber = employeeIDArray[j];
                    break;
                }
            }
            console.log(managerID + " & " + idNumber);
            connection.query(sql, [managerID, idNumber], function (err, result) {
                if (err) throw err;
            });
            startApp();
        })
    })
}

function done() {
    connection.end();
}
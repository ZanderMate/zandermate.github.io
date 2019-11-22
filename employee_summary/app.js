const inquirer = require("inquirer");
const util = require("util");
const fs = require("fs");
const Employee = require("./lib/Employee.js");
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");


const writeFileAsync = util.promisify(fs.writeFile);


function continuingQs() {
    return inquirer.prompt([
        {
            type: "list",
            message: "What is the title of the next person's title on the team",
            name: "nextMember",
            choices: ["Engineer", "Intern", "No other members"]
        }
    ])
}

function promptIntern() {
    return inquirer.prompt([
        {
            type: "input",
            message: "What is the intern's name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is the intern's ID number?",
            name: "id"
        },
        {
            type: "input",
            message: "What is the intern's e-mail address?",
            name: "email"
        },
        {
            type: "input",
            message: "What school is the intern from?",
            name: "school"
        },
        {
            type: "confirm",
            message: "Any other interns on the team?",
            name: "nextMember"
        }
    ])
}

async function generateHTML(manager) {
    let corkboard = Employee.prototype.generateEmployeeHTML();
    let managerCard = Manager.prototype.generateManagerHTML(manager);
    corkboard = corkboard.replace('Something Bizarre', managerCard)
    await writeFileAsync("output/team.html", corkboard);
}

async function init() {
    console.log("Hello!");
    try {
        const bossAnswers = await Manager.prototype.promptManager();
        let managerInfo = new Manager(bossAnswers.name, bossAnswers.id, bossAnswers.email, bossAnswers.officeNumber);
        let nextPerson = continuingQs();
        console.log(nextPerson);
        generateHTML(managerInfo);
        //const engineerAnswers = await Engineer.prototype.promptEngineer();
        //const internAnswers = await promptIntern();
        //if (managerAnswers.newMembers === "Engineer") {
        //const html = generateHTML(answers);
        //await writeFileAsync("index.html", html);
        console.log("Successfully wrote to html file!")
    } catch (err) {
        console.log(err);
    }
}

init();
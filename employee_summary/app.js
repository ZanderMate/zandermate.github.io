//Variables for page
const util = require("util");
const fs = require("fs");
const Employee = require("./lib/Employee.js");
const Engineer = require("./lib/Engineer.js");
const Manager = require("./lib/Manager.js");
const Intern = require("./lib/Intern.js");
const writeFileAsync = util.promisify(fs.writeFile);

//generate HTML for required used cards
function generateHTML(manager, engineer, intern) {
    let corkboard = Employee.prototype.generateHTML();
    let managerCard = Manager.prototype.generateHTML(manager);
    corkboard = corkboard.replace('<div class="something-bizarre"></div>', managerCard);
    for (var i = 0; i < engineer.length; i++) {
        let engineerCard = Engineer.prototype.generateHTML(engineer[i]);
        corkboard = corkboard.replace('<div class="something-bizarre"></div>', engineerCard);
    }
    for (var j = 0; j < intern.length; j++) {
        let internCard = Intern.prototype.generateHTML(intern[j]);
        corkboard = corkboard.replace('<div class="something-bizarre"></div>', internCard);
    }
    return corkboard;
}

//Get info from each Employee subclass and saves intern and engineer info to an array
async function init() {
    console.log("Hello!");
    try {
        const bossAnswers = await Manager.prototype.promptManager();
        let managerInfo = new Manager(bossAnswers.name, bossAnswers.id, bossAnswers.email, bossAnswers.officeNumber);
        let engineerInfo = [];
        let internInfo = [];
        let moreMembers = await Engineer.prototype.continuingEngineer();
        while (moreMembers.nextEngineer === true) {
            const nerdAnswers = await Engineer.prototype.promptEngineer();
            let engineerAnswers = new Engineer(nerdAnswers.name, nerdAnswers.id, nerdAnswers.email, nerdAnswers.gitHub);
            engineerInfo.push(engineerAnswers);
            moreMembers = await Engineer.prototype.continuingEngineer();
        };
        let someInterns = await Intern.prototype.continuingIntern();
        while (someInterns.nextIntern === true) {
            const peonAnswers = await Intern.prototype.promptIntern();
            let internAnswers = new Intern(peonAnswers.name, peonAnswers.id, peonAnswers.email, peonAnswers.school);
            internInfo.push(internAnswers);
            someInterns = await Intern.prototype.continuingIntern();
        }
        const html = generateHTML(managerInfo, engineerInfo, internInfo);
        writeFileAsync("output/team.html", html);
        console.log("Successfully wrote to html file!")
    } catch (err) {
        console.log(err);
    }
}

init();
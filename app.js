const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const Choices = require("inquirer/lib/objects/choices");

//employees class
const employees = [];

//team questions
const questions = [{
        name: "name",
        message: "Employees name"
    },
    {
        name: "email",
        message: "Email Address?"
    },
    {
        name: "Employee id",
        message: "Employee id?"
    },
];

//role choice questions
const roleQuestions = [{
    type: "list",
    name: "Role",
    message: "Employee Role?",
    choices: [
        "engineer", "intern"
    ]
}];

//team member questions
const managerQuestions = [{
    name: "officeNumber",
    message: "Managers office number?"
}];

const engineerQuestions = [{
    name: "github",
    message: "Github username?",
}];

const internQuestions = [{
    name: "School",
    message: "What School?",
}];

//confirm add more employees
const confirm = [{
    type: "confirm",
    name: "add more",
    message: "Any more employees??",
}];
//manager function 
function init() {
    inquirer.prompt([
        ...questions, ...managerQuestions
    ]).then((answers) => {
        const manager = new Manager(answers.name, answers.email, answers["Employee id"], answers.officeNumber);
        console.log(manager);
        employees.push(manager);
        askRoleQuestions();
    });
}
// engineer and intern function 
function askRoleQuestions() {
    inquirer.prompt([...roleQuestions, ...confirm])
        .then(answers => {
            if (answers.Role === "engineer") {
                inquirer.prompt([
                    ...questions, ...engineerQuestions
                ]).then((engineeranswers) => {
                    const engineer = new Engineer(engineeranswers.name, engineeranswers.email, engineeranswers["Employee id"], engineeranswers.github);
                    console.log(engineer)
                    employees.push(engineer);
                    if (answers) { askRoleQuestions(); } else {
                        const teamhtmlstring = render(employees);
                        console.log(teamhtmlstring);
                        fs.writeFileSync(outputPath, teamhtmlstring);
                    }
                });
            }
            if (answers.Role === "intern") {
                inquirer.prompt([
                    ...questions, ...internQuestions,
                ]).then((internanswers) => {
                    const intern = new Intern(internanswers.name, internanswers.email, internanswers["Employee id"], internanswers.School);
                    console.log(intern)
                    employees.push(intern);
                    if (answers.confirm) { askRoleQuestions(); } else {
                        const teamhtmlstring = render(employees);
                        console.log(teamhtmlstring);
                        fs.writeFileSync(outputPath, teamhtmlstring);
                    }
                });
            }

        });
}
init();
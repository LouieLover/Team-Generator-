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
const Employee = require("./lib/Employee");
let Choice = require("inquirer/lib/objects/choice");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
//const employee = new Employee();
inquirer
    .prompt([{
        type: "checkbox",
        name: "Role",
        message: "Employee Role?",
        choices: ["manager", "engineer", "intern"]
    }, ]).then((answers) => {
        console.log(answers);
        if (Choice = "manager") {
            const manager = new Manager(); {
                inquirer.prompt([
                    ...questions, ...managerQuestions
                ]).then((manager))
                console.log(questions, managerQuestions);
            }
        }
        if (Choice = "engineer") {
            const engineer = new Engineer(); {
                inquirer.prompt([
                    ...questions, ...engineerQuestions
                ]).then((engineer))
                console.log(questions, engineerQuestions);
            }
        }
        if (Choice = "intern") {
            const intern = new Intern(); {
                inquirer.prompt([
                    ...questions, ...internQuestions
                ]).then((intern))
                console.log(questions, internQuestions);
            }
        }

    });


const questions = [{
        name: "name",
        message: "Employees name"
    },
    {
        name: "email",
        message: "Email Address?"
    },
    {
        name: "id",
        message: "Employee id?"
    },

];

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

const confirm = [{
    type: "confirm",
    name: "add more",
    message: "Any more employees??",
}];
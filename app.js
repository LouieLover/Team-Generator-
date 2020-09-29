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


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
//const employees = [];

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

const roleQuestions = [{
    type: "list",
    name: "Role",
    message: "Employee Role?",
    choices: [
        "engineer", "intern"
    ]
}];

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
                    if (answers) { askRoleQuestions(); }
                });
            }
            if (answers.Role === "intern") {
                inquirer.prompt([
                    ...questions, ...internQuestions,
                ]).then((internanswers) => {
                    const intern = new Intern(internanswers.name, internanswers.email, internanswers["Employee id"], internanswers.School);
                    console.log(intern)
                    employees.push(intern);
                    if (answers.confirm) { askRoleQuestions(); }
                });
            }

        });
}
init();



function employees() {
    //for loop

    employees[i].getRole(Manager);
    employees[i].getRole(Engineer);
    employees[i].getRole(Intern);

    for (getRole[i] = 0; i < a.length; i++) {
        getRole[i] = answers[i];
    }

    // parsing an array

    //template

    //html
}



// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
// nodes
const inquirer = require('inquirer');
const fs = require('fs');

// Team constants
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');

// page generation
const {writeFile} = require('./src/generate-page');
const originalPage = require('./src/original-page');

// employee creation
employeeCreate = [];

// questions for employee additions
const manQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'Enter Name of the Manager',
        validate: managerName => {
            if (managerName) {
            return true;
        } else {
            console.log("Manager's name");
            return false;
        }
    }
},
{
    type: 'number',
    name: 'id',
    message: 'Enter the ID of the new Manager',
    validate: idNumber => {
        if(idNumber) {
            return true;
        } else {
            console.log("Enter the Employee ID of new Manager");
            return false;
        }
    }
},
{
    type: 'input',
    name: 'email',
    message: 'Enter the email of the new Manager',
    validate: emailManager => {
        if(emailManager) {
            return true;
        } else {
            console.log("Enter the email of new Manager");
            return false;
        }
    }
},
{
    type: 'number',
    name: 'officeNumber',
    message: 'Enter the office number of the new Manager',
    validate: officeNumber => {
        if(officeNumber) {
            return true;
        } else {
            console.log("Enter the office number of new Manager");
            return false;
        }
    }
},
]
// employee add question
const empQuestions = [
    {
        type: 'list',
        name: 'employeeAdd',
        message: 'Do you want to add an Engineer or Intern?',
        choices: [
            "Yes, add Engineer",
            "Yes, add Intern",
            "No thanks, I'm finished"
        ]
    }
]
// function to initialize application, add manager, and adds to employeeCreate
const managerAdd = async() => {
    const result = await inquirer.prompt(manQuestions)
    const managerPost = new Manager(
        result.name,
        result.id,
        result.email,
        result.officeNumber
    );
    employeeCreate.push(managerPost);
    employeeAdd();
};
// engineer questions
const engQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'Enter Name of the Engineer',
        validate: engineerName => {
            if (engineerName) {
            return true;
        } else {
            console.log("Engineer's name");
            return false;
        }
    }
},
{
    type: 'number',
    name: 'id',
    message: 'Enter the Employee ID of the new Engineer',
    validate: idNumber => {
        if(idNumber) {
            return true;
        } else {
            console.log("Enter the ID of new Engineer");
            return false;
        }
    }
},
{
    type: 'input',
    name: 'email',
    message: 'Enter the email of the new Engineer',
    validate: emailManager => {
        if(emailManager) {
            return true;
        } else {
            console.log("Enter the email of new Engineer");
            return false;
        }
    }
},
{
    type: 'input',
    name: 'githubID',
    message: 'Enter the Github username of the Engineer',
    validate: githubID => {
        if(githubID) {
            return true;
        } else {
            console.log("Enter the engineer's Github");
            return false;
        }
    }
},
]
// intern questions
const internQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'Enter Name of the Intern',
        validate: internName => {
            if (internName) {
            return true;
        } else {
            console.log("Intern's name");
            return false;
        }
    }
},
{
    type: 'number',
    name: 'id',
    message: 'Enter the Employee ID of the new Intern',
    validate: idNumber => {
        if(idNumber) {
            return true;
        } else {
            console.log("Enter the ID of new Intern");
            return false;
        }
    }
},
{
    type: 'input',
    name: 'email',
    message: 'Enter the email of the new Intern',
    validate: emailManager => {
        if(emailManager) {
            return true;
        } else {
            console.log("Enter the email of new Intern");
            return false;
        }
    }
},
{
    type: 'input',
    name: 'schoolName',
    message: 'Enter the name of the school the Intern attends',
    validate: schoolName => {
        if(schoolName) {
            return true;
        } else {
            console.log("Enter the intern's school");
            return false;
        }
    }
},
]

// employeeAdd creates different kinds of employees
const employeeAdd = async() => {
    const result = await inquirer.prompt(empQuestions)
    .then(function(result) {
        switch (result.employeeAdd) {
            case "Yes, add Engineer":
                engineerAdd();
                break;

            case "Yes, add Intern":
                internAdd();
                break;

            case "No thanks, I'm finished":
                 writeFile(employeeCreate);
                break;
        }
    })
}

// this function provides questions regarding adding the Engineer and adds to employeeCreate
const engineerAdd = async() => {
    const result = await inquirer.prompt(engQuestions)

    const engineerPost = new Engineer(
        result.name,
        result.id,
        result.email,
        result.githubID
    )
    employeeCreate.push(engineerPost);
    employeeAdd();
}

// same as above function, except for Intern
const internAdd = async() => {
    const result = await inquirer.prompt(internQuestions)

    const internPost = new Intern(
        result.name,
        result.id,
        result.email,
        result.schoolName
    )
    employeeCreate.push(internPost);
    employeeAdd();
}
// added to start application
managerAdd();
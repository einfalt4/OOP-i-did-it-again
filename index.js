// nodes
const inquirer = require('inquirer');
const fs = require('fs');

// Team constants
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');

// page generation
const { writeFile } = require('./src/generate-page');
const originalPage = require('./src/original-page');

// employee creation
let employeeCreate = [];

// questions for employee additions
const manQuestions = () => {
    return inquirer
       .prompt([
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
    {
        type: 'confirm',
        name: 'employeeAdd',
        message: 'Do you want to add an Engineer or Intern?',
        default: false
    }
])
.then(employeeData => {
    employeeCreate.push(employeeData);
    if(employeeData.employeeAdd) {
        inquirer.prompt([
            {
                type: 'list',
                name: 'employeeList',
                message: 'Do you want to add an Engineer or Intern',
                choices: ['Engineer', 'Intern']
            }
        ])
        .then(listAnswers => {
            if(listAnswers.employeeList === 'Engineer') {
                engQuestions();
            } else {
                internQuestions();
            }
        })
    } else {
        const addHTML = originalPage(employeeCreate)
        writeFile(addHTML)
        .then(() => {
            console.log('Success!')
        })
    }
})
};


// engineer questions
const engQuestions = () => {
    return inquirer
    .prompt([
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
    name: 'github',
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
{
    type: 'confirm',
    name: 'employeeAdd',
    message: 'Do you want to add an Engineer or Intern?',
    default: false
}

])
.then(employeeData => {
    employeeCreate.push(employeeData);
    if(employeeData.employeeAdd) {
        inquirer.prompt([
            {
                type: 'list',
                name: 'employeeList',
                message: 'Do you want to add an Engineer or Intern',
                choices: ['Engineer', 'Intern']
            }
        ])
        .then(listAnswers => {
            if(listAnswers.employeeList === 'Engineer') {
                engQuestions();
            } else {
                internQuestions();
            }
        })
    } else {
        const addHTML = originalPage(employeeCreate)
        writeFile(addHTML)
        .then(() => {
            console.log('Success!')
        })
    }
})
};
// intern questions
const internQuestions = () => {
    return inquirer
     .prompt([
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
    name: 'school',
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
{
    type: 'confirm',
    name: 'employeeAdd',
    message: 'Do you want to add an Engineer or Intern?',
    default: false
}

])
.then(employeeData => {
    employeeCreate.push(employeeData);
    if(employeeData.employeeAdd) {
        inquirer.prompt([
            {
                type: 'list',
                name: 'employeeList',
                message: 'Do you want to add an Engineer or Intern',
                choices: ['Engineer', 'Intern']
            }
        ])
        .then(listAnswers => {
            if(listAnswers.employeeList === 'Engineer') {
                engQuestions();
            } else {
                internQuestions();
            }
        })
    } else {
        const addHTML = originalPage(employeeCreate)
        writeFile(addHTML)
        .then(() => {
            console.log('Success!')
        })
    }
})
};

// added to start application
manQuestions();
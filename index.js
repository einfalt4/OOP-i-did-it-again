// Team constants
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");

// page generation
const {writeFile} = require('./src/generate-page');
const originalPage = require('./src/original-page');

// nodes
const inquirer = require('inquirer');
const fs = require('fs');

// employee creation
employeeCreate = [];

// questions for employee additions
const manQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'Enter Name of Manager',
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
    message: 'Enter the ID of new Manager',
    validate: idNumber => {
        if(idNumber) {
            return true;
        } else {
            console.log("Enter the ID of new Manager");
            return false;
        }
    }
},
{
    type: 'input',
    name: 'email',
    message: 'Enter the email of new Manager',
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
    message: 'Enter the office number of new Manager',
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


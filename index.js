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
        message: 'Name of Manager',
        validate: managerName => {
            if (managerName) {
            return true;
        } else {
            console.log("Manager's name");
            return false;
        }
    }
},

]
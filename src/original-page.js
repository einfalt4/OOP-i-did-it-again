const Intern = require('../lib/intern')
const Manager = require('../lib/manager')
const Engineer = require('../lib/engineer')

const originalPage = function(employeeCreate) {
    const createHTML = [];
    const headerHTML = `
    <!DOCTYPE html> 
<html lang="en"> 
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Team Profile Generator</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css">
    </head>

    <body>
    <div class="container-fluid">
    <div class="row bg-dark text-center">
  <h1 class="text-white p-4">The Team</h1>
  </div> 
  <div class="row g-2 justify-content-around p-3">
    `;

    createHTML.push(headerHTML)

    for(let i = 0; i < employeeCreate.length; i++) {
        createHTML.push(employeeCreate[i].createHTML());
    }
  
}

module.exports = originalPage;
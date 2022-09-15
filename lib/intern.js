const Employee = require('./employee')

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school;
    }

    getRole() {
        return "Intern";
    }

    getSchool() {
        return this.school;
    }

    getHTML() {
        return `
        <div class="card m-2" style="width: 200px;">
        <div class="card-body">
        <h4 class="card-title">${this.name}</h4>
        <h6 class="card-subtitle mb-2 text-muted">${this.getRole()}</h6>
        <p class="card-text">id: ${this.id}</p>
        <p class="card-text">School:${this.school}"</p>
        <a href="mailto:${this.email}" class="card-link">${this.email}</a>
        </div>
        </div>
        `
    }
}

module.exports = Intern;
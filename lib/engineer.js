const Employee = require('./employee')

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github;
    }

    getRole() {
        return "Engineer";
    }

    getGithub() {
        return this.github;
    }

    getHTML() {
        return `
        <div class="card m-2" style="width: 200px;">
        <div class="card-body">
        <h4 class="card-title">${this.name}</h4>
        <h6 class="card-subtitle mb-2 text-muted">${this.getRole()}</h6>
        <p class="card-text">id: ${this.id}</p>
        <a href="https://www.github.com/${this.github}" class="card-link">GitHub ID</a>
        <a href="mailto:${this.email}" class="card-link">${this.email}</a>
        </div>
        </div>
        `
    }
}

module.exports = Engineer;
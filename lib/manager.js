const Employee = require('./employee')

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber;
    }

    returnTitle() {
        return "Manager";
    }

    returnOffice() {
        return this.officeNumber;
    }

    returnHTML() {
        return `
        <div class="card m-2" style="width: 200px;">
        <div class="card-body">
        <h4 class="card-title">${this.name}</h4>
        <h6 class="card-subtitle mb-2 text-muted">${this.returnTitle()}</h6>
        <p class="card-text">id: ${this.id}</p>
        <p class="card-text">office:${this.officeNumber}"</p>
        <a href="mailto:${this.email}" class="card-link">${this.email}</a>
        </div>
        </div>
        `
    }
}

module.exports = Manager;
/**
 * Extended employee class
 * in addition to employee's attribute, 
 * office number
 * getRole() // overridden to return 'Manager'
 */

const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        super.getRole('Manager');
    }
}

module.exports = Manager;

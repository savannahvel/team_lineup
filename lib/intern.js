/**
 * Extended employee class
 * in addition to employee's attribute, 
 * school
 * getSchool()
 * getRole() // overridden to return 'Intern'
 */

const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, id, email, schoolName) {
        super(name, id, email);
        this.schoolName = schoolName;
    }

    getSchool() { return this.schoolName; }

    getRole() {
        return super.getRole('Intern');
    }
}

module.exports = Intern;
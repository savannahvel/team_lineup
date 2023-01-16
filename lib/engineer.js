/**
 * Extended employee class
 * in addition to employee's attribute, 
 * github // github username
 * getGithub()
 * getRole() // overridden to return 'Engineer'
 */

const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, id, email, githubUsername) {
        super(name, id, email);
        this.githubUsername = githubUsername;
        super.getRole('Engineer');
    }
}

module.exports = Engineer;
const inquirer = require('inquirer');

const generateHtml = require('./generateHtml')
const Manager = require('../lib/manager');
const Engineer = require('../lib/engineer');
const Intern = require('../lib/intern');
const { managerQuestions, engineerQuestions, internQuestions, continueQuestion } = require('./questions');

let team = [];

function continuationPrompt() {
    inquirer.prompt(continueQuestion()).then((resp) => {
        for (const toContinue in resp) {
            if (resp[toContinue] === 'Add an engineer') {
                inquirer.prompt(engineerQuestions()).then((engineerAnswers) => {
                    const { engineer_name, engineer_id, engineer_email, engineer_github } = engineerAnswers;
                    const newEngineer = new Engineer(engineer_name, engineer_id, engineer_email, engineer_github);
                    const formattedEngineer = {
                        role: newEngineer.getRole(),
                        name: newEngineer.name,
                        id: newEngineer.id,
                        github: newEngineer.githubUsername,
                        email: newEngineer.email,
                    } 
                    team.push(formattedEngineer);
                    continuationPrompt();
                })
            }
            else if (resp[toContinue] === 'Add an intern') {
                inquirer.prompt(internQuestions()).then((internAnswers) => {
                    const { intern_name, intern_id, intern_email, intern_school } = internAnswers;
                    const newIntern = new Intern(intern_name, intern_id, intern_email, intern_school);
                    const formattedIntern = {
                        role: newIntern.getRole(),
                        name: newIntern.name,
                        id: newIntern.id,
                        school: newIntern.schoolName,
                        email: newIntern.email,
                    } 
                    team.push(formattedIntern);
                    continuationPrompt();
                })
            } else {
                generateHtml(team);
            }
        }
    })
}


module.exports = function buildTeam() {
    console.log("Let's build your team's roster web page! Start by entering in the manager's information.")
    inquirer.prompt(managerQuestions())
        .then((answers) => {
        const { manager_name, manager_id, manager_email, manager_office_number } = answers;
        const newManager = new Manager(manager_name, manager_id, manager_email, manager_office_number);
        const formattedManager = {
            role: newManager.getRole(),
            name: newManager.name,
            id: newManager.id,
            officeNumber: newManager.officeNumber,
            email: newManager.email,
        }    
        team.push(formattedManager);
    }).then(() => {
        continuationPrompt();
    })
}


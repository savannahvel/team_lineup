const inquirer = require('inquirer');

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
                    team.push(newEngineer);
                    continuationPrompt();
                })
            }
            else if (resp[toContinue] === 'Add an intern') {
                inquirer.prompt(internQuestions()).then((internAnswers) => {
                    const { intern_name, intern_id, intern_email, intern_school } = internAnswers;
                    const newIntern = new Intern(intern_name, intern_id, intern_email, intern_school);
                    team.push(newIntern);
                    continuationPrompt();
                })
            } else {
                console.log('finished building team');
            }
        }
    })
}


module.exports = async function buildTeam() {
    console.log("Let's build your team's roster web page! Start by entering in the manager's information.")
    inquirer.prompt(managerQuestions()).then((answers) => {
        const { manager_name, manager_id, manager_email, manager_office_number } = answers;
        const newManager = new Manager(manager_name, manager_id, manager_email, manager_office_number);
        team.push(newManager);
        continuationPrompt();
    })
}

// console.log(team)


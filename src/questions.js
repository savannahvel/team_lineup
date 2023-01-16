function managerQuestions() {
    return [
        {
            type: 'input',
            message: "What is the name of the team's manager?",
            name: 'manager_name',
        },
        {
            type: 'input',
            message: "What is the manager's employee ID?",
            name: 'manager_id',
        },
        {
            type: 'input',
            message: "What is the manager's email address?",
            name: 'manager_email',
        },
        {
            type: 'input',
            message: "What is the manager's office number?",
            name: 'manager_office_number',
        }
    ];
}

function engineerQuestions() {
    return [
        {
            type: 'input',
            message: "What is engineer's name?",
            name: 'engineer_name',
        },
        {
            type: 'input',
            message: "What is the engineer's employee ID?",
            name: 'engineer_id',
        },
        {
            type: 'input',
            message: "What is the engineer's email address?",
            name: 'engineer_email',
        },
        {
            type: 'input',
            message: "What is the engineer's github username?",
            name: 'engineer_github',
        }
    ];
}

function internQuestions() {
    return [
        {
            type: 'input',
            message: "What is intern's name?",
            name: 'intern_name',
        },
        {
            type: 'input',
            message: "What is the intern's employee ID?",
            name: 'intern_id',
        },
        {
            type: 'input',
            message: "What is the intern's email address?",
            name: 'intern_email',
        },
        {
            type: 'input',
            message: "What is the intern's school?",
            name: 'intern_school',
        }
    ];
}

function continueQuestion() {
    return [
        {
            type: 'list',
            message: "What would you like to do next?",
            choices: [
                'Add an engineer',
                'Add an intern',
                'All done - finish building the team'
            ],
            name: 'continue_answer',
        }
    ]
}

module.exports = {
    managerQuestions,
    engineerQuestions,
    internQuestions,
    continueQuestion
}

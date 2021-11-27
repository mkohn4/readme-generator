const inquirer = require ('inquirer');

const prompt = () => {
        //if readmeData.projects doesnt, exist, create it
        if (!readmeData.projects) {
            readmeData.projects = [];
        }
        console.log(`Add a New Project README`);
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project? (Required)',
            validate: title => {
                if (title) {
                    return true;
                } else {
                    console.log('Enter your Project Name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'What is the description of your project? (Required)',
            validate: description => {
                if (description) {
                    return true;
                } else {
                    console.log('Enter your Project Description!');
                    return false;
                }
            }
        },{
            type: 'input',
            name: 'instructions',
            message: 'What  are the installation instructions? (Required)',
            validate: instructions => {
                if (instructions) {
                    return true;
                } else {
                    console.log('Enter your Projects Installaton Instructions!');
                    return false;
                }
            }
        },{
            type: 'input',
            name: 'usageInfo',
            message: 'What is the Usage Information for this Project?'
        },{
            type: 'input',
            name: 'contributionGuidelines',
            message: 'What are the contribution guidelines for your project?'
        },{
            type: 'input',
            name: 'testInstructions',
            message: 'What are the test instructions for your project?'
        },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'Which license would you like to use?',
            choices: ['MIT', 'GNU']
        },
        {
            type: 'confirm',
            name: 'badges',
            message: 'Would you like to add a badge for the License?',
            default: false
        },,
        {
            type: 'input',
            name: 'badgeColor',
            message: 'What would you like your Badge Color to be?',
            when: ({badges}) => {
                //if user selected true in badges prompt, show this q
                if (badges) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'username',
            message: 'What is your Github Username?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?'
        }
    ])
}
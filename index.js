const inquirer = require ('inquirer');
const {writeFile, markup, licenseInfo} = require('./templates/templates.js');
const fs = require('fs');

const readmeInfo = () => {
        //if readmeData.projects doesnt, exist, create it
        /*if (readmeData.projects === undefined) {
            readmeData.projects = [];
        }
        console.log(`Add a New Project README`);*/
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
            message: 'What are the installation instructions? (Required)',
            validate: instructions => {
                if (instructions) {
                    return true;
                } else {
                    console.log('Enter your Projects Installaton Instructions!');
                    return false;
                }
            }
        },{
            type: 'confirm',
            name: 'screenshot',
            message: 'Have you put a screenshot.png file for your application into the images directory of Desktop/projects/readme-gen/images ?',
            validate: screenshot => {
                if (screenshot) {
                    return true;
                } else {
                    console.log('Please add the screenshot.png file to continue');
                    return false;
                }
            }
        },
        {
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
            name: 'license',
            message: 'Which license would you like to use?',
            choices: ['MIT', 'GNU'],
            validate: license => {
                if (license) {
                    return true;
                } else {
                    console.log('Choose a License!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'badges',
            message: 'Would you like to add a custom badge color for the License?',
            default: false
        },
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
    .then(readmeAnswers => {
        console.log(readmeAnswers);
        /*console.log(readmeData);
        readmeData.projects = [];
        //push responses to the readmeData.projects array
        readmeData.projects.push(readmeAnswers);*/
        //return the current data
        return readmeAnswers;
    })
};



readmeInfo()
    .then(readmeAnswers => {
         return licenseInfo(readmeAnswers);
    }).then(readmeAnswers => {
        return markup(readmeAnswers);
    }).then(markup => {
        return writeFile(markup);
    });

/*function init () {
    prompt(questions)
    .then(generateMarkup)
    .then((templateToSave))
}
function generateMarkup(answers) {
    return markup(answers);
}*/
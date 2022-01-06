// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Enter a title:'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter a description:'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Enter instructions for installation:'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Enter instructions for usage:'
  },
  {
    type: 'input',
    name: 'credits',
    message: 'Enter any credits:'
  },
  {
    type: 'input',
    name: 'license',
    message: 'Enter a license if applicable:'
  },
  {
    type: 'input',
    name: 'contribute',
    message: 'Enter instructions for contribution:'
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Enter tests:'
  },
  {
    type: 'input',
    name: 'username',
    message: 'Enter GitHub username:'
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter email address:'
  },
  {
    type: 'input',
    name: 'filename',
    message: 'Enter a filename (default README.md):'
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  const text = generateMarkdown(data);
  fs.writeFile(fileName, text, (err) => {
    if (err) throw err;
    console.log('README generated.');
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(data => {
    let filenameInput = 'README.md';
    if (data.filename) {
      filenameInput = data.filename;
    }
    writeToFile(filenameInput, data);
  });
}

// Function call to initialize app
init();

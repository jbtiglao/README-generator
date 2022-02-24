// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

//GIVEN a command-line application that accepts user input
//WHEN I am prompted for information about my application repository
//THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
//WHEN I enter my project title
//THEN this is displayed as the title of the README
//WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
//THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
//WHEN I choose a license for my application from a list of options
//THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
//WHEN I enter my GitHub username
//THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
//WHEN I enter my email address
//THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
//WHEN I click on the links in the Table of Contents
//THEN I am taken to the corresponding section of the README


// TODO: Create an array of questions for user input
const questions = [{
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Enter a description of your project."
    },
    {
        type: "input",
        name: "installation",
        message: "What are the steps required to install your project?"
    },
    {
        type: "input",
        name: "usage",
        message: "Enter instructions for using your project."
    },
    {
        type: "checkbox",
        name: "license",
        message: "Select license.",
        choices: ["AFL-3.0", "Apache", "Artistic", "BSL", "BSD", "CC", "MIT", "GNU"]
    },
    {
        type: "input",
        name: "contribution",
        message: "What are the guidelines for contributing to your project?"
    },
    {
        type: "input",
        name: "tests",
        message: "Enter test information and instructions for your project."
    },
    {
        type: "input",
        name: "credits",
        message: "Do you have collaborators or reference materials that you used in developing your project?"
    },
    {
        type: "input",
        name: "author",
        message: "Who is/are the author(s) of this project?"
    },
    {
        type: "input",
        name: "questions",
        message: "For questions, please contact:"
    },
    {
        type: "input",
        name: "username",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?"
    },

];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    
}

// Function call to initialize app
init();
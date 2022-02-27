// TODO: Include packages needed for this application 
// External packages
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

// Internal modules
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
// Questions must be about the project title, description, installation, usage, contribution guidelines, tests, license, and instructions for additional questions or reporting issues.
// User input will be added to corresponding sections. 
// The Questions section must include the author's email address and GitHub username, with a link to author's GitHub profile.
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Enter your project's description."
    },
    {
        type: "input",
        name: "url",
        message: "Enter the url of your deployed project."
    },
    {
        type: "input",
        name: "installation",
        message: "Enter instructions for installing your project."
    },
    {
        type: "input",
        name: "usage",
        message: "Enter instructions for using your project."
    },
    {
        // When a license  is chosen from a list of options, a badge for that license is added near the top of the README 
        // A notice is added to the section of the README entitled License that explains which license the application is covered under
        type: "checkbox",
        name: "license",
        message: "Select license.",
        choices: ["Apache-2.0", "BSD 3", "BSD 2", "MIT", "GPLv3", "LGPLv3", "MPL 2.0", "CDDL 1.0"]
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
        message: "Who is/are the author(s) of the project?"
    },
    {
        type: "input",
        name: "questions",
        message: "Enter the name of person to contact for questions or issues."
    },
    {
        type: "input",
        name: "username",
        message: "What is your GitHub username?"
    }, 
    { 
        type: "input",
        name: "profile",
        message: "Enter the link to your GitHub profile"
    }, 
    { 
        type: "input",
        name: "email",
        message: "What is your email?"
    },

];

module.exports = {
    questions:questions,
};


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName + ".md", data, function (error){
        if (error) {
            console.log(error)
        }

        console.log("All done! Your README file is generated!")
    });
}

// TODO: Create a function to initialize app
async function init() {
    const info = await inquirer.prompt(questions);
    writeToFile("README", generateMarkdown(info));
    
}

// Function call to initialize app
init();
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

let licenseBadge = '';

function renderLicense(data) {
  for (const license of data.license) {
    if (license == "Apache-2.0") {
      licenseBadge += `[![License: Apache-2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    } else if (license == "BSD 3") {
      licenseBadge += `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
    } else if (license == "BSD 2") {
      licenseBadge += `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`
    } else if (license == "MIT") {
      licenseBadge += `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    } else if (license == "GPLv3") {
      licenseBadge += `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
    } else if (license == "LGPLv3") {
      licenseBadge += `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0`
    } else if (license == "MPL 2.0") {
      licenseBadge += `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
    } else if (license == "CDDL 1.0") {
      licenseBadge += `[![License: CDDL](https://img.shields.io/badge/License-CDDL-yellowgreen)](https://opensource.org/licenses/CDDL-1.0)`
    }
  }
  return licenseBadge;
}

// TODO: Create a function to generate markdown for README
// User input on the array of questions are added on the following README sections: Title, Description, Installation, Usage, Contributing, Tests, License, and Questions.
// When the links in the Table of Contents are clicked, the user is taken to the corresponding README section.

function generateMarkdown(data) {
  return `
  
  # ${data.title}

  ${renderLicense(data)}

  ---
  ## Description

  ${data.description}



  [A deployed version can be viewed here.](${data.url})

  ---
  ## Table of Contents
  1. [Title](#title)
  2. [Description](#description)
  3. [Installation](#installation)
  4. [Usage](#usage)
  5. [License](#license)
  6. [Contributing](#contributing)
  7. [Tests](#tests)
  8. [Credits](#credits)
  9. [Author](#author)
  10. [Questions](#questions)
  
  ---
  ## Installation
  ${data.installation}

  
  ---
  ## Usage
  ${data.usage}

  ---
  ## License
  License used for this project - ${data.license}
  
  For more information on the above license and other license types, please see the following websites:  
  - [Open Source Initiative](https://opensource.org/licenses)
  - [Choose a License](https://choosealicense.com/)

  ---
  ## Contributing
  To contribute to this application: 
  ${data.contribution}

  ---
  ## Tests
  ${data.tests}

  ---
  ## Credits
  ${data.credits}

  ---
  ## Author
  ${data.author}

  ---
  ## Questions
  For questions or issues, please contact: 
  - ${data.questions} 
  - Email: ${data.email}
  - GitHub Username: ${data.username}
  - GitHub Profile: ${data.profile}

`;
}

module.exports = generateMarkdown;
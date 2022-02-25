// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "Apache") {
    return "[![License: Apache](https://img.shields.io/badge/License-Apache-blue)](https://www.apache.org/licenses/LICENSE-2.0)";
  } else if (license === "BSD 3") {
    return "[![License: BSD 3](https://img.shields.io/badge/License-BSD%203-green)](https://opensource.org/licenses/BSD-3-Clause)";
  } else if (license === "BSD 2") {
    return "[![License: BSD 2](https://img.shields.io/badge/License-BSD%202-yellow)](https://opensource.org/licenses/BSD-2-Clause)";
  } else if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-important)](https://opensource.org/licenses/MIT)";
  } else if (license === "GPL") {
    return "[![License: GPL](https://img.shields.io/badge/License-GPL-blueviolet)](https://www.gnu.org/licenses/gpl-3.0.en.html)";
  } else if (license === "LGPL") {
    return "[![License: LGPL](https://img.shields.io/badge/License-LGPL-ff69b4)](https://www.gnu.org/licenses/lgpl-3.0.en.html)";
  } else if (license === "MPL") {
    return "[![License: MPL](https://img.shields.io/badge/License-MPL-red)](https://www.mozilla.org/en-US/MPL/)";
  } else if (license === "CDDL") {
    return "[![License: CDDL](https://img.shields.io/badge/License-CDDL-yellowgreen)](https://opensource.org/licenses/CDDL-1.0)";
  }
}

module.exports = {
  renderLicenseBadge: renderLicenseBadge
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "Apache":
      return "https://opensource.org/licenses/Apache-2.0";
    
    case "BSD 3":
      return "https://opensource.org/licenses/BSD-3-Clause";
    
    case "BSD 2":
      return "https://opensource.org/licenses/BSD-2-Clause";
    
    case "MIT":
      return "https://opensource.org/licenses/MIT";
    
    case "GPL":
      return "https://opensource.org/licenses/gpl-license";
    
    case "LGPL":
      return "https://opensource.org/licenses/lgpl-license";
    
    case "MPL":
      return "https://opensource.org/licenses/MPL-2.0";
    
    case "CDDL":
      return "https://opensource.org/licenses/CDDL-1.0";
    
    default:
      return "https://opensource.org/licenses";
  }
}

module.exports = {
  renderLicenseLink: renderLicenseLink
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.title}

  ${data.description}

  ${data.renderLicenseBadge}

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

  To clone the repo:
    git clone ${data.clone}
  
  ---
  ## Usage
  ${data.usage}

  ---
  ## License
  License used for this project - ${data.license}
  * For more information on license types, please see the following websites - 
  [Choose A License](https://choosealicense.com/)
  [Open Source Initiative](https://opensource.org/licenses)

  ---
  ## Contributing
  To contribute to this application, create a pull request.
  Guidelines  for creating a pull request:
  - Fork the repo
  - Create a feature branch (git checkout -b NAME)
  - Commit your new feature (git commit -m "Add feature")
  - Push your branch (git push)
  - Create a new pull request

  Following a code review, your feature will be merged.

  ---
  ## Tests
  ${data.test}

  ---
  ## Credits
  ${data.credits}

  ---
  ## Author
  ${data.author}

  ---
  ## Questions
  For questions or issues, please contact:
  - GitHub Username: ${data.userName}
  - Email: ${data.email}


`;
}

module.exports = generateMarkdown;

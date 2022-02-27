# README Generator

  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

  ---
  ## Description

  A command-line application that dynamically generates a professional README.md file from a user's input using the [Inquirer package](https://www.npmjs.com/package/inquirer).

  ### Video

  [readme_generator](/images/screenshot1_readme_gen.png)


  [A walk-through video demonstrating the functionalities can be viewed and/or downloaded here.](https://drive.google.com/file/d/1YL6vFN1IsS-tO13Tdt6X1MRUBaci36Xl/view)

  (Note: While testing the video and Screencastify appy, I found that the video is clearer when downloaded then viewed locally, than when played directly on Screencastify.)
  
   ### Pre-Installation Guidelines
  1. Before installing any npm dependencies, a `.gitignore` file was created. The file includes `node_modules/` and `.DS_Store/` so that the `node_modules` directory isn't tracked or uploaded to GitHub.

  2. The repository for this project includes a `package.json` with the required dependencies. This was created  by running `npm init` when the author first set up the project, before installing any dependencies.
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
  Clone my repository on GitHub:

```
https://github.com/jbtiglao/readme-generator
```

  ---
  ## Usage
  Please see the walk-through video above, as well as the following instructions and screenshots.

  ### Features
 
  1. The application is initialized by opening the integrated terminal on Visual Studio Code and entering 
  ```
  node index.js
  ```

  [readme-generator](/images/screenshot1_readme_gen.png)

  2. Prompts about the following information that appear on the terminal. The information the user enters will are added to its corresponding sections on the README. They are the following:
  - Project Title.
  - Description, installation instructions, usage information, contribution guidelines, and test instructions.
  - License which returns a license badge on top of the README near the title and a notice about the license on the License section. Clicking the license badge will also take the user to the webpage containing information about the particular license.
  - Questions, which includes instructions on how to reach the author with additional questions or issues, as well as the author's email, GitHub name, and a link to his/her GitHub profile.

  [prompts](/images/screenshot2_prompts.png)


 
  3. A Table of Contents containing sections of the README. when the sections are clicked, the user is taken to the particular section containing the information the author entered about the app.

  Here is a side-by-side comparison of the raw generated README file and as previewed on VS Code:

  [table_of_contents](/images/screenshot3_toc.png)

  [installation](/images/screenshots4_installation.png)

  [questions](/images/screenshot5_questions.png)

  
  ---
  ## License
  License used for this project - MIT
  
  For more information on the above license and other license types, please see the following websites:  
  - [Open Source Initiative](https://opensource.org/licenses)
  - [Choose a License](https://choosealicense.com/)

  ---
  ## Contributing
  To contribute to this application: 
  - Submit a pull request.
  - Your new features will be merged after approval and review.

  ---
  ## Tests
  The functionalities of this project were tested manually, by opening the application on the integrated terminal and entering 
  ``` 
  node index.js
  ```
  and responding to the series of prompts until a README file is generated.

  Below is a sample of a README file from such test:

  [Test 1](/sample-readme/Example-README.md)

  ---
  ## Credits
  The following people/resources were consulted and/or utilized in the development of this application:
  - Unit 9, Node.js reading materials and internet resources, UCI Bootcamp.
  - [Inquirer package](https://www.npmjs.com/package/inquirer).
  - [Professional README Guide](https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide) 
  - [Open Source Initiative](https://opensource.org/licenses)
  - [Choose a License](https://choosealicense.com/)
  - [Apache](https://www.apache.org/licenses/LICENSE-2.0)

  ---
  ## Author
  Jane Tiglao

  ---
  ## Questions
  For questions or issues, please contact: 
  - Jane Tiglao 
  - Email: janeytiglao@gmail.com
  - GitHub Username: jbtiglao
  - GitHub Profile: https://github.com/jbtiglao


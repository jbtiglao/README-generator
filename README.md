# README Generator

  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

  ---
  ## Description

  A command-line application that dynamically generates a professional README.md file from a user's input using the [Inquirer package](https://www.npmjs.com/package/inquirer).
  

  ### Video
  
  <img width="1078" alt="screenshot6_demo" src="https://user-images.githubusercontent.com/94569484/155876889-3dd0f5fe-331a-4d4e-9e03-c4ba4f8e9271.png">

  Below is the link to the walk-through video demonstrating the application's functionalities:
  
  [Watch or download the demonstration video here.](https://drive.google.com/file/d/1YL6vFN1IsS-tO13Tdt6X1MRUBaci36Xl/view)

  (Note: While testing the video and Screencastify app, the author has found that the video is clearer when downloaded and viewed locally, than when played directly on Screencastify.)
  
  
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
  Please see the walk-through video above, as well as the following instructions and screenshots (viewed through links).

  ### Features
 
  1. The application is initialized by opening the integrated terminal on Visual Studio Code and entering 
  ```
  node index.js
  ```
  
<img width="1412" alt="screenshot1_readme_gen" src="https://user-images.githubusercontent.com/94569484/155876345-afb67a30-ea5a-471c-8e5f-fa11d4f93f13.png">

[readme-generator](/images/screenshot1_readme_gen.png/)


  2. Prompts about the project title, description, installation guidelines, usage instructions, usage information, and tests appear on the terminal. The information the user enters as a response to these prompts are added to the corresponding sections on the README. They are the following:
  - Project Title.
  - Description, Installation, Usage, Contributing, and Tests.
  - License, which when selected from the list, returns a license badge placed on top of the README file, near the project title. The badge links to a webpage containing information about the license and takes the user to the said webpage when clicked. Aside from the license badge on top, a notice about the license used by the application is also included on the License section. 
  - Questions, which includes instructions on how to reach the author with additional questions or issues, as well as the author's email, GitHub name, and a link to his/her GitHub profile.
  - 

<img width="1411" alt="screenshot2_prompts" src="https://user-images.githubusercontent.com/94569484/155876356-833ab0cb-db69-4af1-95a3-28368292fe87.png">

[prompts](/images/screenshot2_prompts.png/)
 
  3. A Table of Contents containing sections of the README. when the sections are clicked, the user is taken to the particular section containing the information the author entered about the app.

  4. Here is a side-by-side comparison of the raw generated README file and as previewed on VS Code:

<img width="1407" alt="screenshot3_toc" src="https://user-images.githubusercontent.com/94569484/155876371-4d7b8c9f-4f4d-4c1b-8de8-3fbccdef30ef.png">

[table-of-contents](/images/screenshot3_toc.png/)

<img width="1409" alt="screenshots4_installation" src="https://user-images.githubusercontent.com/94569484/155876380-2dcf78bd-f59f-4d6e-b1ff-c6b304d5576c.png">

[installation](/images/screenshot4_installation.png/)

<img width="1411" alt="screenshot5_questions" src="https://user-images.githubusercontent.com/94569484/155876390-5411a4a9-1f2e-447f-88ca-78028671ec3b.png">

[questions](/images/screenshot5_questions.png/)
  
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
  - Your new features will be merged after review and approval.

  ---
  
  ## Tests
  The functionalities of this project were tested manually, by opening the application on the integrated terminal and entering 
  ``` 
  node index.js
  ```
  then responding to the series of prompts until a README file is generated.

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


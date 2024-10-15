# Cypress Automation Framework with Cucumber

This project is an automation framework using Cypress and Cucumber for testing the **Contact Us** page functionality on [WebDriverUniversity](http://webdriveruniversity.com/). The framework is designed to test valid and invalid submissions of the contact form, using Gherkin syntax to make test scenarios readable and easy to understand.

## Table of Contents

- [Project Structure](#project-structure)
- [Installation](#Installation)
- [Feature Scenarios](#feature-scenarios)
- [Scripts](#scripts)
- [License](#license)

## Project Structure

```plaintext
CYPRESS-AUTOMATION-FRAMEWORK/
├── cypress/
│   ├── downloads/
│   ├── e2e/
│   │   └── Contact_Us.feature         # Cucumber feature file
│   ├── fixtures/
│   ├── support/
│   │   ├── step_definitions/
│   │   │   ├── ContactUS_Steps.js     # Step definitions for "Contact Us" feature
│   │   │   └── Homepage_Steps.js
│   │   ├── commands.js
│   │   └── e2e.js
├── node_modules/
├── .gitignore
├── cypress.config.ts                  # Cypress configuration file
├── package.json                       # NPM dependencies and scripts
├── package-lock.json
└── README.md                          # Project documentation
```

## Installation
Instructions on how to install the project-

**1. Clone the repository:**
```bash
git clone https://github.com/yourusername/cypress-automation-framework.git
cd cypress-automation-framework
```
**2. Install dependencies:**
```bash
npm install
```
**3.Run Cypress for the first time (to initialize the framework):**
```bash
npx cypress open
```
or

```bash
npx cypress run
```

## Feature Scenarios

**1. Valid Contact Us Form Submission**
Description: Submits the contact form with all required fields filled in.
Expected Outcome: Displays a success message.

**2. Invalid Contact Us Form Submission**
Description: Submits the contact form without an email address.
Expected Outcome: Displays an error message.

**3. Valid Contact Us Form Submission with Specific Data**
Description: Submits the contact form with predefined values for each field.
Expected Outcome: Displays a success message.


## License
This project is licensed under the MIT License. See the LICENSE file for details.

---
This README provides a clean overview of the project, including the project structure, setup instructions, usage information, feature scenarios, scripts, and contribution guidelines. Adjust the commands or links as needed for your specific project setup.









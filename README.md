# Cypress Automation Framework with Cucumber

This project is an automation framework using Cypress and Cucumber for testing the **Contact Us** page functionality on [WebDriverUniversity](http://webdriveruniversity.com/). The framework is designed to test valid and invalid submissions of the contact form, using Gherkin syntax to make test scenarios readable and easy to understand.

## Table of Contents

- [Cypress Automation Framework with Cucumber](#cypress-automation-framework-with-cucumber)
  - [Table of Contents](#table-of-contents)
  - [Project Structure](#project-structure)
  - [Installation](#installation)
  - [Feature Scenarios](#feature-scenarios)
  - [Checking the Test and reports](#checking-the-test-and-reports)
  - [License](#license)

## Project Structure

```plaintext
CYPRESS-AUTOMATION-FRAMEWORK/
├── cypress/
│   ├── downloads/
│   ├── e2e/
│   │   ├── Contact_Us.feature         # Cucumber feature file for Contact Us
│   │   └── Login.feature               # Cucumber feature file for Login
│   ├── fixtures/
│   ├── support/
│   │   ├── step_definitions/
│   │   │   ├── ContactUS_Steps.js      # Step definitions for "Contact Us" feature
│   │   │   ├── Login_Steps.js          # Step definitions for "Login" feature
│   │   │   └── Homepage_Steps.js       # Step definitions for homepage interactions
│   │   ├── commands.js
│   │   └── e2e.js
├── node_modules/
├── .gitignore
├── cypress.config.ts                   # Cypress configuration file
├── package.json                        # NPM dependencies and scripts
├── package-lock.json
└── README.md                           # Project documentation
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

**4. Valid Contact Us Page**
Description: Submits the contact form with various combinations of first name, last name, email address, and comments to verify the correct response message is displayed.
Expected Outcome: Displays a success message or an error message based on the validity of the email address.

**5. Validate Login Credentials**  
Description: Tests the login functionality by submitting various combinations of usernames and passwords to verify that the correct alert message is displayed for valid and invalid credentials.
Expected Outcome: Displays an alert box indicating whether the login attempt succeeded or failed.

## Checking the Test and reports

```bash
npx cypress run
```

or for test by specific tags

```bash
npx cypress run --env TAGS='@smoke' --headed'
```

```bash
npx cypress run --env TAGS='@regression' --headed
```

```bash
npx cypress run --env TAGS='@login' --headed
```

Check the test report in cypress\reports

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---
This README provides a clean overview of the project, including the project structure, setup instructions, usage information, feature scenarios, scripts, and contribution guidelines.

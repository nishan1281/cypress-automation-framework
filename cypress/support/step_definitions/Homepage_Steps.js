const { Given, When } = require("@badeball/cypress-cucumber-preprocessor");

const URL = "https://www.webdriveruniversity.com/";
Given('I naviagate to the WebDriverUniversity home page', () => {
cy.visit(URL);
});

When ('i click on the contact us button', () => {
    cy.get("#contact-us").invoke("removeAttr","target").click();
});
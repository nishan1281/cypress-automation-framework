const { Given, When } = require("@badeball/cypress-cucumber-preprocessor");

const URL = "https://www.webdriveruniversity.com/";
Given('I naviagate to the WebDriverUniversity home page', () => {
cy.visit(URL);
});

When ('i click on the contact us button', () => {
    cy.get("#contact-us").invoke("removeAttr","target").click(); 
    //invoke("removeAttr", "target") used remove target attribute cause cypress might not handle multiple pages
});

When ('I click on the login portal button', () => {
    cy.get("#login-portal").invoke("removeAttr","target").click();
 });
const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");

//Scenario: Valid contact us form submission, working with cucumber commands
When ('I type a first name',()=>{
    cy.get('[name="first_name"]').type("Ariful");
});

When ('i type a last name',()=>{
    cy.get('[name="last_name"]').type("Nishan");
});

When ('I enter an email address',()=>{
    cy.get('[name="email"]').type("nishanbsc3@gmail.com")
});

When ('i enter message',()=>{
    cy.get('textarea[name="message"]').type("Hello world!");
});

When ('i click on the submit button',()=>{
    cy.get('[type="submit"]').click();
});

Then ('I should be presented with a successful contact us submission message',()=>{
    cy.get('h1').should('have.text','Thank You for your Message!');
});


//Scenario: Invalid contact us form submission
Then ('I should be presented with a unsuccessful contact us submission message',()=>{
    cy.get('body').contains('Error: Invalid email address');
});


//Scenario: Valid contact us form submission- using specific data as per cucumber expression    
When('i type {string} as first name',(firstName)=>{
    cy.get('[name="first_name"]').type(firstName);
});

When('i type {string} as last name',(lastName)=>{
    cy.get('[name="last_name"]').type(lastName);
});

When('i type a specific email address {string}',(email)=>{
    cy.get('[name="email"]').type(email)
});

When('i type a specific word {string} and number {int} within the comment input field',(word, number)=>{
    cy.get('textarea[name="message"]').type(word + number);
});


//Scenario Outline: Validate contact us page with multiple data fields

When('I type a first name {word} and a last name {string}',(firstName, LastName)=>{
    cy.get('[name="first_name"]').type(firstName);
    cy.get('[name="last_name"]').type(LastName);
});

When('I type a {string} and a comment {string}',(email, comment)=>{
    cy.get('[name="email"]').type(email);
    cy.get('textarea[name="message"]').type(comment);
});

// To use xpath need to run "npm install -D cypress-xpath" and include require('cypress-xpath') in e2e.js
Then ('I should be presented with header text {string}',(message)=>{
    cy.xpath("//h1 | //body").contains(message);
})
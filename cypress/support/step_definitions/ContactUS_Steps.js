const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");

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

Then ('I should be presented with a unsuccessful contact us submission message',()=>{
    cy.get('body').contains('Error: Invalid email address');
});


When('i type {string} as first name',(firstName)=>{
    cy.get('[name="first_name"]').type(firstName);
})

When('i type {string} as last name',(lastName)=>{
    cy.get('[name="last_name"]').type(lastName);
})

When('i type a specific email address {string}',(email)=>{
    cy.get('[name="email"]').type(email)
})

When('i type a specific word {string} and number {int} within the comment input field',(word, number)=>{
    cy.get('textarea[name="message"]').type(word + number);
})


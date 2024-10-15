const { When,Then } = require("@badeball/cypress-cucumber-preprocessor");

let stub;  //used to capture windows alert

When ('I type a username {} and password {}',(username, password)=>{
    cy.get('#text').type(username);
    cy.get('#password').type(password);
})

When ('I click on the login button', ()=>{
    stub = cy.stub();
    cy.on('window:alert', stub);
    cy.get('#login-button').click();
})

Then ('I should be presented with an alert box which contain text {string}', (expectedAertText)=> {

    expect(stub).to.have.been.calledWith(expectedAertText);

});
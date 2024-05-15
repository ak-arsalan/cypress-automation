/// <reference types="cypress"/>

it('Google Test', () =>  {

  cy.visit('https://www.google.com')
  cy.get('#W0wltc > .QS5gu').click()
  cy.get('#APjFqb').click()
  cy.get('#APjFqb').type('dummy login portal{enter}')
  cy.contains('Test Login', {timeout: 5000}).click()
  cy.origin('https://practicetestautomation.com', () => {
  cy.get('input[name="username"]' ).type('student')
  cy.get('input[name="password"]').type('Password123')
  cy.get('button[id="submit"]').click()
  cy.contains('Logged In Successfully');
})
})


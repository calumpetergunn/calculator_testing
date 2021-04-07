// https://docs.cypress.io/api/introduction/api.html

describe('calculator', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should display running total', () => {
    cy.get('#number3').click();
    cy.get('#number4').click();
    cy.get('.display').should('contain', '34')
  })

  it('should have working mathematical operations', () => {
    cy.get('#number3').click();
    cy.get('#number4').click();
    cy.get('#operator_divide').click();
    cy.get('#number2').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '17')
  })
})

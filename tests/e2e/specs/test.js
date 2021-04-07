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

  it(' should chain operations together', () => {
    cy.get('#number7').click();
    cy.get('#operator_multiply').click();
    cy.get('#operator_multiply').click();
    cy.get('#operator_multiply').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '5764801')
  })

  it('should handle negative numbers', () => {
    cy.get('#number8').click();
    cy.get('#operator_subtract').click();
    cy.get('#number1').click();
    cy.get('#number6').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '-8')
    cy.get('#operator_multiply').click();
    cy.get('#number8').click();
    cy.get('#number0').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '-640')
  })

  it('should handle decimal numbers', () => {
    cy.get('#number6').click();
    cy.get('#number8').click();
    cy.get('#operator_divide').click();
    cy.get('#number9').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '7.555555555555555')
  })

  it('should handle large numbers', () => {
    cy.get('#number9').click();
    cy.get('#number8').click();
    cy.get('#number9').click();
    cy.get('#number8').click();
    cy.get('#number9').click();
    cy.get('#number8').click();
    cy.get('#number9').click();
    cy.get('#number8').click();
    cy.get('#number9').click();
    cy.get('#operator_multiply').click();
    cy.get('#number2').click();
    cy.get('#number2').click();
    cy.get('#number2').click();
    cy.get('#number2').click();
    cy.get('#number2').click();
    cy.get('#number2').click();
    cy.get('#number2').click();
    cy.get('#number2').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '21997755091133560');
  })

  it('should handle division by zero', () => {
    cy.get('#number5').click();
    cy.get('#operator_divide').click();
    cy.get('#number0').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', 'error')
  })
})

// Import the login function
const { login } = require('../../support/helpers')

const formCheckout = (firstName, lastName, postcalCode) => {
  cy.get('[data-test="firstName"]').type(firstName)
  cy.get('[data-test="lastName"]').type(lastName)
  cy.get('[data-test="postalCode"]').type(postcalCode)
}

// Login tests
describe('Saucedemo Login Test', () => {
  it('Login with valid credential', () => {
    login('standard_user', 'secret_sauce')
    cy.url().should('include', '/inventory.html')
    cy.get('.inventory_list').should('be.visible')
  })

  it('Login with wrong username', () => {
    login('invalid_user', 'secret_sauce')
    cy.get('[data-test="error"]').should('be.visible')
  })

  it('Login with wrong password', () => {
    login('standard_user', 'invalid_password')
    cy.get('[data-test="error"]').should('be.visible')
  })

  it('Login with no credential', () => {
    cy.visit('https://www.saucedemo.com/v1/')
    cy.get('#login-button').click()
    cy.get('[data-test="error"]').should('be.visible')
  })

  it('Login with blank username', () => {
    cy.visit('https://www.saucedemo.com/v1/')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('#login-button').click()
    cy.get('[data-test="error"]').should('be.visible')
  })

  it('Login with blank password', () => {
    cy.visit('https://www.saucedemo.com/v1/')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('#login-button').click()
    cy.get('[data-test="error"]').should('be.visible')
  })
})

// Buy product tests
describe('Buy product', () => {
  beforeEach(() => {
    login('standard_user', 'secret_sauce')
    cy.url().should('include', '/inventory.html')
  })

  it('Buy one product', () => {
    cy.get(':nth-child(1) > .pricebar > .btn_primary').click()
    cy.get('.shopping_cart_link').click()
    cy.get('.checkout_button').click()
    formCheckout("Joshua", "Lalang", 3211)
    cy.get('.btn_primary').click()
    cy.get('.btn_action').click()
    cy.get('.complete-header').should('have.text', 'THANK YOU FOR YOUR ORDER')
  })

  it('Buy multiple products', () => {
    for (let i = 1; i <= 3; i++) {
      cy.get(`:nth-child(${i}) > .pricebar > .btn_primary`).click()
    }
    
    cy.get('.shopping_cart_link').click()
    cy.get('.checkout_button').click()
    formCheckout("Joshua", "Lalang", 3211)
    cy.get('.btn_primary').click()
    cy.get('.btn_action').click()
    cy.get('.complete-header').should('have.text', 'THANK YOU FOR YOUR ORDER')
  })

})

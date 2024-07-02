// cypress/support/helpers.js

// Define the login function
const login = (username, password) => {
    cy.visit('https://www.saucedemo.com/v1/')
    cy.get('[data-test="username"]').type(username)
    cy.get('[data-test="password"]').type(password)
    cy.get('#login-button').click()
  }
  
  // Export the function
  module.exports = {
    login
  }
  
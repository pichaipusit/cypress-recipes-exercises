/// <reference types="cypress" />

// we can access the Cypress.env() object outside the test
const csvUsers = Cypress.env('usersList')

describe('Users from CSV', () => {
  beforeEach(() => {
    // TODO: Compare csv data to this table in its own row
    cy.visit('index.html')
  })
})

/// <reference types="cypress" />
describe('dynamic users using request', { retries: 2 }, () => {
  // this example fetches list of 3 users from the server
  // and then creates 3 separate tests to check something about each user

  let users

  before(() => {
    // receive the dynamic list of users
    cy.request('https://jsonplaceholder.cypress.io/users?_limit=10')
    //  TODO: The data length is 10. Get just 3 and separate test for each user
  })

  // we know there will be 3 objects in the "users" list
})

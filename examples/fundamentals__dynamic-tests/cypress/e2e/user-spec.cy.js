/// <reference types="cypress" />

// If we do NOT know the expected number of items we can grab them
// before the spec starts running using the `setupNodeEvents` function.
// `setupNodeEvents` places the dynamic list into "Cypress.env()" object
describe("Test for each user", { retries: 2 }, () => {
  // Cypress.env() object is set by the time the tests start
  const users = Cypress.env("users");

  it("has valid users", () => {
    // TODO: What if we got empty arr []?
    expect(users).to.be.an("array");
  });

  users.forEach((user) => {
    it(`has info for user ${user.id}: ${user.email}`, () => {
      // confirm the user information
      const url = `https://jsonplaceholder.cypress.io/users/${user.id}`;

      // confirm the endpoint returns the "user" object
      cy.request(url).its("body");
      // TODO: confirm each property explicitly
      // if any property is missing we will get nice Command Log
      // history showing the matching properties
    });
  });
});

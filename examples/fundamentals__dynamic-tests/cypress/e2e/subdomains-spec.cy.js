/// <reference types="cypress" />
describe("Subdomains", () => {
  // TODO: Get the suitable selector for each url
  const urlToLogoSelector = {
    // logo selector at https://docs.cypress.io/
    "https://docs.cypress.io": 'img[alt="Cypress Logo"]',
    // on the public static site, the logo is rendered within a labeled link
    "https://www.cypress.io": 'a[aria-label="Cypress"]',
  };

  // ignore errors from the site itself
  Cypress.on("uncaught:exception", () => {
    return false;
  });

  // run the same test against different subdomain
  // TODO: Verify that the logo is displayed after navigating to the URL
  const urls = Object.keys(urlToLogoSelector);
  urls.map((url) => {
    it(`${url} should display logo`, () => {
      cy.visit(url);

      const selector = urlToLogoSelector[url];

      cy.get(selector).should("be.visible");
    });
  });
});

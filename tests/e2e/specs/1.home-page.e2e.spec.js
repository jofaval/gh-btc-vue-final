// home.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe("1. Home page", () => {
  it("should load the page without any problem at all", () => {
    cy.visit("/home");
    cy.contains(
      "p",
      'This was a project developed as part of a Bootcamp "Frontend in Vue".'
    );
  });

  it("should have a home logo", () => {
    cy.get(".home__logo.geekshubs-logo").should(
      "have.attr",
      "alt",
      "Geekshubs Academy logo"
    );
  });

  it("should have all it's sections", () => {
    cy.get("h3").should("have.length", 3);
    cy.get("ul").get("li").should("have.length", 7);
  });
});

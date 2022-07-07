// author-page.e2e.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe("2. Author page", () => {
  it("should load the page without any problem at all", () => {
    cy.visit("/author");
    cy.url().should("include", "/author");
  });

  it("should access the page from the navbar without any problem", () => {
    cy.visit("/home");
    cy.get(".router__navbar__link").eq(1).contains("Author").click();
    cy.url().should("include", "/author");
  });

  it("should visualize the biography", () => {
    cy.contains(
      ".author__biography",
      "Software Engineer with Full Stack experience, currently working as a Frontend Developer."
    );
  });

  it("should have a home logo", () => {
    cy.get(".author__profile__img").should(
      "have.attr",
      "alt",
      "Author profile image"
    );
  });
});

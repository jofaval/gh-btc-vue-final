// posts-page.e2e.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe("3. Posts page", () => {
  it("should load the page without any problem at all", () => {
    cy.visit("/posts");
    cy.url().should("include", "/posts");
  });

  it("should access the page from the navbar without any problem", () => {
    cy.visit("/home");
    cy.get(".router__navbar__link").eq(2).contains("Posts").click();
    cy.url().should("include", "/posts");
  });

  it("should count the posts on the first page", () => {
    cy.get(".posts__post").should("have.length", 20);
  });

  it("should iterate through all the pages with ease", () => {
    // Iterate through the 4 next pages
    [...Array(4)].map(() => {
      cy.get(".page-item .page-link").eq(7).click();
      return cy.get(".posts__post").should("have.length", 20);
    });
    // Iterate through the 4 prev pages
    [...Array(4)].map(() => cy.get(".page-item .page-link").eq(1).click());
    cy.get(".page-item .page-link").eq(8).click();
    cy.get(".page-item .page-link").eq(0).click();
  });

  it("should be able to access any post", () => {
    cy.visit("/posts");
    cy.get(".posts__post").eq(13).click();
    cy.url().should("include", "/posts/14");
  });

  it("should be able to access any post from the last page", () => {
    cy.visit("/posts");
    cy.get(".page-item .page-link").eq(8).click();
    cy.get(".posts__post").eq(13).click();
    cy.url().should("include", "/posts/94");
  });
});

// user-page.e2e.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe("5. User detail page", () => {
  it("should load the page without any problem at all", () => {
    cy.visit("/users/1");
  });

  it("should have all it's sections", () => {
    cy.contains(".user__title", 'Leanne Graham - "Bret"');
    cy.contains(".user__contact-details__title", "Contact details");
    cy.contains(".user__address__title", "Address");
    cy.contains(".user__posts__title", "Posts by Leanne Graham");
    cy.contains("figcaption", "Profile picture of Leanne Graham");
  });

  it("should have the expected number of posts", () => {
    cy.get(".posts__post").should("have.length", 10);
  });

  it("should access a post through the user page", () => {
    cy.get(".posts__post").eq(5).click();
    cy.url().should("include", "/posts/6");
  });

  it("should get to the user page navigating through the pages", () => {
    cy.visit("/home");
    cy.get(".router__navbar__link").eq(2).click();
    cy.get(".posts__post a").eq(0).click();
    cy.get(".user__link").click();
    cy.url().should("include", "/users/1");
  });
});

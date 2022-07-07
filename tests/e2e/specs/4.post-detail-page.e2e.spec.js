// post-detail-page.e2e.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe("4. Post detail page", () => {
  it("should load the page without any problem at all", () => {
    cy.visit("/posts/1");
  });

  it("should have all it's sections", () => {
    cy.contains(
      ".post-detail__title",
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
    );
    cy.contains(".post-detail__subtitle", "Created by: Leanne Graham");
    cy.contains(
      ".post-detail__body",
      "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
    );
  });

  it("should have a user link", () => {
    cy.get(".user__link").click();
    cy.url().should("include", "/users/1");
  });

  it("should get to the post detail page navigating through the pages", () => {
    cy.visit("/home");
    cy.get(".router__navbar__link").eq(2).click();
    cy.get(".posts__post a").eq(0).click();
    cy.url().should("include", "/posts/1");
  });
});

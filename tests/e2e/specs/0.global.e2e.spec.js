// global.e2e.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe("0. Initial assertions", () => {
  it("should use a loader for ", () => {
    // Code straight from https://blog.dai.codes/cypress-loading-state-tests/
    let sendResponse;
    const trigger = new Promise((resolve) => {
      sendResponse = resolve;
    });

    cy.intercept("data-url", (request) =>
      trigger.then(() => {
        request.reply();
      })
    );

    // We'll be expecting a redirection to /home
    cy.visit("/");

    cy.get(".loader")
      .should("be.visible")
      .then(() => {
        sendResponse();
        cy.get(".loader").should("not.exist");
        cy.get(".app__wrapper").should("be.visible");
      });
  });

  it("should have a navbar logo", () => {
    cy.get(".router__navbar__logo")
      .should("have.attr", "alt", "Vue logo")
      .click();
    cy.url().should("include", "/home");
  });

  it("should navigate through all of the menu elements", () => {
    cy.get(".router__navbar__link").should("have.length", 4);
  });

  /** should navigate through all of the menu elements */
  it("should navigate to the home page", () => {
    cy.get(".router__navbar__link").eq(0).contains("Home").click();
    cy.url().should("include", "/home");
  });

  it("should navigate to the author page", () => {
    cy.get(".router__navbar__link").eq(1).contains("Author").click();
    cy.url().should("include", "/author");
  });

  it("should navigate to the posts page", () => {
    cy.get(".router__navbar__link").eq(2).contains("Posts").click();
    cy.url().should("include", "/posts");
  });

  it("should navigate to the contact page", () => {
    cy.get(".router__navbar__link").eq(3).contains("Contact").click();
    cy.url().should("include", "/contact");
  });

  it("should navigate back to home using the home logo", () => {
    cy.get(".router__navbar__logo").click();
    cy.url().should("include", "/home");
  });

  it("should have a footer with the copyright", () => {
    cy.get(".footer__credits").contains("jofaval");
  });

  it("should have a footer with the social media links", () => {
    cy.get("a.footer__links__social-media-links__link").should(
      "have.length",
      2
    );
    cy.get("a.footer__links__social-media-links__link")
      .eq(0)
      .contains("Github")
      .should("have.attr", "href", "https://github.com/jofaval");
    cy.get("a.footer__links__social-media-links__link")
      .eq(1)
      .contains("LinkedIn")
      .should("have.attr", "href", "https://linkedin.com/in/jofaval");
  });

  it("should toggle theme using the theme toggler", () => {
    cy.get("#app").invoke("addClass", "light");
    cy.get("#app").invoke("removeClass", "dark");

    cy.get("#theme-toggler").click({ force: true });
    cy.get("#app").should("have.class", "dark");
    cy.get("#app").not("have.class", "light");

    cy.get("#theme-toggler").click({ force: true });
    cy.get("#app").should("have.class", "light");
    cy.get("#app").not("have.class", "dark");
  });

  it("should search in the navbar", () => {
    cy.get(".navbar__searchbar").clear().type("{a}");
    cy.get(".post-detail__link").should("have.length", 3);
    cy.get(".user__link").should("have.length", 3);
  });

  it("should access a post result from the navbar search", () => {
    cy.get(".navbar__searchbar").clear().type("{a}");
    cy.get(".post-detail__link").eq(0).click();
    cy.url().should("include", "/posts/");
  });

  it("should access a user result from the navbar search", () => {
    cy.get(".navbar__searchbar").clear().type("{a}");
    cy.get(".user__link").eq(0).click();
    cy.url().should("include", "/users/");
  });
});

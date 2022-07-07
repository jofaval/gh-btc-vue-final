// contact-page.e2e.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe("6. Contact page", () => {
  it("should load the page without any problem at all", () => {
    cy.visit("/contact");
    cy.url().should("include", "/contact");
  });

  it("should access the page from the navbar without any problem", () => {
    cy.visit("/home");
    cy.get(".router__navbar__link").eq(3).contains("Contact").click();
    cy.url().should("include", "/contact");
  });

  it("should have all it's sections", () => {
    cy.contains(".formulary__fieldset__legend", "Contact information");
    cy.contains(".formulary__input__container label", "Full name");
    cy.contains(
      ".formulary__input__container small",
      "Identify your self with your name"
    );
    cy.get("#fullName");
    cy.contains(".formulary__input__container label", "E-Mail");
    cy.contains(
      ".formulary__input__container small",
      "This email will be where we'll contact you."
    );
    cy.get("#email");

    cy.contains(".formulary__fieldset__legend", "Details");
    cy.contains(".formulary__input__container label", "Subject");
    cy.contains(
      ".formulary__input__container small",
      "What it is that you want to contact us about? Make sure it's as descriptive as possible"
    );
    cy.get("#subject");
    cy.contains(".formulary__input__container label", "Message");
    cy.contains(
      ".formulary__input__container small",
      "Please explain into further detail upon what you mentioned. Make sure it's as descriptive as possible"
    );
    cy.get("#message");

    cy.contains(".base-button", "Submit");
    cy.get(".base-button").should("have.attr", "disabled", "disabled");
  });

  it("should allow to submit if all the inputs are filled", () => {
    cy.get("#fullName").clear().type("Pepe Fabra Valverde");
    cy.get("#email").clear().type("contact@github.com");
    cy.get("#subject").clear().type("Subject");
    cy.get("#message").clear().type("Lorem ipsum dolor sit amet");
    cy.get(".base-button").not("have.attr", "disabled", "disabled");
  });

  it("should clear all the inputs", () => {
    cy.get("#fullName").clear().type("Pepe Fabra Valverde");
    cy.get("#email").clear().type("contact@github.com");
    cy.get("#subject").clear().type("Subject");
    cy.get("#message").clear().type("Lorem ipsum dolor sit amet");

    cy.get(".formulary__submits__submit.btn-outline-success").click();

    cy.get("#fullName").should("have.value", "");
    cy.get("#email").should("have.value", "");
    cy.get("#subject").should("have.value", "");
    cy.get("#message").should("have.value", "");
  });

  it("should show error message when inputing an unvalid email", () => {
    cy.get("#email").clear().type("not-an@email");
    cy.contains(
      ".formulary__input__invalid-msg",
      "Email must be in a valid format, ex: contact@example.com.es."
    );
  });

  it("should show error message when inputing an unvalid full name", () => {
    cy.get("#fullName").clear().type("1'unvalid");
    cy.contains(
      ".formulary__input__invalid-msg",
      "Name must not start with numbers nor contain any quotations."
    );
  });

  it("should fake actually submitting", () => {
    cy.get("#fullName").clear().type("Pepe Fabra Valverde");
    cy.get("#email").clear().type("contact@github.com");
    cy.get("#subject").clear().type("Subject");
    cy.get("#message").clear().type("Lorem ipsum dolor sit amet");

    cy.get(".base-button").not("have.attr", "disabled", "disabled");
    cy.get(".base-button").click();
  });
});

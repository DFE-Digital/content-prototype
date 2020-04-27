// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add("shouldHaveLargeHeading", () => {
  cy.get(".masthead__content .govuk-heading-xl")
    .should("exist")
    .should("contain.text", "Coronavirus (COVID-19): what you need to do");
});

Cypress.Commands.add("shouldHaveHeading", (text) => {
  cy.get("#main-content .govuk-heading-xl")
    .should("exist")
    .should("contain.text", text);
});

Cypress.Commands.add("shouldHaveFooter", () => {
  cy.get(".govuk-footer").should(
    "contain.text",
    "All content is available under the Open Government Licence v3.0, except where otherwise stated"
  );
  // .should("contain.text", "© Crown copyright");
});

Cypress.Commands.add("shouldHaveBreadcrumbs", () => {
  cy.get(".govuk-breadcrumbs").should("exist");
  cy.get(".govuk-breadcrumbs__list").within(() => {
    cy.get(".govuk-breadcrumbs__link")
      .should("have.attr", "href")
      .should("equal", "/");
  });
});

Cypress.Commands.add("shouldContainAdvisory", (text) => {
  cy.get(".gem-c-govspeak .advisory")
    .should("exist")
    .should("contain.text", text);
});

Cypress.Commands.add("shouldHavePagination", (href, text, direction) => {
  cy.get(".gem-c-pagination").within(() => {
    cy.get(`a.gem-c-pagination__link[href="${href}"]`).should(($el) => {
      expect($el).to.contain.text(text);
      if (direction) {
        expect($el).to.contain.text(direction);
      }
    });
  });
});

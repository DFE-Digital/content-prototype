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

Cypress.Commands.add("shouldHaveHeading", () => {
  cy.get(".govuk-heading-xl").should("exist");
});
Cypress.Commands.add("shouldHaveFooter", () => {
  cy.get(".govuk-footer").should(
    "contain.text",
    "All content is available under the Open Government Licence v3.0, except where otherwise stated"
  );
});
Cypress.Commands.add("clockOnTeachingduringcoronaviruslink", () => {
  cy.get(".govuk-grid-column-two-thirds > :nth-child(1) > .govuk-link").click();
});
Cypress.Commands.add("shouldHaveHeaderAndFooter", () => {
  cy.get(".masthead__header").should(
    "contain.text",
    "Coronavirus (COVID-19): what you need to do"
  );
  cy.get(".govuk-footer").should(
    "contain.text",
    "All content is available under the Open Government Licence v3.0, except where otherwise stated"
  );
  // .should("contain.text", "© Crown copyright");
});

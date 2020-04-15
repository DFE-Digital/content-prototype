/* eslint-disable max-lines-per-function */
/* eslint-disable prettier/prettier */
describe("Remote learning prototype", () => {
    beforeEach(() => {
        cy.visit("https://remote-learning-prototype.london.cloudapps.digital/", {
            auth: { username: "remote", password: "learning" }
        });
    });
    it("Validate the user is able to launch remote learning prototype portal", () => {
        cy.get(".govuk-heading-xl").should("exist");
        cy.get(".submasthead__content").should("exist");
        cy.get(".govuk-footer__meta-item").should("exist");
        cy.get(".govuk-grid-column-two-thirds > :nth-child(1) > .govuk-link"
        ).should("exist");
    });
  
    it("Validate the system is navigating to next page if user clicks on Teaching during coronavirus (COVID-19) link", () => {
        cy.get(
            ".govuk-grid-column-two-thirds > :nth-child(1) > .govuk-link"
        ).click();
        cy.get(".govuk-heading-xl").should("exist");
        cy.get("#a-guide-for-teachers-and-leaders").should("exist");
        cy.get(".govuk-footer__licence-description").should("exist");
    });
    it("Validate the system is navigating home page back if user clicks home page link", () => {
        cy.get(
            ".govuk-grid-column-two-thirds > :nth-child(1) > .govuk-link"
        ).click();
        cy.get(".govuk-heading-xl").should("exist");
        cy.get(".govuk-breadcrumbs__link").click();
        cy.get(
            ".govuk-grid-column-two-thirds > :nth-child(1) > .govuk-link"
        ).should("exist");
        cy.get(".govuk-footer__meta-item").should("exist");
        cy.get(":nth-child(4) > .govuk-link").should("exist");
    });
  
    it("Validate the system is navigating next page if user clicks on Supporting your children's learning during coronavirus (COVID-19) link", () => {
        cy.get(":nth-child(4) > .govuk-link").click();
        cy.get(".govuk-heading-xl").should("exist");
        cy.get(".gem-c-govspeak > :nth-child(1)").should("exist");
        cy.get(".govuk-footer__meta").should("exist");
    });
  });
  
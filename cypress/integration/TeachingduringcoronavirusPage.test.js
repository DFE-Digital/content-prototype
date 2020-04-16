describe("Remote learning prototype - Teaching during coronavirus", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Validate the system is navigating home page back if user clicks home page link", () => {
    cy.get(
      ".govuk-grid-column-two-thirds > :nth-child(1) > .govuk-link"
    ).click();
    cy.get(".govuk-breadcrumbs__link").click();
    cy.get(
      ".govuk-grid-column-two-thirds > :nth-child(1) > .govuk-link"
    ).should("exist");
    cy.get(":nth-child(4) > .govuk-link").should("exist");
  });
  it("Validate the system is navigating next page if user clicks on Supporting your children's learning during coronavirus (COVID-19) link", () => {
    cy.get(":nth-child(4) > .govuk-link").click();
    cy.get(".gem-c-govspeak > :nth-child(1)").should("exist");
    cy.shouldHaveHeaderAndFooter();
  });
});

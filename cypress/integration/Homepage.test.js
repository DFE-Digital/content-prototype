describe("Remote learning prototype - HomePage", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Validate the user is able to launch remote learning prototype portal", () => {
    cy.shouldHaveHeading();
    cy.get(".govuk-grid-column-two-thirds")
      .should("exist")
      .should((el) => {
        expect(el.find("a")).to.have.class("govuk-link");
      });
    cy.get(".submasthead__content").should("exist");
    cy.get(
      ".govuk-grid-column-two-thirds > :nth-child(1) > .govuk-link"
    ).should("exist");
  });
  it("Validate the system is navigating to next page if user clicks on Teaching during coronavirus (COVID-19) link", () => {
    cy.get(
      ".govuk-grid-column-two-thirds > :nth-child(1) > .govuk-link"
    ).click();
    cy.contains("Teaching during coronavirus (COVID-19)").should("exist");
    cy.contains("Safeguarding and remote teaching").should("exist");
    cy.contains("Get help with technology for remote education").should(
      "exist"
    );
    cy.shouldHaveHeaderAndFooter();
  });
});

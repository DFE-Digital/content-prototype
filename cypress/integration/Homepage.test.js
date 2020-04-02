describe("Homepage", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.shouldHaveHeaderAndFooter();
  });

  it("Shows the initial pages", () => {
    cy.get(".govuk-grid-column-two-thirds")
      .should("exist")
      .should((el) => {
        expect(el.find("a")).to.have.class("govuk-link");
      });
  });
});

describe("Teachers page", () => {
  beforeEach(() => {
    cy.visit("/teachers/");
    cy.shouldHaveHeaderAndFooter();
  });
  it("Shows the teachers page", () => {
    cy.get(".govuk-heading-xl")
      .should("exist")
      .should("contain.text", "Remote teaching during coronavirus (COVID-19)");
    cy.contains("Safeguarding and remote teaching").should("exist");
    cy.contains("Get help with technology for remote education").should(
      "exist"
    );
  });
});

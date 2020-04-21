describe("Help with technology page", () => {
  beforeEach(() => {
    cy.visit("/teachers/help-with-technology/");
    cy.shouldHaveHeaderAndFooter();
    cy.shouldHaveBreadcrumbs();
  });

  it("Shows the Help with technology page", () => {
    cy.shouldHaveHeading(
      "Get help with technology for remote education during coronavirus (COVID-19)"
    );
    cy.contains("Previous").should("exist");
    cy.contains(
      "Safeguarding and remote education during coronavirus (COVID-19)"
    ).should("exist");
  });

  it('Links through to "Previous : Safeguarding and remote education during coronavirus (COVID-19)"', () => {
    cy.contains(
      "Safeguarding and remote education during coronavirus (COVID-19)"
    )
      .should((el) => {
        expect(el).to.have.attr(
          "href",
          "/teachers/safeguarding-and-remote-teaching-during-coronavirus-covid-19/"
        );
      })
      .click();
    cy.location("pathname").should(
      "equal",
      "/teachers/safeguarding-and-remote-teaching-during-coronavirus-covid-19/"
    );
  });
});

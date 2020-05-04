describe("Teachers Page", () => {
  beforeEach(() => {
    cy.visit("/teachers/");
    cy.shouldHaveFooter();
    cy.shouldHaveBreadcrumbs();
  });

  it("Shows the teachers page", () => {
    cy.shouldHaveHeading("Remote education during coronavirus (COVID-19)");
    cy.contains(
      "Safeguarding and remote education during coronavirus (COVID-19)"
    ).should("exist");
    cy.contains("Get help with technology for remote education").should(
      "exist"
    );
  });

  it('Links through to "Safeguarding and remote teaching"', () => {
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

  it('Links through to "Get help with technology for remote education"', () => {
    cy.contains("Get help with technology for remote education")
      .should((el) => {
        expect(el).to.have.attr("href", "/teachers/help-with-technology/");
      })
      .click();
    cy.location("pathname").should("equal", "/teachers/help-with-technology/");
  });
});

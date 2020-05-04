describe("Help with technology page", () => {
  beforeEach(() => {
    cy.visit("/teachers/help-with-technology/");
    cy.shouldHaveFooter();
    cy.shouldHaveBreadcrumbs();
  });

  it("Shows the Help with technology page", () => {
    cy.shouldHaveHeading(
      "Get help with technology for remote education during coronavirus (COVID-19)"
    );
  });

  it("Has pagination", () => {
    cy.shouldHavePagination(
      "/teachers/safeguarding-and-remote-teaching-during-coronavirus-covid-19/",
      "Safeguarding and remote education during coronavirus (COVID-19)",
      "Previous"
    );
  });
});

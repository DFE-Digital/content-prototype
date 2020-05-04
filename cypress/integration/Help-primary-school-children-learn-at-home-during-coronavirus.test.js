describe("Help primary school children continue their education during coronavirus (COVID-19) page", () => {
  beforeEach(() => {
    cy.visit(
      "/supporting-your-childrens-education-during-coronavirus/help-primary-school-children-learn-at-home-during-coronavirus/"
    );
    cy.shouldHaveFooter();
    cy.shouldHaveBreadcrumbs();
  });

  it("Shows the Help primary school children continue their education during coronavirus (COVID-19) Page", () => {
    cy.shouldHaveHeading(
      "Help primary school children continue their education during coronavirus (COVID-19)"
    );
    cy.contains("Structuring the day").should("exist");
    cy.contains("Using digital devices").should("exist");
    cy.contains("Reducing screen time").should("exist");
    cy.contains("Reception, year 1 and year 2 children").should("exist");
    cy.contains("Year 3 to 6 children").should("exist");
    cy.contains("Information for parents of year 6 children").should("exist");
  });
});

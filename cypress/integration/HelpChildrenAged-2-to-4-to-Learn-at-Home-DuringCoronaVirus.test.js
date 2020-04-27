describe("Help children aged 2 to 4 to learn at home during coronavirus (COVID-19) page", () => {
  beforeEach(() => {
    cy.visit(
      "/supporting-your-childrens-education-during-coronavirus/help-children-aged-2-to-4-to-learn-at-home-during-coronavirus/"
    );
    cy.shouldHaveFooter();
    cy.shouldHaveBreadcrumbs();
  });

  it("Shows the Help children aged 2 to 4 to learn at home during coronavirus (COVID-19) Page", () => {
    cy.shouldHaveHeading(
      "Help children aged 2 to 4 to learn at home during coronavirus (COVID-19)"
    );
    cy.contains("How to help young children learn at home").should("exist");
    cy.contains("Keeping a routine").should("exist");
    cy.contains("Keeping active").should("exist");
    cy.contains("Television and using digital devices").should("exist");
    cy.contains("Socialising while social distancing").should("exist");
  });

  it("Has pagination", () => {
    cy.shouldHavePagination(
      "/supporting-your-childrens-education-during-coronavirus/help-primary-school-children-learn-at-home-during-coronavirus/",
      "Help primary school children learn at home during coronavirus (COVID-19)",
      "Next"
    );
  });
});

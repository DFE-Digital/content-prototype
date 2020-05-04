describe("Help children with SEND continue their education during coronavirus (COVID-19) page", () => {
  beforeEach(() => {
    cy.visit(
      "/supporting-your-childrens-education-during-coronavirus/help-children-with-send-learn-at-home-during-coronavirus/"
    );
    cy.shouldHaveFooter();
    cy.shouldHaveBreadcrumbs();
  });

  it("Shows the Help children with SEND continue their education during coronavirus (COVID-19) Page", () => {
    cy.shouldHaveHeading(
      "Help children with SEND continue their education during coronavirus (COVID-19)"
    );
  });
});

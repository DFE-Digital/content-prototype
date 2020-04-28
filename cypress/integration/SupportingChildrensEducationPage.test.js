describe("Supporting Children's Education Page", () => {
  beforeEach(() => {
    cy.visit("/supporting-your-childrens-education-during-coronavirus/");
    cy.shouldHaveFooter();
    cy.shouldHaveBreadcrumbs();
  });

  it('Shows the "Supporting your children\'s education" page', () => {
    cy.shouldHaveHeading(
      "Supporting your children's education during coronavirus (COVID-19)"
    );
  });
  it('Shows an "This page will be updated regularly" advisory ', () => {
    cy.shouldContainAdvisory(
      "This page and information for teachers will be updated regularly to include further resources and reflect the latest information and developments."
    );
  });
  it('Links through to "Help children aged 2 to 4 to learn at home"', () => {
    cy.contains("Help children aged 2 to 4 to learn at home")
      .should((el) => {
        expect(el).to.have.attr(
          "href",
          "/supporting-your-childrens-education-during-coronavirus/help-children-aged-2-to-4-to-learn-at-home-during-coronavirus/"
        );
      })
      .click();
    cy.location("pathname").should(
      "equal",
      "/supporting-your-childrens-education-during-coronavirus/help-children-aged-2-to-4-to-learn-at-home-during-coronavirus/"
    );
  });

  it('Links through to "Help primary school children learn at home"', () => {
    cy.contains(
      "Help primary school children continue their education during coronavirus (COVID-19)"
    )
      .should((el) => {
        expect(el).to.have.attr(
          "href",
          "/supporting-your-childrens-education-during-coronavirus/help-primary-school-children-learn-at-home-during-coronavirus/"
        );
      })
      .click();
    cy.location("pathname").should(
      "equal",
      "/supporting-your-childrens-education-during-coronavirus/help-primary-school-children-learn-at-home-during-coronavirus/"
    );
  });

  it('Links through to "Help children with SEND learn at home"', () => {
    cy.contains(
      "Help children with SEND continue their education during coronavirus (COVID-19)"
    )
      .should((el) => {
        expect(el).to.have.attr(
          "href",
          "/supporting-your-childrens-education-during-coronavirus/help-children-with-send-learn-at-home-during-coronavirus/"
        );
      })
      .click();
    cy.location("pathname").should(
      "equal",
      "/supporting-your-childrens-education-during-coronavirus/help-children-with-send-learn-at-home-during-coronavirus/"
    );
  });
});

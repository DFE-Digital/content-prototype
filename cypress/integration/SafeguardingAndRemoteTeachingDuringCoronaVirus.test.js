describe("Safeguarding and remote teaching during coronavirus page", () => {
  beforeEach(() => {
    cy.visit(
      "/teachers/safeguarding-and-remote-teaching-during-coronavirus-covid-19/"
    );
    cy.shouldHaveFooter();
    cy.shouldHaveBreadcrumbs();
  });

  it("Shows the safeguarding and remote teaching during coronavirus page", () => {
    cy.shouldHaveHeading(
      "Safeguarding and remote teaching during coronavirus (COVID-19)"
    );
    cy.contains("Safeguarding pupils and teachers online").should("exist");
    cy.contains("Reporting concerns").should("exist");
    cy.contains("Communicating with parents, carers and pupils").should(
      "exist"
    );
    cy.contains("Virtual lessons and live streaming").should("exist");
    cy.contains("Providing pastoral care remotely").should("exist");
    cy.contains("Personal data and GDPR").should("exist");
  });

  it('Links through to "Coronavirus (COVID-19): safeguarding in schools, colleges and other providers"', () => {
    cy.contains(
      "Coronavirus (COVID-19): safeguarding in schools, colleges and other providers"
    ).should("exist");
    cy.contains(
      "Coronavirus (COVID-19): safeguarding in schools, colleges and other providers"
    ).should((el) => {
      expect(el).to.have.attr(
        "href",
        "https://www.gov.uk/government/publications/covid-19-safeguarding-in-schools-colleges-and-other-providers"
      );
    });
  });

  it('Links through to "Get help with technology for remote education during coronavirus (COVID-19)"', () => {
    cy.contains(
      "Get help with technology for remote education during coronavirus (COVID-19)"
    )
      .should((el) => {
        expect(el).to.have.attr("href", "/teachers/help-with-technology/");
      })
      .click();
    cy.location("pathname").should("equal", "/teachers/help-with-technology/");
  });
});

describe("Landing Page", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.shouldHaveFooter();
  });

  it("Shows the initial pages", () => {
    cy.get(".govuk-grid-column-two-thirds")
      .should("exist")
      .should((el) => {
        expect(el.find("a")).to.have.class("govuk-link");
      });
    cy.get(".submasthead__content").should("exist");
    cy.get(".govuk-accordion__open-all").should("exist");
    cy.get(".govuk-accordion__open-all").click();
    cy.get(".govuk-grid-column-two-thirds > :nth-child(1)").should("exist");
    cy.contains("School curriculum and teaching").should("exist");
    cy.contains("Pupil wellbeing and safety").should("exist");
    cy.contains(
      "Closures, exams and managing a school or early years setting"
    ).should("exist");
    cy.contains("Funding and support for education providers").should("exist");
    cy.contains("Student accommodation, travel and financial support").should(
      "exist"
    );
    cy.contains("Further and higher education and vocational training").should(
      "exist"
    );
  });

  it('Checks the "Remote education during coronavirus" hyperlink works', () => {
    cy.contains("Remote education during coronavirus")
      .should((el) => {
        expect(el).to.have.attr("href", "/teachers/");
      })
      .click();
    cy.location("pathname").should("equal", "/teachers/");
  });

  it('Checks the "Supporting your children\'s education" hyperlink works', () => {
    cy.contains("Supporting your children's education during coronavirus")
      .should((el) => {
        expect(el).to.have.attr(
          "href",
          "/supporting-your-childrens-education-during-coronavirus/"
        );
      })
      .click();
    cy.location("pathname").should(
      "equal",
      "/supporting-your-childrens-education-during-coronavirus/"
    );
  });
});

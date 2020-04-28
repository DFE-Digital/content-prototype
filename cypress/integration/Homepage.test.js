describe("Landing Page", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.shouldHaveFooter();
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
    cy.get(".govuk-grid-column-two-thirds .govuk-link")
      .eq(3)
      .should((el) => {
        expect(el).to.contain.text("Remote education during coronavirus");
        expect(el).to.have.attr("href");
        expect(el.attr("href")).to.equal("/teachers/");
      })
      .click({ force: true });
    cy.location("pathname").should("equal", "/teachers/");
  });

  it('Checks the "Supporting your children\'s education" hyperlink works', () => {
    cy.get("#accordion-default-heading-1").click();
    cy.get(".govuk-grid-column-two-thirds .govuk-link")
      .eq(1)
      .should((el) => {
        expect(el).to.contain.text(
          "Supporting your children's education during coronavirus"
        );
        expect(el).to.have.attr("href");
        expect(el.attr("href")).to.equal(
          "/supporting-your-childrens-education-during-coronavirus/"
        );
      })
      .click({ force: true });
    cy.location("pathname").should(
      "equal",
      "/supporting-your-childrens-education-during-coronavirus/"
    );
  });
});

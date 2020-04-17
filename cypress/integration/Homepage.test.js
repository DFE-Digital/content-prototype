describe("Landing Page", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.shouldHaveLargeHeading();
    cy.shouldHaveFooter();
  });

  it("Shows the initial pages", () => {
    cy.get(".govuk-grid-column-two-thirds")
      .should("exist")
      .should((el) => {
        expect(el.find("a")).to.have.class("govuk-link");
      });
    cy.get(".submasthead__content").should("exist");
    cy.get(
      ".govuk-grid-column-two-thirds > :nth-child(1) > .govuk-link"
    ).should("exist");
  });

  it('Checks the "Teaching during coronavirus" hyperlink works', () => {
    cy.get(".govuk-grid-column-two-thirds .govuk-link")
      .eq(0)
      .should((el) => {
        expect(el).to.contain.text("Teaching during coronavirus (COVID-19)");
        expect(el).to.have.attr("href");
        expect(el.attr("href")).to.equal("/teachers/");
      })
      .click();
    cy.location("pathname").should("equal", "/teachers/");
  });

  it('Checks the "Supporting your children\'s education" hyperlink works', () => {
    cy.get(".govuk-grid-column-two-thirds .govuk-link")
      .eq(1)
      .should((el) => {
        expect(el).to.contain.text(
          "Supporting your children's education during coronavirus (COVID-19)"
        );
        expect(el).to.have.attr("href");
        expect(el.attr("href")).to.equal(
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

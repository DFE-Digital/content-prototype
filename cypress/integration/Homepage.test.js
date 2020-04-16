describe("HomePage", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Shows the initial pages", () => {
    cy.shouldHaveHeading();
    cy.get(".govuk-grid-column-two-thirds")
      .should("exist")
      .should((el) => {
        expect(el.find("a")).to.have.class("govuk-link");
      });
    cy.get(".submasthead__content").should("exist");
    cy.get(
      ".govuk-grid-column-two-thirds > :nth-child(1) > .govuk-link"
    ).should("exist");
    cy.get(".govuk-footer").should(
      "contain.text",
      "All content is available under the Open Government Licence v3.0, except where otherwise stated"
    );
  });
});

describe("Teaching during coronavirus (COVID-19) hyperlink", () => {
  cy.visit("/");
  it("Checks the Teaching during coronavirus (COVID-19) hyperlink works", () => {
    cy.get(".govuk-grid-column-two-thirds .govuk-link")
      .should("have.attr", "href")
      .should("equal", "/teachers/")
      .click();
    cy.location("pathname").should("equal", "/teachers/");
  });
});

describe("Remote learning prototype - HomePage", () => {
  beforeEach(() => {
    cy.visit("/", {
      auth: { username: "remote", password: "learning" },
    });
  });
  it("Validate the user is able to launch remote learning prototype portal", () => {
    cy.shouldHaveHeading();
    cy.get(".submasthead__content").should("exist");
    cy.shouldHaveFooter();
    cy.get(
      ".govuk-grid-column-two-thirds > :nth-child(1) > .govuk-link"
    ).should("exist");
  });
  it("Validate the system is navigating to next page if user clicks on Teaching during coronavirus (COVID-19) link", () => {
    cy.clockOnTeachingduringcoronaviruslink();
    cy.contains(
      "What’s expected of teachers during the coronavirus outbreak"
    ).should("exist");
    cy.contains("Preparing to teach during the coronavirus outbreak").should(
      "exist"
    );
    cy.shouldHaveHeaderAndFooter();
  });
});
describe("Remote learning prototype - Learning during coronavirus page", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("Url"), {
      auth: { username: "remote", password: "learning" },
    });
  });
  it("Validate the system is navigating home page back if user clicks home page link", () => {
    cy.clockOnTeachingduringcoronaviruslink();
    cy.get(".govuk-breadcrumbs__link").click();
    cy.get(
      ".govuk-grid-column-two-thirds > :nth-child(1) > .govuk-link"
    ).should("exist");
    cy.get(":nth-child(4) > .govuk-link").should("exist");
  });
  it("Validate the system is navigating next page if user clicks on Supporting your children's learning during coronavirus (COVID-19) link", () => {
    cy.get(":nth-child(4) > .govuk-link").click();
    cy.get(".gem-c-govspeak > :nth-child(1)").should("exist");
    cy.shouldHaveHeaderAndFooter();
  });
});

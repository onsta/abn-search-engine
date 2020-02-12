/* eslint-disable no-undef */
/// <reference types="cypress" />

context("Actions", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("As a user, when I type in a company name I should be shown a list of matching companies.", () => {
    cy.get("[data-testid=search-input]").type("TRADE LEDGER PTY. LTD.");
    cy.get("[data-testid=search-button]").click();
    cy.wait(10000);
    cy.get("[data-testid=company-list]").contains("32614059737");
  });

  it("As a user, when I select a company from the list, I should be shown the details of the company.", () => {
    cy.get("[data-testid=search-input]").type("TRADE LEDGER PTY. LTD.");
    cy.get("[data-testid=search-button]").click();
    cy.wait(10000);
    cy.get("[data-testid=company-list]")
      .contains("32614059737")
      .click({ force: true });
    cy.wait(10000);
    cy.get("[data-testid=company-entity-name]").contains(
      "TRADE LEDGER PTY. LTD."
    );
  });

  it("As a user, when I type in an ABN I should be shown the matching company.", () => {
    cy.get("[data-testid=search-input]").type("32614059737");
    cy.get("[data-testid=search-button]").click();
    cy.wait(10000);
    cy.get("[data-testid=company-entity-name]").contains(
      "TRADE LEDGER PTY. LTD."
    );
  });
});

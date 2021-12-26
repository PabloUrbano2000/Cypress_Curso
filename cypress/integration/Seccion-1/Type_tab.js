/// <reference types="Cypress" />

describe("Ejemplo funcion Tab", () => {
  it("Type con tab", () => {
    cy.visit("https://demoqa.com/automation-practice-form");
    cy.title().should("eq", "ToolsQA");
    cy.wait(1000);

    cy.get("#firstName")
      .type("Pablo")
      .tab()
      .type("Urbano")
      .tab()
      .type("pablojamiro2008@gmail.com");
  });
});

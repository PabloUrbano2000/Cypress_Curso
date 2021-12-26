/// <reference types="Cypress" />

describe("Configuracion y uso de los Snippets", () => {
  it("Snippet uno", () => {
    cy.visit("https://demoqa.com/text-box");
    cy.title().should("eq", "ToolsQA");
    cy.wait(1000);

    // PARA CREAR SNIPPETS CTRL+P -> > configure user snippets

    cy.get('[placeholder="Full Name"]').should("be.visible").type("Pablo");
    cy.wait(1000);
  });
});

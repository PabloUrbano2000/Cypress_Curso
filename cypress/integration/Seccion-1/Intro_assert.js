/// <reference types="Cypress" />

describe("Introducción a los asserts", () => {
  it("Demo de los Asserts", () => {
    cy.visit("https://demoqa.com/automation-practice-form");
    cy.title().should("eq", "ToolsQA");
    cy.wait(1000);

    // verifica si el campo es visible para la maquina
    cy.get("#firstName").should("be.visible").type("Pablo");
    cy.wait(1000);
    cy.get("#lastName").should("be.visible").type("Urbano");
    cy.wait(1000);

    // si está habilitado
    cy.get("#userEmail")
      .should("be.visible")
      .should("be.enabled")
      .type("pabloas@hotmail.com");
  });
  
});

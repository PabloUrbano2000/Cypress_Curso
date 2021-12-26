// para que funciones los comandos
/// <reference types="Cypress" />

describe("Sección 1 Validando el título", () => {
  it("Test Validar el título", () => {
    cy.visit("http://demoqa.com/text-box");
    // validacion del title
    cy.title().should("eq", "ToolsQA");
    cy.log("Ok la función title funcionó bien");
  });
});

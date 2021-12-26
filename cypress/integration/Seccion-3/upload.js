/// <reference types="Cypress" />

describe("Upload test", () => {
  it("Prueba de subida de imagenes", () => {
    cy.visit("https://demoqa.com/automation-practice-form");
    cy.title("eq", "ToolsQA");
    cy.wait(1000);

    const ruta = 'img1.jpg';
    cy.get("[type='file']").attachFile(ruta);
    cy.wait(2000);
  });
});

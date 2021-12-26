/// <reference types="Cypress" />

describe("Primer reto", () => {
  it("Pruebas en la tabla", () => {
    // agregando al usuario
    cy.visit("https://demoqa.com/webtables");
    cy.title().should("eq", "ToolsQA");
    cy.wait(1000);
    cy.get("#addNewRecordButton")
      .should("be.visible")
      .should("be.enabled")
      .click();
    cy.wait(1000);
    cy.get("#firstName")
      .should("be.enabled")
      .type("Pablo")
      .tab()
      .type("Urbano")
      .tab()
      .type("pablojamiro2008@asdsd.com")
      .tab()
      .type("50")
      .tab()
      .type("930")
      .tab()
      .type("Analist");
    cy.get("#submit").should("be.visible").should("be.enabled").click();
    cy.wait(1000);

    // buscando al usuario
    cy.get("#searchBox")
      .should("be.visible")
      .should("be.enabled")
      .type("Pablo");
    cy.wait(1000);

    // editando al usuario
    cy.get("#edit-record-4").should("be.visible").click();
    cy.get("#firstName")
      .should("be.enabled")
      .clear()
      .type("Paolo")
      .tab()
      .type("Tineo");
    cy.get("#submit").should("be.visible").should("be.enabled").click();
    cy.wait(1000);

    // eliminando al usuario
    cy.get("#delete-record-4").should("be.visible").click({ force: true });
  });
});

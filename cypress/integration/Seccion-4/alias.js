/// <reference types="Cypress" />

describe("Alias", () => {
  it("Alias uno", () => {
    cy.visit(
      "https://testpages.herokuapp.com/styled/validation/input-validation.html"
    );
    cy.title().should("eq", "Input Validation");
    cy.wait(1000);

    // asignando alias a un elemento
    cy.get("#firstname").should("be.visible").as("nom");

    cy.get("@nom").type("Pablo");

    // asignando alias a un elemento
    cy.get("#surname").should("be.visible").as("ap");

    cy.get("@ap").type("Urbano Tineo");

    // asignando alias a un elemento
    cy.get("#age").should("be.visible").as("edad");
    cy.get("@edad").type("30");

    cy.get("#country").should("be.visible").as("pais");
    cy.get("@pais").select("Bulgaria");

    cy.get("#notes").should("be.visible").as("notas");
    cy.get("@notas").type("Aca vivo");

    cy.get("[type='submit']").should("be.visible").click();
  });
});

/// <reference types="Cypress" />

describe("Segundo Reto", () => {
  it("Pruebas para segundo reto", () => {
    cy.visit("http://computer-database.gatling.io/computers");
    cy.title("Computers database");
    cy.wait(1000);

    const nombre = "PABLO COMPANY";
    // filtrando
    cy.get("#searchbox").should("be.visible").should("be.enabled").type("ASCI");
    cy.get("#searchsubmit").should("be.visible").should("be.enabled").click();
    cy.wait(1000);
    cy.get("#searchbox").should("be.visible").should("be.enabled").clear();

    // creando una computadora
    cy.get("#add").should("be.visible").click();
    cy.get("[name='name']")
      .should("be.visible")
      .should("be.enabled")
      .type(nombre)
      .tab()
      .type("2000-10-20")
      .tab()
      .type("2000-12-30");
    // combo
    cy.get("#company")
      .should("be.visible")
      .should("be.enabled")
      .select("Nokia")
      .should("have.value", "16")
      .wait(1500);

    cy.get("[value='Create this computer']")
      .should("be.visible")
      .should("be.enabled")
      .click();

    cy.wait(1000);
    cy.get(".alert-message.warning")
      .contains(`Done ! Computer ${nombre} has been created`)
      .click();
  });
});

/// <reference types="Cypress" />

describe("Reto 1 - Sección 2", () => {
  it("Reto del select multiple", () => {
    cy.visit("http://demo.seleniumeasy.com/jquery-dual-list-box-demo.html");
    cy.title("eq", "Selenium Easy - JQuery Dual List Box Demo");
    cy.wait(1000);
    // seleccionando el multiselect de data
    const user1 = "Manuela";
    const user2 = "Laura";
    const user3 = "Helena";
    cy.get(".form-control.pickListSelect.pickData")
      .should("be.visible")
      .select([user1, user2, user3])
      .then(() => {
        cy.wait(1000);
        // agregando
        cy.get(".pAdd.btn.btn-primary.btn-sm")
          .contains("Add")
          .should("be.visible")
          .click();
        cy.get(1000);

        // seleccionando el multiselect de resultados
        cy.get(".form-control.pickListSelect.pickListResult")
          .should("be.visible")
          .select([user2, user3]);
        cy.wait(500);

        // removiendo a los usuarios
        cy.get(".pRemove.btn.btn-primary.btn-sm")
          .contains("Remove")
          .should("be.visible")
          .click();
        cy.wait(1000);

        // añadiendo a todos los usuarios
        cy.get(".pAddAll.btn.btn-primary.btn-sm")
          .contains("Add All")
          .should("be.visible")
          .click();
        cy.wait(1000);

        // removiendo a todos los usuarios
        cy.get(".pRemoveAll.btn.btn-primary.btn-sm")
          .contains("Remove All")
          .should("be.visible")
          .click();
      });
  });
});

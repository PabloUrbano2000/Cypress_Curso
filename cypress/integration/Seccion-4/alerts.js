/// <reference types="Cypress" />

describe("Alertas en cypress", () => {
  it("Alerta uno", () => {
    cy.visit("https://demo.seleniumeasy.com/bootstrap-modal-demo.html");
    cy.title().should(
      "eq",
      "Selenium Easy Demo - Bootstrap Modal Demo to Automate"
    );
    cy.wait(1000);

    cy.get("[href='#myModal0']").click();
    cy.wait(1000);
    cy.get("#myModal0 > div > div > div.modal-footer > a.btn.btn-primary")
      .should("be.visible")
      .click();

    cy.get("[href='#myModal0']").click();
    cy.wait(1000);
    cy.get("#myModal0 > div > div > div.modal-footer > a:nth-child(1)")
      .should("be.visible")
      .click();
  });
});

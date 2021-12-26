/// <reference types="Cypress" />

describe("Campos de tipo fecha", () => {
  let tiempo = 1000;
  it("Fecha uno", () => {
    cy.visit("http://demo.seleniumeasy.com/bootstrap-date-picker-demo.html");
    cy.title(
      "eq",
      "Selenium Easy - Best Demo website for Bootstrap Date picker"
    );
    cy.wait(1000);

    cy.get("#sandbox-container1 > .input-group > .form-control")
      .should("be.visible")
      .type("09/12/2021")
      .then(() => {
        // cy.get("#sandbox-container1 > .input-group > .form-control").type(
        //   "{esc}"
        // );

        // cy.get("#sandbox-container1 > .input-group > .form-control")
        //   .should("be.visible")
        //   .type("09/12/2021")
        //   .tab();

        // cy.get("#sandbox-container1 > .input-group > .form-control").should("be.visible").focus();

        // cy.get("#sandbox-container1 > .input-group > .form-control").click(
        //   10,
        //   20
        // );

        // para seleccionar el primer elemento que sea de cierta clase
        //cy.get(".today").first().click();

        // Solucion mía
        cy.get(".active.day").click();
      });
  });

  it.only("Fecha dos por rangos", () => {
    cy.visit("http://demo.seleniumeasy.com/bootstrap-date-picker-demo.html");
    cy.title(
      "eq",
      "Selenium Easy - Best Demo website for Bootstrap Date picker"
    );
    cy.wait(2000);

    cy.get("#datepicker > input:nth-child(1)")
      .should("be.visible")
      .type("09/12/2021 {esc}");

    cy.get("#datepicker > input:nth-child(3)").should("be.visible").click();
    cy.contains(".day", "25").should("be.visible").click();
    cy.get("#datepicker > input:nth-child(3)").should("be.visible").tab();

    cy.wait(1000);
  });
});

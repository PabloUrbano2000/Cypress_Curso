/// <reference types="Cypress" />

describe("Nueva sección Checkbox", () => {
  it("check uno", () => {
    cy.visit("http://demo.seleniumeasy.com/basic-checkbox-demo.html");
    cy.title().should(
      "eq",
      "Selenium Easy - Checkbox demo for automation using selenium"
    );
    cy.wait(1000);

    cy.get("[type='checkbox']").check().should("be.checked");
    cy.wait(2000);
    cy.get("[type='checkbox']").uncheck().should("not.be.checked");
  });

  it.only("check por seleccion", () => {
    cy.visit("http://demo.seleniumeasy.com/basic-checkbox-demo.html");
    cy.title().should(
      "eq",
      "Selenium Easy - Checkbox demo for automation using selenium"
    );
    cy.wait(1000);

    cy.get("#isAgeSelected").check().should("be.checked");
    cy.wait(2000);
    cy.get(
      "#easycont > div > div.col-md-6.text-left > div:nth-child(5) > div.panel-body > div:nth-child(4) > label > input"
    )
      .check()
      .should("be.checked");
    cy.get(
      "#easycont > div > div.col-md-6.text-left > div:nth-child(5) > div.panel-body > div:nth-child(6) > label > input"
    )
      .check()
      .should("be.checked");
    cy.wait(2000);

    cy.get(".btn.btn-primary").click();
  });
});

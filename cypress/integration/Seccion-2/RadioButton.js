/// <reference types="Cypress" />

http: describe("Radio Button", () => {
  it("Radio Button uno", () => {
    cy.visit("demo.seleniumeasy.com/basic-radiobutton-demo.html");
    cy.title().should(
      "eq",
      "Selenium Easy Demo - Radio buttons demo for Automation"
    );
    cy.wait(1000);

    cy.get(
      "#easycont > div > div.col-md-6.text-left > div:nth-child(4) > div.panel-body > label:nth-child(2) > input[type=radio]"
    )
      .should("be.visible")
      .click();
    cy.wait(1000);
    cy.get("#buttoncheck").click();

    cy.wait(2000);

    // prueba 2
    cy.get(
      "#easycont > div > div.col-md-6.text-left > div:nth-child(5) > div.panel-body > div:nth-child(2) > label:nth-child(3) > input[type=radio]"
    ).click();

    cy.get("[value='15 - 50']").should("be.visible").click();
    cy.wait(1000);
    cy.get(".btn.btn-default").contains("Get values").click();
  });
});

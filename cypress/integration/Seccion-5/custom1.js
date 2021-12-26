/// <reference types='Cypress' />

describe("Comandos Personalizados", () => {
  before(() => {
    cy.visit("https://demoqa.com/text-box");
    cy.title().should("eq", "ToolsQA");
    cy.wait(1000);
  });

  it("Demo 1", () => {
    cy.campo_visible("#userName", "Pablo");
    cy.campo_visible("#userEmail", "pablo@mail.com");
    cy.campo_visible_xpath("//*[@id='currentAddress']", "Los Olivos");
    cy.campo_visible("#permanentAddress", "Donde siempre pe");
    cy.campo_click("#submit", true);
  });

  it.only("Demo 2 por bloque", () => {
    cy.bloque_ToolsQA_text_box(
      "Pablo",
      "pedropablo@mail.com",
      "San Juan",
      "San Pedro",
      1000
    );
  });
});

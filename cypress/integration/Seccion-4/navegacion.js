/// <reference types='Cypress' />

describe("Navegacion entre las páginas", () => {
  it("Back y Forward", () => {
    cy.visit("https://demoqa.com/");
    cy.title().should("eq", "ToolsQA");
    cy.wait(1000);

    cy.get(
      ".category-cards div:nth-child(1)  div div.avatar.mx-auto.white"
    ).click();
    cy.get("#item-0").should("be.visible").click();
    cy.wait(1000);

    cy.go("back");
    cy.go("back");

    cy.go("forward");
    cy.go("forward");
  });

  it.only("Reload", () => {
    cy.visit("https://demoqa.com/");
    cy.title().should("eq", "ToolsQA");
    cy.wait(1000);

    cy.get(
      ".category-cards div:nth-child(1)  div div.avatar.mx-auto.white"
    ).click();
    cy.get("#item-0").should("be.visible").click();
    cy.wait(1000);

    cy.get("#userName").should("be.visible").type("Pablo");
    cy.wait(1000);
    cy.get("#userEmail").should("be.visible").type("Urbano@gmail.com");

    // recargar la página
    cy.reload();
    cy.wait(1000);
    cy.go("back");
  });
});

/// <reference types="Cypress" />

describe("Tipos de selectores", () => {
  it("Selector por id", () => {
    cy.visit("https://demoqa.com/text-box");
    cy.title().should("eq", "ToolsQA");
    cy.wait(1000);
    // por id
    cy.get("#userName").should("be.visible").type("Carlos");
    cy.get("#userEmail").should("be.visible").type("Pablojamiro2300@gmail.com");
  });

  it("Selector por atributo", () => {
    cy.visit("https://demoqa.com/text-box");
    cy.title().should("eq", "ToolsQA");
    cy.wait(1000);
    // por placeholder
    cy.get("[placeholder='Full Name']").should("be.visible").type("Pablo");
    cy.get("[placeholder='name@example.com']")
      .should("be.visible")
      .type("Pablojamiro2300@gmail.com");
  });

  it.only("Selector por xpath", () => {
    cy.visit("https://demoqa.com/text-box");
    cy.title().should("eq", "ToolsQA");
    cy.wait(1000);
    // por xpath
    cy.xpath("//*[@id='userName']")
      // timeout: tiempo de espera que tiene para validar
      .should("be.visible", { timeout: 5000 })
      .type("Jamiro");
    cy.wait(1000);
    cy.xpath("//*[@id='userEmail']")
      .should("be.visible")
      .type("Pablojamiro2300@gmail.com");
  });

  it("Selector por contains", () => {
    cy.visit("https://demoqa.com/automation-practice-form");
    cy.title().should("eq", "ToolsQA");
    cy.wait(1000);

    // por contains
    cy.get(".custom-control-label").contains("Female").click();
    cy.wait(1000);
    cy.get(".custom-control-label").contains("Other").click();
  });

  it("Selector por copy selector", () => {
    cy.visit("https://demoqa.com/automation-practice-form");
    cy.title().should("eq", "ToolsQA");
    cy.wait(1000);

    // por copy selector
    cy.get("#userNumber").should("be.visible").click().type("Perro");
  });
});

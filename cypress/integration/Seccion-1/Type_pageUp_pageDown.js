/// <reference types="Cypress" />

describe("Ejemplo de Type pageUp, pageDown", () => {
  it("Type pageUP", () => {
    cy.visit("https://demoqa.com/text-box");
    cy.title().should("eq", "ToolsQA");
    cy.wait(1000);

    // deslizar para abajo
    cy.get("#userName").type("{pageup}");
    cy.wait(2000);
  });

  it("Type pageDOWN", () => {
    cy.visit("https://demoqa.com/text-box");
    cy.title().should("eq", "ToolsQA");
    cy.wait(1000);

    // deslizar para abajo
    cy.get("#userName").type("{pagedown}");
    cy.wait(2000);
  });

  it("Type pageUP", () => {
    cy.visit("https://demoqa.com/text-box");
    cy.title().should("eq", "ToolsQA");
    cy.wait(1000);

    // deslizar para abajo
    cy.get("#userName").type("{pageup}");
    cy.wait(2000);
  });

  it("Type pageDOWN", () => {
    cy.visit("https://demoqa.com/text-box");
    cy.title().should("eq", "ToolsQA");
    cy.wait(1000);

    // deslizar para abajo
    cy.get("#userName").type("{pagedown}");
    cy.wait(2000);
  });

  it("Type pageUP", () => {
    cy.visit("https://demoqa.com/text-box");
    cy.title().should("eq", "ToolsQA");
    cy.wait(1000);

    // deslizar para abajo
    cy.get("#userName").type("{pageup}");
    cy.wait(2000);
  });

  it("Type pageDOWN", () => {
    cy.visit("https://demoqa.com/text-box");
    cy.title().should("eq", "ToolsQA");
    cy.wait(1000);

    // deslizar para abajo
    cy.get("#userName").type("{pagedown}");
    cy.wait(2000);
  });
  it("Type pageUP", () => {
    cy.visit("https://demoqa.com/text-box");
    cy.title().should("eq", "ToolsQA");
    cy.wait(1000);

    // deslizar para abajo
    cy.get("#userName").type("{pageup}");
    cy.wait(2000);
  });

  // si solo queremos que corra 1
  it.only("Type pageDOWN solo", () => {
    cy.visit("https://demoqa.com/text-box");
    cy.title().should("eq", "ToolsQA");
    cy.wait(1000);

    // deslizar para abajo
    cy.get("#userName").type("{pagedown}");
    cy.wait(2000);
  });
});

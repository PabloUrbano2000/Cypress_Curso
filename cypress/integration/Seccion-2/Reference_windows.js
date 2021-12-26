//testsheepnz.github.io/random-number.html

/// <reference types="Cypress" />

https: describe("References Test", () => {
  it("Windows propiedad charset", () => {
    cy.visit("https://testsheepnz.github.io/random-number.html");
    cy.title("eq", "The Number Game");
    cy.wait(500);

    // validando el charset
    cy.document().should("have.property", "charset").and("eq", "UTF-8");
  });

  it.only("Windows url", () => {
    cy.visit("https://testsheepnz.github.io/random-number.html");
    cy.title("eq", "The Number Game");
    cy.wait(500);

    // validando la url
    cy.url().should("include", "random-number.html");
    cy.url().should("eq", "https://testsheepnz.github.io/random-number.html");
  });
});

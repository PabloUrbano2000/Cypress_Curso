/// <reference types="Cypress" />

describe("Functiones para Type", () => {
  it("Type --> ENTER", () => {
    cy.visit("https://www.google.com/");
    cy.title().should("eq", "Google");
    cy.wait(1500);

    // donde encuentre el elemento name donde sea q
    cy.get("[name='q']").type("cypress io {enter}");

    // para dar clicks
    cy.get(
      "#rso > div:nth-child(1) > div > div > div > div > div > div > div.yuRUbf > a"
    ).click();
  });
});

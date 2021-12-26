/// <reference types='Cypress' />
describe("Demo PLANTILLA", () => {
  it("PRUEBA 1", () => {
    cy.visit("https://demo.seleniumeasy.com/basic-first-form-demo.html");
    cy.title().should(
      "eq",
      "Selenium Easy Demo - Simple Form to Automate using Selenium"
    );
    cy.wait(1000);
  });
});

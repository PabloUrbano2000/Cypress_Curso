/// <reference types='Cypress' />

describe("Hooks Ejemplos", () => {
  before(() => {
    cy.visit("https://demo.seleniumeasy.com/basic-checkbox-demo.html");
    cy.title().should(
      "eq",
      "Selenium Easy - Checkbox demo for automation using selenium"
    );
  });

  beforeEach(() => {
    cy.wait(1000);
  });

  it("test uno", () => {
    cy.get('[type="checkbox"]').check().should("be.checked");
    cy.wait(1000);
  });

  it("test dos", () => {
    cy.get('[type="checkbox"]').uncheck().should("not.be.checked");
    cy.wait(1000);
  });

  it("test tres", () => {
    cy.xpath('//*[@id="easycont"]/div/div[2]/div[2]/div[2]/div[2]/label/input')
      .check()
      .should("be.checked");
    cy.wait(1000);
  });
});

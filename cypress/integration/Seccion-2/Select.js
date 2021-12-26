/// <reference types="Cypress" />

describe("Nueva sección Select", () => {
  it("Select 1", () => {
    cy.visit("http://demo.seleniumeasy.com/basic-select-dropdown-demo.html");
    cy.title().should("eq", "Selenium Easy Demo - Automate All Scenarios");
    cy.wait(1000);

    const day = "Friday";
    cy.get("#select-demo")
      .should("be.visible")
      .select(day)
      .should("have.value", day);
    cy.wait(1000);

    cy.get(".selected-value")
      .contains(`Day selected :- ${day}`)
      .should("be.visible");
  });

  it("select en google", () => {
    cy.visit("https://www.google.com/");
    cy.title().should("eq", "Google");
    cy.wait(1000);

    cy.get("[name='q']")
      .should("be.visible")
      .should("be.enabled")
      .type("Ferrari")
      .type("{enter}");
    cy.wait(1500);
    // cy.get("#voiceSearchButton").should("be.visible").click();
    cy.xpath("//*[@id='hdtb-msb']/div[1]/div/div[2]/a").click();
  });

  it.only("Multi Select", () => {
    cy.visit("http://demo.seleniumeasy.com/basic-select-dropdown-demo.html");
    cy.title().should("eq", "Selenium Easy Demo - Automate All Scenarios");
    cy.wait(1000);

    const city1 = "Texas";
    const city2 = "New York";
    cy.get("#multi-select")
      .should("be.visible")
      .select([city1, city2])
      .then(() => {
        cy.wait(1000);
        cy.get("#printMe").should("be.visible").click();
      });
  });
});

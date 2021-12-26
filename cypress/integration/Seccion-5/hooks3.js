/// <reference types='Cypress' />

describe("Reto de la funcion hooks", () => {
  beforeEach(() => {
    cy.visit("https://opensource-demo.orangehrmlive.com/");
    cy.title().should("eq", "OrangeHRM");
    cy.get("#txtUsername").should("be.visible").type("Admin");
    cy.get("#txtPassword").should("be.visible").type("admin123");
    cy.get("#btnLogin").should("be.visible").click();
  });

  after(() => {
    cy.wait(1000);
    cy.get("#welcome")
      .should("be.visible")
      .click()
      .then(() => {
        cy.get("#welcome-menu > ul > li:nth-child(3) > a")
          .should("be.visible")
          .click();
      });
  });

  it("test dando click a botones 1", () => {
    cy.get("#mainMenuFirstLevelUnorderedList > li:nth-child(1)")
      .should("be.visible")
      .click();
  });

  it("test dando click a botones 2", () => {
    cy.get("#mainMenuFirstLevelUnorderedList > li:nth-child(3)")
      .should("be.visible")
      .click();
    cy.wait(1000);
  });
});

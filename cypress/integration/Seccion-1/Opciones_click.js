/// <reference types="Cypress" />

describe("Opciones de click", () => {
  it("Click sencillo", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/");
    cy.title().should("eq", "OrangeHRM");
    cy.wait(1000);
    cy.get("#txtUsername").should("be.visible").type("Admin");
    cy.wait(1000);
    cy.get("#txtPassword").should("be.visible").type("admin123");
    cy.wait(1000);
    cy.get("#btnLogin").should("be.visible").click();
    cy.wait(1500);
    cy.get("#menu_admin_viewAdminModule").should("be.visible").click();
    // cy.wait(1000);
    // cy.get("#menu_admin_Job").should("be.visible").click();
  });

  it("Click Force true", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/");
    cy.title().should("eq", "OrangeHRM");
    cy.wait(1000);
    cy.get("#txtUsername").should("be.visible").type("Admin");
    cy.wait(1000);
    cy.get("#txtPassword").should("be.visible").type("admin123");
    cy.wait(1000);
    cy.get("#btnLogin").should("be.visible").click();
    cy.wait(1500);
    cy.get("#menu_admin_viewAdminModule").should("be.visible").click();
    cy.wait(1000);
    // PARA FORZAR UN CLICK
    cy.get("#menu_admin_Job").should("be.visible").click({ force: true });
  });

  it.only("Click por coordenadas X-Y", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/index.php/admin/viewSystemUsers#"
    );
    cy.title().should("eq", "OrangeHRM");
    cy.wait(1000);
    cy.get("#txtUsername").should("be.visible").type("Admin");
    cy.wait(1000);
    cy.get("#txtPassword").should("be.visible").type("admin123");
    cy.wait(1000);
    cy.get("#btnLogin").should("be.visible").click();
    cy.wait(1500);
    // por coordenadas
    cy.get("#welcome").should("be.visible").click(50, 10);
    cy.get("#welcome").should("be.visible").click(70, 10);
  });
});

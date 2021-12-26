/// <reference types="Cypress" />

describe("Manejo de Invoke", () => {
  it("Invoke Text", () => {
    cy.visit(
      "https://testpages.herokuapp.com/styled/validation/input-validation.html"
    );
    cy.title().should("eq", "Input Validation");
    cy.wait(1000);

    // Invoque almacena dato que hay en este elemento
    cy.get("body > div > p").invoke("text").as("info");

    cy.get("@info").should(
      "contain",
      "The information will be submitted to the server if it passes client side validation."
    );

    cy.get("body > div > div:nth-child(7) > form > label:nth-child(1)")
      .invoke("text")
      .as("title_name");

    cy.get("@title_name")
      .should("contain", "First name:")
      .then(() => {
        cy.get("#firstname").type("Pablo");
      });
  });

  it("Invoke estilos", () => {
    cy.visit(
      "https://testpages.herokuapp.com/styled/validation/input-validation.html"
    );
    cy.title().should("eq", "Input Validation");
    cy.wait(1000);

    cy.get("[for='firstname']").invoke(
      "attr",
      "style",
      "color:green; font-size:40px;"
    );
  });

  it("Invoke ocultar y mostrar", () => {
    cy.visit(
      "https://testpages.herokuapp.com/styled/validation/input-validation.html"
    );
    cy.title().should("eq", "Input Validation");
    cy.wait(1000);

    cy.get("[for='firstname']").invoke("hide");
    cy.get("#firstname").invoke("hide");

    cy.wait(2000);
    cy.get("[for='firstname']").invoke("show", "2s");
    cy.get("#firstname").invoke("show", "2s");
  });

  it("Reto Invoke", () => {
    cy.visit(
      "https://testpages.herokuapp.com/styled/validation/input-validation.html"
    );
    cy.title().should("eq", "Input Validation");

    cy.get("[for='surname']").as("title-ape").invoke("hide");
    cy.get("#surname").as("ape").invoke("hide");

    cy.get("#firstname")
      .should("be.visible")
      .type("Pablo")
      .then(() => {
        cy.wait(2000);
        cy.get("@title-ape").invoke("show", "3s");
        cy.get("@ape").invoke("show", "3s");
        cy.get("@ape").should("be.visible").type("Urbano Tineo");
      });
  });

  it("Invoke SRC", () => {
    cy.visit("https://demo.seleniumeasy.com/bootstrap-modal-demo.html");
    cy.title().should(
      "eq",
      "Selenium Easy Demo - Bootstrap Modal Demo to Automate"
    );
    cy.wait(1000);
    cy.get("img.cbt")
      .invoke("attr", "src")
      .should("contain", "/sponsored-by-CBT.png");
  });

  it.only("Invoke target_blank", () => {
    cy.visit("https://dvwa.co.uk/");
    cy.title().should("eq", "DVWA - Damn Vulnerable Web Application");
    cy.wait(1000);
    cy.get("[href='https://github.com/digininja/DVWA']")
      .first()
      .invoke("removeAttr", "target")
      .click({ force: true });
  });
});

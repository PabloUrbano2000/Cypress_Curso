/// <reference types='Cypress' />

describe("Carga por Fixture", () => {
  //   before(() => {
  //     cy.fixture("datos2").then((data) => {
  //       // this.data = data;
  //       globalThis.data = data;
  //     });
  //   });

  //     cy.fixture("datos2").as("usuario"); // el alias

  //   it("Cargando desde json", () => {
  //     cy.visit("https://demoqa.com/text-box");
  //     cy.title("ToolsQA");
  //     cy.wait(1000);

  //     cy.get("@usuario").then((data) => {
  //       cy.log(data);
  //       cy.get("#userName").should("be.visible").type(data.nombre);
  //       cy.wait(1000);
  //       cy.get("#userEmail").should("be.visible").type(data.email);
  //       cy.wait(1000);
  //       cy.get("#currentAddress").should("be.visible").type(data.dir1);
  //       cy.wait(1000);
  //       cy.get("#permanentAddress").should("be.visible").type(data.dir2);
  //       cy.wait(1000);
  //       cy.get("#submit").click();
  //     });
  //   });

  it("Cargando desde json RETO", () => {
    cy.fixture("datos2").then((testdata) => {
      testdata.forEach((data) => {
        cy.visit("https://demoqa.com/text-box");
        cy.title("ToolsQA");
        cy.wait(1000);

        const d_nombre = data.nombre;
        const d_email = data.email;
        const d_dir1 = data.dir1;
        const d_dir2 = data.dir2;

        cy.get("#userName").should("be.visible").clear().type(d_nombre);
        cy.wait(1000);
        cy.get("#userEmail").should("be.visible").clear().type(d_email);
        cy.wait(1000);
        cy.get("#currentAddress").should("be.visible").clear().type(d_dir1);
        cy.wait(1000);
        cy.get("#permanentAddress").should("be.visible").clear().type(d_dir2);
        cy.wait(1000);
        cy.get("#submit").click();
      });
    });
  });
});

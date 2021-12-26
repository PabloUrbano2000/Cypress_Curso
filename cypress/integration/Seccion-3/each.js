/// <reference types="Cypress" />

describe("Bucles For y each", () => {
  it("For uno", () => {
    for (let i = 1; i <= 10; i++ /*i=i+3*/) {
      cy.log(`numero: ${i}`);
    }
  });

  it("For dos", () => {
    for (let i = 1; i <= 10; i++) {
      let t = 5;
      cy.log(`${t} X ${i} = ${t * i}`);
    }
  });

  it("Each uno", () => {
    cy.visit("http://automationpractice.com/index.php");
    cy.title("My Store");
    cy.wait(1000);

    cy.get(".product-name").each(($el, index, $list) => {
      // cy.log(`$el: ${$el.text()} - index: ${index}`);
      // cy.log(`$list: ${$list.text()}`);
      let vestido = $el.text();
      cy.log(vestido);
    });
  });

  it("Each dos", () => {
    cy.visit("http://automationpractice.com/index.php");
    cy.title("My Store");
    cy.wait(1000);
    cy.get(".product-name").each(($el, index, $list) => {
      let vestido = $el.text();
      if (vestido.includes("Summer Dress")) {
        // wrap es propio de wrap
        cy.wrap($el).click();
      }
    });
  });

  it("Each tres", () => {
    cy.visit("http://automationpractice.com/index.php");
    cy.title("My Store");
    cy.wait(1000);

    for (let x = 0; x <= 3; x++) {
      cy.get("#center_column .product-name").eq(x).click({ force: true });
      // agregando la cantidad
      cy.get("#quantity_wanted").clear().type("2");
      // agregando al carrito
      cy.get("#add_to_cart > button").click();
      cy.wait(2000);
      // seleccionando botón continuar comprando
      cy.get("[title='Continue shopping']").should("be.visible").click();
      cy.wait(500);
      // volver al home
      cy.get("#columns > div.breadcrumb.clearfix > a.home").click();
      cy.wait(500);
    }
  });

  it.only("Each cuatro", () => {
    cy.visit("http://automationpractice.com/index.php");
    cy.title("My Store");
    cy.wait(1000);

    const datos = [];
    cy.get("#center_column .product-name")
      .each(($el, index, $array) => {
        datos[index] = $el.text();
        cy.log(datos.length);
      })
      .then(() => {
        for (let x = 0; x <= datos.length; x++) {
          cy.get("#center_column .product-name").eq(x).click({ force: true });
          // agregando la cantidad
          cy.get("#quantity_wanted").clear().type("2");
          // agregando al carrito
          cy.get("#add_to_cart > button").click();
          cy.wait(2000);
          // seleccionando botón continuar comprando
          cy.get("[title='Continue shopping']").should("be.visible").click();
          cy.wait(500);
          // volver al home
          cy.get("#columns > div.breadcrumb.clearfix > a.home").click();
          cy.wait(500);
        }
      });
  });
});

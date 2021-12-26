/// <reference types="Cypress" />

describe("asserts", () => {
  it("Assert contains", () => {
    cy.visit("http://automationpractice.com/index.php");
    cy.title("eq", "My Store");
    cy.wait(1000);

    // El contenido debe estar dentro del padre
    cy.get("#block_top_menu").contains("Women").click();
  });

  it("Assert find, eq, validando que el vestido es nuevo y el precio", () => {
    cy.visit("http://automationpractice.com/index.php");
    cy.title("eq", "My Store");
    cy.wait(1000);

    // Selecciona el primero
    // cy.get("#product-container").first().click();
    // Selecciona el elemento 0
    // Busco el elemento con Find()
    // Selecciono el elemento segun el orden del arreglo que se obtuvo con eq
    cy.get(".product-container").find(".product-image-container").eq(2).click();
    cy.wait(1500);
    cy.get("#product_condition .editable").then((e) => {
      let estado = e.text();
      estado === "New"
        ? cy.log("Es un vestido nuevo")
        : cy.log("No es un vestido nuevo");
    });
    cy.get("#our_price_display").then((e) => {
      let precio = e.text();
      precio = precio.slice(1, precio.length);
      if (precio > 30) {
        cy.log(`El vestido cuesta ${precio}, sale de nuestro presupuesto`);
      } else {
        cy.log(`El vestido cuesta ${precio}, está en nuestro presupuesto`);
        cy.get("#add_to_cart button").click();
        cy.wait(5000);
      }
    });
  });

  it("Assert contain.text y have.text", () => {
    cy.visit("https://demoqa.com/text-box");
    cy.title("eq", "ToolsQA");
    cy.wait(1000);

    const name = "Pablo";
    const email = "pablo@mail.com";

    cy.get("#userName").should("be.visible").type(name);
    cy.get("#userEmail").should("be.visible").type(email);
    cy.get("#submit").should("be.visible").click();
    cy.wait(2000);

    // valida el texto completo
    cy.get("#output").find("#name").should("have.text", `Name:${name}`);
    cy.get("#output").find("#email").should("have.text", `Email:${email}`);
    cy.wait(1500);

    // valida el trocito de texto
    cy.get("#output").find("#name").should("contain.text", name);
    cy.get("#output").find("#email").should("contain.text", email);
  });

  it("Assert have.value más then", () => {
    cy.visit("https://demoqa.com/text-box");
    cy.title("eq", "ToolsQA");
    cy.wait(1000);

    const name = "Pablo";
    const email = "pablo@mail.com";

    cy.get("#userName").should("be.visible").type(name);
    cy.get("#userName")
      // en los campos de tipo input su valor al no ser texto solido
      // se tiene que validar por value (valor)
      .should("have.value", name)
      .then(() => {
        cy.get("#userEmail").should("be.visible").type(email);
        cy.get("#submit").should("be.visible").click();
      });
  });

  it("Assert have.class", () => {
    cy.visit("https://demoqa.com/text-box");
    cy.title("eq", "ToolsQA");
    cy.wait(1000);

    const name = "Pablo";

    cy.get("#userName")
      .should("be.visible")
      // validando por clase
      .should("have.class", "mr-sm-2")
      .then(() => {
        cy.get("#userName").type(name);
      });
  });

  it("Assert have.class y la función and", () => {
    cy.visit("https://demoqa.com/text-box");
    cy.title("eq", "ToolsQA");
    cy.wait(1000);

    const name = "Pablo";

    cy.get("#userName")
      .should("be.visible")
      // validando por y
      // el and hace que se valide por ambas
      .and("have.class", "mr-sm-2")
      .then(() => {
        cy.get("#userName").type(name);
      });
  });
  it("Assert not.have.class", () => {
    cy.visit("https://demoqa.com/text-box");
    cy.title("eq", "ToolsQA");
    cy.wait(1000);

    const name = "Pablo";

    cy.get("#userName")
      .should("be.visible")
      // no tiene esta clase
      .and("not.have.class", "mr-sm-22")
      .then(() => {
        cy.get("#userName").type(name);
      });
  });

  it("Assert have.length y have.css", () => {
    cy.visit("https://demo.seleniumeasy.com/table-pagination-demo.html");
    cy.title("eq", "Selenium Easy - Table with Pagination Demo");
    cy.wait(1000);

    // have.length sirve para validar el numero de etiquetas que hay
    cy.get("#myTable > tr").should("have.length", 13);
    cy.get("#myTable > tr > td")
      .should("have.length", 91)
      // have.css valida que las etiquetas tengo cierto css
      .should("have.css", "padding", "8px");
  });

  it("Assert Contains", () => {
    cy.visit("https://demo.seleniumeasy.com/basic-first-form-demo.html");
    cy.title(
      "eq",
      "Selenium Easy Demo - Simple Form to Automate using Selenium"
    );
    cy.wait(1000);

    // Eliminando ventana
    cy.get("#at-cv-lightbox-close").should("be.visible").click();

    // seleccionando el input
    cy.get("#user-message").should("be.visible").type("Demo del contenido");
    cy.wait(1000);

    // buscamos con cierto contenido
    cy.contains("[type='button']", "Show Message")
      .should("be.visible")
      .click({ force: true });
  });

  it.only("Reto Asserts", () => {
    cy.visit("https://demo.seleniumeasy.com/basic-first-form-demo.html");
    cy.title(
      "eq",
      "Selenium Easy Demo - Simple Form to Automate using Selenium"
    );
    cy.wait(1000);
    // Eliminando ventana
    cy.get("#at-cv-lightbox-close").should("be.visible").click();

    // validando
    let a = 35;
    let b = 20;
    cy.get("#sum1")
      .should("be.visible")
      .and("have.class", "form-control")
      .type(a);

    cy.get("#sum2")
      .should("be.visible")
      .and("have.class", "form-control")
      .type(b);

    cy.contains("[type='button']", "Get Total").should("be.visible").click();
    cy.wait(1000);

    // capturando el valor
    cy.get("#displayvalue")
      .should("be.visible")
      .then((e) => {
        const suma = e.text();
        a + b === parseInt(suma)
          ? cy.log("la suma es correcta")
          : cy.log("la suma es incorrecta");

        if (suma > 50) {
          a = a - 10;
          b = b - 10;
          cy.get("#sum1")
            .invoke("attr", "placeholder")
            .should("contain", "Enter value")
            .then(() => {
              cy.get("#sum1").clear().type(a);
              cy.get("#sum1").invoke("attr", "style", "color:blue");
            });

          cy.wait(500);
          cy.get("#sum2")
            .should("be.visible")
            .and("have.class", "form-control")
            .clear()
            .type(b);
          cy.wait(500);
          cy.contains("[type='button']", "Get Total")
            .should("be.visible")
            .click();

          cy.get("#displayvalue")
            .should("be.visible")
            .then(() => {
              cy.get("#displayvalue").invoke("attr", "style", "color:red");
            });
        } else {
          a = a + 5;
          b = b + 5;
          cy.get("#sum1")
            .should("be.visible")
            .and("have.class", "form-control")
            .clear()
            .type(a);

          cy.wait(500);
          cy.get("#sum2")
            .should("be.visible")
            .and("have.class", "form-control")
            .clear()
            .type(b);

          cy.wait(500);
          cy.contains("[type='button']", "Get Total")
            .should("be.visible")
            .click();
        }
      });
  });
});

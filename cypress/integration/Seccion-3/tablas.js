/// <reference types="Cypress" />

describe("Elementos de una tabla", () => {
  it("CHILDREN", () => {
    cy.visit("https://demo.seleniumeasy.com/table-records-filter-demo.html");
    cy.title().should("eq", "Selenium Easy - Table Data Filter Demo");
    cy.wait(1000);

    cy.get(".btn-group")
      .children(".btn.btn-success.btn-filter")
      .should("contain", "Green")
      .click();

    cy.get(".btn-group")
      .children(".btn.btn-danger.btn-filter")
      .should("contain", "Red")
      .click();

    cy.wait(1000);
    cy.get(".btn-group")
      .children(".btn.btn-warning.btn-filter")
      .should("contain", "Orange")
      .click();
  });

  it("Seleccionar por medio de Eq", () => {
    cy.visit("https://demo.seleniumeasy.com/table-records-filter-demo.html");
    cy.title().should("eq", "Selenium Easy - Table Data Filter Demo");
    cy.wait(1000);

    cy.get("[type='button']").eq(1).should("contain", "Green").click();
    cy.wait(1000);
    cy.get("[type='button']").eq(3).should("contain", "Red").click();
  });

  it("Seleccionar por filter", () => {
    cy.visit("https://demo.seleniumeasy.com/table-records-filter-demo.html");
    cy.title().should("eq", "Selenium Easy - Table Data Filter Demo");
    cy.wait(1000);

    // FILTER BUSCA DENTRO DEL MISMO ELEMENTO
    // FILTER NO BUSCA DENTRO DEL PADRE
    cy.get("[type='button']")
      .filter(".btn-warning")
      .should("contain", "Orange")
      .click();
    cy.wait(1000);

    cy.get("[type='button']")
      .filter(".btn-success")
      .should("contain", "Green")
      .click();
  });

  it("Seleccionar por find", () => {
    cy.visit("https://demo.seleniumeasy.com/table-records-filter-demo.html");
    cy.title().should("eq", "Selenium Easy - Table Data Filter Demo");
    cy.wait(1000);

    // busca dentro un padre
    cy.get(".btn-group").find(".btn-danger").should("contain", "Red").click();
    cy.wait(1000);

    cy.get(".btn-group")
      .find("[data-target='pendiente']")
      .should("contain", "Orange")
      .click();
    cy.wait(1000);

    cy.get("[type='button']").contains("Orange").click();

    // find no busca por palabra, solo por atributos o clases o id
  });

  it("Seleccionar por first y last", () => {
    cy.visit("https://demo.seleniumeasy.com/table-records-filter-demo.html");
    cy.title().should("eq", "Selenium Easy - Table Data Filter Demo");
    cy.wait(1000);

    // funcion first para el primero
    cy.get(".btn-group").find("button").first().click({ force: true });
    cy.wait(1000);
    // funcion last para el ultimo
    cy.get(".btn-group").find("button").last().click({ force: true });
  });

  it("Seleccionar los elementos siguientes nextAll", () => {
    cy.visit("https://demo.seleniumeasy.com/table-records-filter-demo.html");
    cy.title().should("eq", "Selenium Easy - Table Data Filter Demo");
    cy.wait(1000);

    cy.get(".btn-group > [type='button']")
      .contains("Green")
      .click({ force: true });
    cy.wait(1000);
    // el nextAll sirve parar continuar con los siguientes
    // elementos partiendo de uno (ES UNA VALIDACION)
    cy.get(".btn-group > [type='button']").nextAll().should("have.length", 3);
  });

  it("Seleccionar el elemento padre", () => {
    cy.visit("https://demo.seleniumeasy.com/table-records-filter-demo.html");
    cy.title().should("eq", "Selenium Easy - Table Data Filter Demo");
    cy.wait(1000);

    cy.get(".btn-group > [type='button']")
      // con esto vamos al padre
      .parent()
      .should("have.class", "btn-group");
  });

  it("Reto tablas", () => {
    cy.visit("https://demo.seleniumeasy.com/table-records-filter-demo.html");
    cy.title().should("eq", "Selenium Easy - Table Data Filter Demo");
    cy.wait(1000);

    for (let x = 1; x <= 4; x++) {
      let textButton = "";
      switch (x) {
        case 1:
          textButton = "Green";
          break;
        case 2:
          textButton = "Orange";
          break;
        case 3:
          textButton = "Red";
          break;
        default:
          textButton = "All";
          break;
      }

      // dandole al boton según el texto
      cy.get(".btn-group > [type='button']")
        .contains(textButton)
        .should("be.visible")
        .click();

      // recorriendo todos los elementos
      let data = [];
      cy.get(".table-container .table.table-filter tbody tr")
        .each((el, index) => {
          data[index] = el;
        })
        .then(() => {
          cy.log(data.length);
          for (let i = 1; i <= data.length; i++) {
            // dandole check a todos
            cy.log(i);
            cy.get(`#checkbox${i}`).check({ force: true });
          }
        });

      cy.wait(1000);
    }
  });

  it("Mostrando los campos", () => {
    cy.visit("https://demo.seleniumeasy.com/table-sort-search-demo.html");
    cy.title().should("eq", "Selenium Easy - Tabel Sort and Search Demo");

    const datosOdd = [];
    cy.get(".odd td.sorting_1")
      .each(($el, index, $list) => {
        datosOdd[index] = $el.text();
      })
      .then(() => {
        for (let i = 0; i <= datosOdd.length; i++) {
          cy.log(datosOdd[i]);
        }
      });

    const datosEven = [];
    cy.get(".even td.sorting_1")
      .each(($el, index, $list) => {
        datosEven[index] = $el.text();
      })
      .then(() => {
        for (let i = 0; i <= datosEven.length; i++) {
          cy.log(datosEven[i]);
        }
      });
  });

  it("Sumando los valores de los campos con la clase .odd", () => {
    cy.visit("https://demo.seleniumeasy.com/table-sort-search-demo.html");
    cy.title().should("eq", "Selenium Easy - Tabel Sort and Search Demo");

    const datosOdd = [];
    let cantidadOdd = 0;
    // busca todos los elementos .odd
    cy.get(".odd")
      // recorrelos
      .each(($el, index, $list) => {
        // del elemento busca los td y manda el texto del tercer td
        datosOdd[index] = $el.find("td").eq(3).text();
      })
      .then(() => {
        for (let i = 0; i < datosOdd.length; i++) {
          cy.log(datosOdd[i]);
          cantidadOdd = cantidadOdd + parseFloat(datosOdd[i]);
        }

        // validando el resultado
        cy.log(`La suma es: ${cantidadOdd}`);

        // expectativa sirve para comprobar
        expect(cantidadOdd).eq(202);
      });
  });
  it("Sumando los valores de los campos que son numeros", () => {
    cy.visit("https://demo.seleniumeasy.com/table-sort-search-demo.html");
    cy.title().should("eq", "Selenium Easy - Tabel Sort and Search Demo");

    const datos = [];
    let cantidad = 0;
    // busca todos los elementos .odd
    cy.get("tbody tr[role='row']")
      // recorrelos
      .each(($el, index, $list) => {
        // del elemento busca los td y manda el texto del tercer td
        datos[index] = $el.find("td").eq(3).text();
      })
      .then(() => {
        for (let i = 0; i < datos.length; i++) {
          cantidad = cantidad + parseFloat(datos[i]);
        }

        // validando el resultado
        cy.log(`La suma es: ${cantidad}`);

        // expectativa sirve para comprobar
        expect(cantidad).eq(394);
      });
  });

  it.only("Valor de un campo en especifico", () => {
    cy.visit("https://demo.seleniumeasy.com/table-sort-search-demo.html");
    cy.title().should("eq", "Selenium Easy - Tabel Sort and Search Demo");

    const campo = cy.get("tbody > tr:nth-child(7) > td");

    // recorriendo las columnas de la fila
    campo.each(($el, index, $list) => {
      const dato = $el.text();
      cy.log(index, dato);

      if (dato.includes("Javascript Developer")) {
        campo
          // detecta el primer campo que dice Hurst
          .eq(index)
          // salta a la siguiente columna
          .next()
          // salta a la siguiente columna
          .next()
          .then((age) => {
            const Edad = age.text();
            cy.log("Le edad de Javascript Developer es: " + Edad);
            expect(Edad).eq("39");
          });
      }
      //    else {
      //     cy.log("No es el campo Javascript Developer");
      //   }
    });
  });
});

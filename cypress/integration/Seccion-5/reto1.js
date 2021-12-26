/// <reference types='Cypress' />

describe("Reto 1 Custom Hooks", () => {
  before(() => {
    cy.visit("https://demo.seleniumeasy.com/input-form-demo.html");
    cy.title().should("eq", "Selenium Easy - Input Form Demo with Validations");
  });

  it("Solucion 1 Custom Hook por separado (VALIDACION CORRECTA)", () => {
    cy.campo_visible("[name='first_name']", "Pablo", 500);
    cy.campo_visible("[name='last_name']", "Urbano", 500);
    cy.campo_visible("[name='email']", "pablojamiro@gmail.com", 500);
    cy.campo_visible("[name='phone']", "0959264465", 500);
    cy.campo_visible("[name='address']", "Los Olivos 345", 500);
    cy.campo_visible("[name='city']", "Lima", 500);
    cy.campo_visible_combo("[name='state']", "Arizona", 500);
    cy.campo_visible("[name='zip']", "0000", 500);
    cy.campo_visible(
      "[name='website']",
      "https://www.youtube.com/watch?v=D9mGXCTu2sM&list=LL&index=6",
      500
    );
    cy.campo_visible_check("input[type=radio][value='yes']", 500);
    cy.campo_visible("[name='comment']", "Es una prueba automatizada", 500);
    cy.campo_click("#contact_form button.btn.btn-default[type='submit']");
  });

  it("Solución en un solo bloque (Error en Correo)", () => {
    cy.bloque_SelemiumEasy_input_form(
      "Pablo",
      "Urbano",
      "@mail.com",
      "0000000000",
      "Mexico 2944",
      "Arequipa",
      "Colorado",
      "0101",
      "http://www.facso.ug.edu.ec/",
      false,
      "El proyecto no es de pruebas",
      500
    );
    // validando el mensaje de error
    cy.validar_campo(
      "[data-bv-validator='emailAddress']",
      "email",
      "Please supply a valid email address"
    );
  });

  it.only("Solución en un solo bloque (Error en Nombre y Apellido)", () => {
    cy.bloque_SelemiumEasy_input_form(
      "P",
      "U",
      "pablo@mail.com",
      "0000000000",
      "Mexico 2944",
      "Arequipa",
      "Colorado",
      "0101",
      "http://www.facso.ug.edu.ec/",
      false,
      "El proyecto no es de pruebas",
      0
    );
    // validando el mensaje de error
    cy.validar_campo(
      "[data-bv-validator='stringLength'][data-bv-for='first_name']",
      "Nombre",
      "Please enter more than 2 characters"
    );
    cy.validar_campo(
      "[data-bv-validator='stringLength'][data-bv-for='last_name']",
      "Apellido",
      "Please enter more than 2 characters"
    );
  });
});

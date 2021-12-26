/// <reference types='Cypress' />

import Proyecto1 from "../../support/pageObject/proyectoUno_PO/proyectoUno_PO";

describe("Page Objects Model", () => {
  const master = new Proyecto1();

  // Seccion de Error
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });

  master.visitHome();

  it("test uno", () => {
    master.seccionUno("P", "Urbano", "pablo@mail.com", 500);
    // validando el mensaje de error para nombre
    cy.validar_campo(
      "[data-bv-validator='stringLength'][data-bv-for='first_name']",
      "Nombre",
      "Please enter more than 2 characters"
    );

    // tomando un screenshot
    cy.screenshot();

    master.seccionDos("959264", "Los Olivos 239", "Lima", "Arizona", 500);

    cy.validar_campo(
      "[data-bv-validator='phone'][data-bv-for='phone']",
      "Telefono",
      "Please supply a vaild phone number with area code"
    );

    master.seccionTres("0000", "Pablo' Company", true, "Pablo El Maldy", 500);
    master.submitForm();
  });
});

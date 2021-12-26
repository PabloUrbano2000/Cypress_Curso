// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("campo_visible", (selector, texto, tiempo = 1000) => {
  cy.get(selector).should("be.visible").type(texto);
  cy.wait(tiempo);
});

Cypress.Commands.add(
  "campo_visible_xpath",
  (selector, texto, tiempo = 1000) => {
    cy.xpath(selector).should("be.visible").type(texto);
    cy.wait(tiempo);
  }
);

Cypress.Commands.add(
  "campo_visible_combo",
  (selector, valor, tiempo = 1000) => {
    cy.get(selector).should("be.visible").select(valor);
    cy.wait(tiempo);
  }
);

Cypress.Commands.add(
  "campo_visible_combo_xpath",
  (selector, valor, tiempo = 1000) => {
    cy.xpath(selector).should("be.visible").select(valor);
    cy.wait(tiempo);
  }
);

Cypress.Commands.add("campo_visible_check", (selector, tiempo = 1000) => {
  cy.get(selector).should("be.visible").check();
  cy.wait(tiempo);
});

Cypress.Commands.add("campo_visible_check_xpath", (selector, tiempo = 1000) => {
  cy.xpath(selector).should("be.visible").check();
  cy.wait(tiempo);
});

Cypress.Commands.add("campo_click", (selector, isForce, tiempo = 1000) => {
  cy.get(selector)
    .should("be.visible")
    .click(isForce ? { force: true } : { force: false });
  cy.wait(tiempo);
});

Cypress.Commands.add(
  "campo_click_xpath",
  (selector, isForce, tiempo = 1000) => {
    cy.get(selector)
      .should("be.visible")
      .click(isForce ? { force: true } : { force: false });
    cy.wait(tiempo);
  }
);

Cypress.Commands.add(
  "validar_campo",
  (selector, nombre, mensaje, tiempo = 1000) => {
    cy.get(selector)
      .should("be.visible")
      .then((value) => {
        const dato = value.text();
        cy.log("###################");
        if (dato === mensaje) {
          cy.log(`El ${nombre} no es válido: ${dato}`);
        } else {
          cy.log(`El ${nombre} no es válido y el mensaje de error tampoco`);
          cy.log(`Debe ser: ${mensaje}`);
        }
        cy.log("###################");
      });
    cy.wait(tiempo);
  }
);

// Funciones por conjunto o completas
// creando la función ToolsQA TEXT-BOX
Cypress.Commands.add(
  "bloque_ToolsQA_text_box",
  (name, email, dir1, dir2, tiempo = 1000, selector = []) => {
    cy.get(selector && selector[0] ? selector[0] : "#userName")
      .should("be.visible")
      .type(name);
    cy.wait(tiempo);
    cy.get(selector && selector[1] ? selector[1] : "#userEmail")
      .should("be.visible")
      .type(email);
    cy.wait(tiempo);
    cy.get(selector && selector[2] ? selector[2] : "#currentAddress")
      .should("be.visible")
      .type(dir1);
    cy.wait(tiempo);
    cy.get(selector && selector[3] ? selector[3] : "#permanentAddress")
      .should("be.visible")
      .type(dir2);
    cy.wait(tiempo);
    cy.get(selector && selector[4] ? selector[4] : "#submit")
      .should("be.visible")
      .click();
  }
);

Cypress.Commands.add(
  "bloque_SelemiumEasy_input_form",
  (
    firstname = "",
    lastname = "",
    email = "",
    phone = "",
    address = "",
    city = "",
    state = "",
    zip = "",
    website = "",
    hosting = "",
    comment = "",
    tiempo = 1000
  ) => {
    cy.campo_visible("[name='first_name']", firstname, tiempo);
    cy.campo_visible("[name='last_name']", lastname, tiempo);
    cy.campo_visible("[name='email']", email, tiempo);
    cy.campo_visible("[name='phone']", phone, tiempo);
    cy.campo_visible("[name='address']", address, tiempo);
    cy.campo_visible("[name='city']", city, tiempo);
    cy.campo_visible_combo("[name='state']", state, tiempo);
    cy.campo_visible("[name='zip']", zip, tiempo);
    cy.campo_visible("[name='website']", website, tiempo);
    cy.campo_visible_check(
      `input[type=radio][value=${hosting ? "yes" : "no"}]`,
      tiempo
    );
    cy.campo_visible("[name='comment']", comment, tiempo);
    cy.campo_click("#contact_form button.btn.btn-default[type='submit']");
  }
);

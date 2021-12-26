class proyectoUno_PO {
  tiempo = 500;
  visitHome() {
    before(() => {
      cy.visit("https://demo.seleniumeasy.com/input-form-demo.html");
      cy.title().should(
        "eq",
        "Selenium Easy - Input Form Demo with Validations"
      );
      cy.wait(this.tiempo);
    });
  }

  seccionUno(name, last_name, email, t = 1000) {
    cy.get("[name='first_name']").should("be.visible").clear().type(name);
    cy.wait(t);
    cy.get("[name='last_name']").should("be.visible").clear().type(last_name);
    cy.wait(t);
    cy.get("[name='email']").should("be.visible").clear().type(email);
    cy.wait(t);
  }

  seccionDos(phone, address, city, state, t = 1000) {
    cy.get("[name='phone']").should("be.visible").clear().type(phone);
    cy.wait(t);
    cy.get("[name='address']").should("be.visible").clear().type(address);
    cy.wait(t);
    cy.get("[name='city']").should("be.visible").clear().type(city);
    cy.wait(t);
    cy.get("[name='state']").should("be.visible").select(state);
    cy.wait(t);
  }

  seccionTres(zip, website, hosting = false, comment, t = 1000) {
    cy.get("[name='zip']").should("be.visible").clear().type(zip);
    cy.wait(t);
    cy.get("[name='website']").should("be.visible").clear().type(website);
    cy.wait(t);
    cy.get(`input[type=radio][value=${hosting ? "yes" : "no"}]`)
      .should("be.visible")
      .check();
    cy.get("[name='comment']").should("be.visible").clear().type(comment);
    cy.wait(t);
  }

  submitForm(t = 500) {
    cy.get("#contact_form button.btn.btn-default[type='submit']")
      .should("be.visible")
      .click();
    cy.wait(t);
  }
} // FINAL

export default proyectoUno_PO;

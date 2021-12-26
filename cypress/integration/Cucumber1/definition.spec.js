Given("Abrir el navegador principal", () => {
  cy.visit("https://demoqa.com/text-box");
});

When("Cargando el nombre {string}", (nombre) => {
  cy.get("#userName").should("be.visible").type(nombre);
  cy.wait(500);
});

When("Cargando el email {string}", (email) => {
  cy.get("#userEmail").should("be.visible").type(email);
  cy.wait(500);
});

And("Cargando la dirección {string}", (direccion) => {
  cy.get("#currentAddress").should("be.visible").type(direccion);
  cy.wait(500);
});

And("Cargando la dirección permanente {string}", (direccionPer) => {
  cy.get("#permanentAddress").should("be.visible").type(direccionPer);
  cy.wait(500);
});

And("Click en Button", () => {
  cy.get("#submit").should("be.visible").click();
  cy.wait(500);
});

Then("Validar el nombre de la Página", () => {
  cy.title().should("eq", "ToolsQA");
});

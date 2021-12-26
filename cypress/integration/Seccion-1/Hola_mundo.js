describe("Bienvenido al curso de Cypress sección 1", () => {
  it("Mi primer test -> Hola mundo", () => {
    cy.log("Hola Mundo");

    // darle tiempo
    cy.wait(1500);
  });

  it("Segundo test -> campo name", () => {
    // que pagina voy a visitar
    cy.visit("https://demoqa.com/text-box");

    // apuntar a un elemento y luego escribe
    cy.get("#userName").type("Pablo");
    cy.wait(3000);
  });
}); // Cierre de describe

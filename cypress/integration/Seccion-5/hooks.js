/// <reference types='Cypress' />

describe("Hooks", () => {
  before(() => {
    cy.log("################ Principio de todo ###############");
  });

  beforeEach(() => {
    cy.wait(1000);
    cy.log("Esto se repite en cada uno de los test muy importante");
  });

  afterEach(() => {
    cy.log("Esto se hace al final de todos los tests");
  });

  after(() => {
    cy.log("################ Final de todo ###############");
  });

  it("test 1", () => {
    cy.log("Empezó el test 1");
  });

  it("test 2", () => {
    cy.log("Empezó el test 2");
  });
});

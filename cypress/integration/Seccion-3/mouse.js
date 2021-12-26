/// <reference types="Cypress" />

describe("cypress eventos Mouse", () => {
  let tiempo = 1000;
  it("Drag and drop 1", () => {
    cy.visit("http://the-internet.herokuapp.com/drag_and_drop");
    cy.title("eq", "The Internet");

    cy.wait(2000);

    cy.get("#column-a").drag("#column-b");
    cy.wait(2000);
  });

  it("Drag and drop 2", () => {
    cy.visit("http://demo.seleniumeasy.com/drag-and-drop-demo.html");
    cy.title("eq", "Selenium Easy Demo - Drag and Drop Demo");
    cy.wait(tiempo);

    cy.get("#todrag > span:nth-child(2)").drag("#mydropzone");
    cy.wait(2000);
    cy.get("#todrag > span:nth-child(3)").drag("#mydropzone");
    cy.wait(2000);
    cy.get("#todrag > span:nth-child(4)").drag("#mydropzone");
    cy.wait(2000);
    cy.get("#todrag > span:nth-child(5)").drag("#mydropzone");
  });

  it("Mouse Over", () => {
    cy.visit("https://www.way2automation.com/");
    cy.title(
      "eq",
      "Online Selenium Certification Course | Selenium Online Training | Selenium Tutorial"
    );
    cy.wait(tiempo);
    // antes era
    // cy.get("....").trigger("mouseover");
    // AHORA CON UNA LIBRERIA
    cy.get("#menu-item-27580 > a").realHover("mouse");
    cy.wait(500);
    cy.get("#menu-item-27582 > a").realHover("mouse");
    cy.wait(500);
    cy.get("#menu-item-27583 > a").click();
  });

  it.only("Drag and drop slider", () => {
    cy.visit("http://demo.seleniumeasy.com/drag-drop-range-sliders-demo.html");
    cy.title("eq", "Selenium Easy - Drag and Drop Range Sliders ");
    cy.wait(tiempo);

    cy.get("#slider1 > div > input[type=range]").invoke("attr", "value", "80");
    cy.wait(500);
    cy.get("#slider3 > div > input[type=range]").invoke("attr", "value", "90");
    cy.wait(500);
    cy.get("#slider5 > div > input[type=range]").invoke("attr", "value", "20");
  });
});

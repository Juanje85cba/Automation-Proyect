///<reference types="cypress" />
import headerLocators from "../pages/header.js";

describe("example to-do app", () => {
  beforeEach(() => {
    cy.visit("https://tienda.claro.com.ar/"); //ingresa a la tienda
  });

  it("Test Visual", () => {
    const buscador = new headerLocators();

    buscador.getIconSerch().should("have.css", "font-size", "16px");
  });
});

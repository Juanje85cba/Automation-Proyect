///<reference types="cypress" />
import headerLocators from "../pages/header.js";
import bodyLocator from "../pages/body.js";

describe("example to-do app", () => {
  beforeEach(() => {
    cy.visit("https://tienda.claro.com.ar/"); //ingresa a la tienda
  });

  it("Buscar Equipo", () => {
    const buscador = new headerLocators();
    const bLocators = new bodyLocator();

    buscador.getIconSerch().click(); //
    buscador.getBuscarEquipo().click(); //
    buscador.getBuscarEquipo().type("Samsung Galaxy A03 Core"); //
    buscador.getBuscarEquipo().type("{enter}"); //

    bLocators.getSelectEquipo().should("contain", "Samsung Galaxy A03 Core"); //
    bLocators.getModeloEquipo().click(); //
  });
});

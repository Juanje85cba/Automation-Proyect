///<reference types="cypress" />
import loguinLocator from "../pages/loguinOrange.js";
import dataUser from "../fixtures/users.json";

describe("Loguin", () => {
  beforeEach(() => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"); //ingresa a la web
  });

  it("Logueo de usuario OK", () => {
    const loguin = new loguinLocator();
    let usuario1 = dataUser.users[0];

    loguin.getUserName().click();
    loguin.getUserName().type(dataUser.users[0].user1);
    loguin.getPassword().click();
    loguin.getPassword().type(dataUser.users[0].password1); 
    loguin.getBtnLoguin().click();
  });
});


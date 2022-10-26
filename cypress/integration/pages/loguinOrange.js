class loguinLocators {
  constructor() {
    this.userName = "input[name='username']";
    this.password = "input[name='password']";
    this.btnLoguin = ".oxd-button";
  }
}

export default class loguinLocator {
  constructor() {
    this.logLocators = new loguinLocators();
  }

  getUserName() {
    return cy.get(this.logLocators.userName);
  }

  getPassword() {
    return cy.get(this.logLocators.password);
  }

  getBtnLoguin() {
    return cy.get(this.logLocators.btnLoguin)
  }
}

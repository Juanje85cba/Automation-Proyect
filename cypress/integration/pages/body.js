class bodyLocators {
  constructor() {
    this.selectEquipo = ".productListingWidget";
    this.modeloEquipo = "#CatalogEntryViewDetailsLink_119454";
  }
}

export default class bodyLocator {
  constructor() {
    this.bLocators = new bodyLocators();
  }

  getSelectEquipo() {
    return cy.get(this.bLocators.selectEquipo);
  }

  getModeloEquipo() {
    return cy.get(this.bLocators.modeloEquipo);
  }
}

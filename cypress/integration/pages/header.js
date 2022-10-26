class headerLocators {
  constructor() {
    this.iconSerch = "#search-white";
    this.buscadorEquipos = "#SimpleSearchForm_SearchTerm";
    //this.selectEquipo = ".productListingWidget";
    //this.modeloEquipo = "#CatalogEntryViewDetailsLink_119454";
  }
}

export default class headerLocator {
  constructor() {
    this.locators = new headerLocators();
  }

  getIconSerch() {
    return cy.get(this.locators.iconSerch);
  }

  getBuscarEquipo() {
    return cy.get(this.locators.buscadorEquipos);
  }
}

/// <reference types="cypress" />

import AutomationStore_HairCare_PO from "../../support/pageObjects/automation-test-store/AutomationStore_HairCare_PO";
import AutomationStore_Homepage_PO from "../../support/pageObjects/automation-test-store/AutomationStore_Homepage_PO";

describe("Add multiple items to basket", () => {

  const automation_homepage = new AutomationStore_Homepage_PO;
  const automation_haircare = new AutomationStore_HairCare_PO;

  beforeEach(function () {
    cy.fixture("products").then(function (data) {
      globalThis.data = data;
    });
    // cy.visit("https://automationteststore.com/");
    // cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
    automation_homepage.visitHomePage();
    automation_homepage.clickOn_HairCare_Link();
  });

  it("Add specific items to basket", () => {

    // globalThis.data.productName.forEach(element => {
    //   cy.addProductToBasket(element);
    // })
    automation_haircare.addHairCareProductToBasket();
  });
});

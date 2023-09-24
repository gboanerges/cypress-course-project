class AutomationStore_Homepage_PO {

    visitHomePage() {

        cy.visit("https://automationteststore.com/");
    }

    clickOn_HairCare_Link() {

        cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
    }
}

export default AutomationStore_Homepage_PO;
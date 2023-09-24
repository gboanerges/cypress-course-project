class AutomationStore_HairCare_PO {

    addHairCareProductToBasket() {
        globalThis.data.productName.forEach(element => {
            cy.addProductToBasket(element);
        })
        cy.get('.dropdown-toggle > .fa').click();
    }
}

export default AutomationStore_HairCare_PO;
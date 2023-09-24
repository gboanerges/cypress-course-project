/// <reference types="cypress" />

describe("Verifying radiobuttons via WebDriverUni", () => {
    beforeEach(function () {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({ force: true })
    });

    it("Check specific radiobuttons", () => {
        cy.get('#radio-buttons').find("[type='radio']").first().check();
        cy.get('#radio-buttons').find("[type='radio']").eq(1).check();
        cy.log("Test 1")
    });
    it("Validate states of radiobuttons", () => {
        cy.get("[value='lettuce']").should('not.be.checked');
        cy.get("[value='cabbage']").should('not.be.checked').should('be.disabled');
        cy.get("[value='pumpkin']").should('be.checked');
    });
})
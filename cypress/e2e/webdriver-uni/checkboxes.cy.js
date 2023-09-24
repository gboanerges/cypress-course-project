/// <reference types="cypress" />

describe("Verifying checkboxes via WebDriverUni", () => {
    beforeEach(() => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({ force: true })
    })

    it("Validate checkbox", () => {
        // cy.get('#checkboxes > :nth-child(1) > input').check().should('be.checked');

        cy.get('#checkboxes > :nth-child(1) > input').as('option-1');
        cy.get('@option-1').check();
        cy.get('@option-1').uncheck().should('not.be.checked');
    });

    it("Validate uncheck the 3rd checkbox", () => {
        // cy.get('#checkboxes > :nth-child(1) > input').check().should('be.checked');

        cy.get('#checkboxes > :nth-child(5) > input').as('option-3');
        cy.get('@option-3').check().should('be.checked');
        cy.get('@option-3').uncheck().should('not.be.checked');
    });

    it("Check/Uncheck multiple options at once", () => {
        // cy.get('#checkboxes > :nth-child(1) > input').check().should('be.checked');

        cy.get("input[type='checkbox']").as('options');
        cy.get('@options').check(["option-1", "option-2", "option-3", "option-4"]).should('be.checked');
    });
})
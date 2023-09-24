/// <reference types="Cypress"/>

describe('Cypress web security', () => {
    it('Validate visiting two different domains', () => {

        cy.visit('http://www.webdriveruniversity.com/');
        cy.visit('https://automationteststore.com/');

        cy.origin('https://automationteststore.com/', () => {
            cy.get("a[href*='automationteststore'");
        });
    });

    it('Validate visiting two different domains via user actions', () => {
        cy.visit('http://www.webdriveruniversity.com/');
        cy.get('#automation-test-store').invoke('removeAttr', 'target').click();
    });
});
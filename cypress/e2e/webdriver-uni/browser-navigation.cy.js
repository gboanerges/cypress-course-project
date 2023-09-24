/// <reference types="cypress" />

describe("Validate WebDriverUni homepage links", () => {

    it("Confirm links redirect to the correct pages", () => {
        cy.visit('http://www.webdriveruniversity.com/');
        cy.get('#contact-us').invoke('removeAttr', 'target').click({ force: true });

        cy.url().should('include', 'contactus');
        cy.go('back');
        cy.url().should('include', 'webdriveruniversity.com');

        cy.reload();
        cy.go('forward');
        cy.url().should('include', 'contactus');

        cy.go('back');
        cy.get('#login-portal').invoke('removeAttr', 'target').click({ force: true });
        cy.url().should('include', 'Login-Portal');
    });

    it.only('ToDo list', () => {
        cy.visit('http://www.webdriveruniversity.com/');
        cy.get('#to-do-list').invoke('removeAttr', 'target').click({ force: true });
        cy.url().should('include', 'To-Do-List');
        cy.go('back');

    });
})
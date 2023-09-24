/// <reference types="cypress" />

describe("Validate javascript alerts", () => {

    it("Confirm first javascript alert contains correct text", () => {
        cy.visit('http://www.webdriveruniversity.com/');
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({ force: true });

        cy.get('#button1').click();
        cy.on('window:alert', (str) => {
            expect(str).to.equal('I am an alert box!');
        });
    });

    it.only("Validate javascript confirm box OK", () => {
        cy.visit('http://www.webdriveruniversity.com/');
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({ force: true });
        // Cypress clicked on the OK button by default
        cy.get('#button4').click();
        cy.on('window:alert', (str) => {
            return true;
        });
        cy.get('#confirm-alert-text').contains('You pressed OK!');
    });

    it("Validate javascript confirm box CANCEL", () => {
        cy.visit('http://www.webdriveruniversity.com/');
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({ force: true });
        // Cypress clicked on the OK button by default
        cy.get('#button4').click();
        cy.on('window:confirm', (str) => {
            return false;
        });
        cy.get('#confirm-alert-text').contains('You pressed Cancel!');
    });

    it.only("Validate javascript using STUBS", () => {
        cy.visit('http://www.webdriveruniversity.com/');
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({ force: true });

        const stub = cy.stub();
        cy.on('window:confirm', stub);
        cy.get('#button4').click()
            .then(() => {
                expect(stub.getCall(0)).to.be.calledWith('Press a button!');
            })
            .then(() => {
                return true;
            })
            .then(() => {
                cy.get('#confirm-alert-text').contains('You pressed OK!');
            });


    });
});
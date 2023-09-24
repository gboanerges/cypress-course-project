/// <reference types="cypress" />

describe("Mouse actions via WebDriverUni", () => {
    it("Scroll element into view", () => {
        cy.visit("http://www.webdriveruniversity.com");
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({ force: true });
    });

    it("I should be able to drag and drop element", () => {
        cy.visit("http://www.webdriveruniversity.com");
        cy.get('#actions').invoke('removeAttr', 'target').click({ force: true });

        cy.get('#draggable').trigger('mousedown', { which: 1 });

        cy.get('#droppable').trigger('mousemove').trigger('mouseup', { force: true });
    });

    it("I should be able to perform a double click", () => {
        cy.visit("http://www.webdriveruniversity.com");
        cy.get('#actions').invoke('removeAttr', 'target').click({ force: true });

        cy.get('#double-click').dblclick().should('have.css', 'background-color', 'rgb(147, 203, 90)');
    });

    it("I should be able to hold down the left mouse click", () => {
        cy.visit("http://www.webdriveruniversity.com");
        cy.get('#actions').invoke('removeAttr', 'target').click({ force: true });

        cy.get('#click-box').trigger('mousedown', { which: 1 }).then(($element) => {

            expect($element).to.have.css('background-color', 'rgb(0, 255, 0)');

        });
    });
})
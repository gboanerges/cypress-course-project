/// <reference types="Cypress" />

describe('Test Contact-Us via Automation Test Store', () => {

    it('Should complete submission', () => {
        cy.visit('https://automationteststore.com/');
        // cy.get('.info_links_footer > :nth-child(5) > a').click();
        // cy.xpath('//a[contains(@href, "contact")]').click();
        cy.get("a[href$='contact']").click().then((itemHeaderText) => {
            cy.log("Text of selected item: " + itemHeaderText.text())
        });
        cy.get('#ContactUsFrm_first_name').type('Joe Doe');
        cy.get('#ContactUsFrm_email').type('test@test.com');
        cy.get('#ContactUsFrm_email').should('have.attr', 'name', 'email');
        cy.get('#ContactUsFrm_enquiry').type('Any other discounts?');
        // cy.get('.col-md-6 > .btn').click();
        cy.get("button[title='Submit']").click();
        cy.get('.mb40 > :nth-child(3)').should('have.text', 'Your enquiry has been successfully sent to the store owner!');
    });
});
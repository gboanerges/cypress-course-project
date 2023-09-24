/// <reference types="cypress" />

describe("Test Contact Ust form via WebDriverUni", () => {
    beforeEach(function () {
        // Variable
        cy.fixture('example.json').then(function (data) {
            globalThis.data = data;
        });
        // Alias 
        cy.fixture("userDetails").as("user");
        cy.visit(Cypress.env("webdriveruni_homepage") + "/Contact-Us/contactus.html");
    })

    it("Should be able to submit a successful submission via contact us form", () => {
        // cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html');
        // cy.visit('http://www.webdriveruniversity.com/');
        // cy.get('#contact-us').invoke('removeAttr', 'target').click({ force: true });

        cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
        cy.title().should('include', 'WebDriver | Contact Us');
        cy.url().should('include', 'Contact-Us/contactus.html');

        cy.webdriverUni_ContactFrom_Submission(Cypress.env("first_name"), data.last_name, data.email, "Type this inside text area", 'h1', 'Thank You for your Message!');

    });

    it("Should NOT be able to submit a a successful submission via contact us form", () => {
        // cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html');
        // cy.visit('http://www.webdriveruniversity.com/');
        // cy.get('#contact-us').invoke('removeAttr', 'target').click({ force: true });

        // cy.get("@user").then((user) => {

        //     cy.get('[name="first_name"]').type(user.first_name);
        //     cy.get('[name="last_name"]').type(user.email);
        // })
        // cy.get('textarea.feedback-input').type('Testing type wrong form submission');
        // cy.get('[type="submit"]').click();
        // cy.get('body').should('have.text', '\n\n\n Error: all fields are required\n Error: Invalid email address\n\n\n')
        cy.webdriverUni_ContactFrom_Submission(data.first_name, data.last_name, " ", "Unsuccessful submission", 'body', '\n\n\n Error: Invalid email address\n\n\n');
    });
})
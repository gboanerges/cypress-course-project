/// <reference types="cypress" />

import Homepage_PO from "../../support/pageObjects/webdriver-uni/Homepage_PO";
import ContactUs_PO
    from "../../support/pageObjects/webdriver-uni/ContactUs_PO";

describe("Test Contact Ust form via WebDriverUni", () => {
    const contactUs_Page = new ContactUs_PO();

    beforeEach(function () {
        // Variable
        cy.fixture('example.json').then(function (data) {
            globalThis.data = data;
        });
        // Alias 
        cy.fixture("userDetails").as("user");
        // cy.visit(Cypress.env("webdriveruni_homepage") + "/Contact-Us/contactus.html");
        const homepage_PO = new Homepage_PO();
        homepage_PO.visitHomepage();
        homepage_PO.clickOn_ContactUs_Button();
    })

    it("Should be able to submit a successful submission via contact us form", () => {

        cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
        cy.title().should('include', 'WebDriver | Contact Us');
        cy.url().should('include', 'Contact-Us/contactus.html');

        // cy.webdriverUni_ContactFrom_Submission(Cypress.env("first_name"), data.last_name, data.email, "Type this inside text area", 'h1', 'Thank You for your Message!');
        contactUs_Page.contactForm_Submission(Cypress.env("first_name"), data.last_name, data.email, "Type this inside text area", 'h1', 'Thank You for your Message!');
    });

    it("Should NOT be able to submit a a successful submission via contact us form", () => {

        contactUs_Page.contactForm_Submission(data.first_name, data.last_name, " ", "Unsuccessful submission", 'body', '\n\n\n Error: Invalid email address\n\n\n');
    });
})
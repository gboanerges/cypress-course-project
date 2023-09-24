class ContactUs_PO {

    contactForm_Submission(first_name, last_name, email, comment, $selector, textToLocate) {
        cy.get('[name="first_name"]').type(first_name);
        cy.get('[name="last_name"]').type(last_name);
        cy.get('[name="email"]').type(email);
        cy.get('textarea.feedback-input').type(comment);
        cy.get('[type="submit"]').click();
        cy.get($selector)
            .should('have.text', textToLocate)
    }
}

export default ContactUs_PO;
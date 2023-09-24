/// <reference types="Cypress" />
describe("Handling data via WebDriverUni", () => {
    beforeEach(() => {
        cy.visit("http://webdriveruniversity.com/");
        cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
    });

    it("Calculate and assert the total age of all users", () => {
        var userDetails = [];
        let numb = 0;
        cy.get('#thumbnail-1 td').each(($el, index, $list) => {
            userDetails[index] = $el.text();
        }).then(() => {
            var i;
            userDetails.forEach(element => {
                if (Number(element)) {
                    numb += Number(element);
                    cy.log(element, numb);
                }
            });
        })
    });

    it('Calculate and assert the age of a given user based on last name', () => {
        cy.get('#thumbnail-1 tr td:nth-child(2)').each(($el, index, $list) => {
            if ($el.text() == 'Woods') {
                cy.log(index);
                cy.get('#thumbnail-1 tr td:nth-child(2)').eq(index).next().then(function (age) {
                    const userAge = age.text();
                    expect(userAge).to.equal('80');

                });
            }
        });
    });

});

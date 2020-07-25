describe('This is my first test!', () => {
    it('Should return true', () => {
        expect(true).to.equal(true);
    });
});

describe('Testing pizza inputs', () => {

    beforeEach(function () {
        cy.visit('http://localhost:3001/pizza');

    });

    it('Input Name into the Name Input', () => {
        //arrange - get the element
        //act - mimic user interaction
        //assert - test/verify
        cy.get('input[name="name"]')
            .type('Ali G')
            .should('have.value', 'Ali G');

        cy.get('form').submit();

        cy.get('button')
        .click()

        cy.get('input[type="checkbox"]')
            .check()
            .should('be checked');
    });
});
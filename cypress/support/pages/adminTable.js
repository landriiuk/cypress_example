Cypress.Commands.add('addUser', () => {
    cy.get('.bi-plus').click()
});

Cypress.Commands.add('verifyThatUserIsNotCreated', (username) => {
    cy.get('.oxd-table-card .oxd-table-row').should('not.contain', username);
});

Cypress.Commands.add('verifyIfUserHasBeenCreated', (username) => {
    cy.get('.oxd-table-card .oxd-table-row').should('contain', username);
});

Cypress.Commands.add('verifyThatUserCreationFormIsOpened', () => {
    cy.get('.orangehrm-card-container').should("be.visible").and("have.length", 1);
});


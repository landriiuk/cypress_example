Cypress.Commands.add('login', (username, password) => {
    cy.get('[name="username"]', { timeout: 100500 }).type(username);
    cy.get('[name="password"]').type(password);
    cy.get('[type="submit"]').click();
});



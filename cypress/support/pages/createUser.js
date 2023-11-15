Cypress.Commands.add('fillUserNameField', () => {
    cy.get('.oxd-input').eq(1);
});

Cypress.Commands.add('fillAddUserForm', (role, status, password, employeeName, userName, confirmPassword = password) => {
    cy.get('.orangehrm-card-container').within(() => {
        cy.get('.oxd-select-text-input').first().click();
        cy.wait(1000);
        cy.get(`.oxd-select-dropdown > :contains(${role})`, { timeout: 100500 }).click();
        cy.get('.oxd-select-text-input').last().click();
        cy.get(`.oxd-select-dropdown > :contains(${status})`, { timeout: 100500 }).click();
        cy.get('[type="password"]').first().clear().type(password);
        cy.get('[placeholder="Type for hints..."]').type(employeeName);
        cy.get('.oxd-autocomplete-option span', { timeout: 100500 }).first().click();
        cy.get('.oxd-input').eq(0).type(userName);
        cy.get('[type="password"]').last().type(confirmPassword);
    })
});

Cypress.Commands.add('clickOnSaveButton', () => {
    cy.get('button:contains( Cancel )').click()
});

Cypress.Commands.add('clickOnCancelButton', () => {
    cy.get('button:contains( Cancel )').click();
});

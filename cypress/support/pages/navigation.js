Cypress.Commands.add('navigateToSectionFromMenu', (pageName) => {
    cy.get('.oxd-main-menu-item--name').contains(pageName).click();
})
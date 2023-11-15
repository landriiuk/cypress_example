import { invalidUserData, url, validUserData } from '../testData/testData';

describe('Admin page', () => {

    beforeEach('Login and navigate to the Admin section', () => {
        cy.clearAllCookies();
        cy.clearAllSessionStorage();
        cy.clearAllLocalStorage();
        cy.visit(url.login);
        cy.login(Cypress.env('username'), Cypress.env('password'));
        cy.url().should('include', url.dashboard);
    })

    it('Verify that user can click on Admin Section', () => {
        cy.navigateToSectionFromMenu('Admin');
        cy.url().should('include', url.admin_view_users);
    })

    context('Create user', () => {
        beforeEach('Navigate to the Admin section', () => {
            cy.navigateToSectionFromMenu('Admin');
            cy.url().should('include', url.admin_view_users);
        })

        it.only('Verify that user can be created with valid data', () => {
            // XXX failed
            cy.addUser();
            cy.verifyThatUserCreationFormIsOpened();
            cy.fillAddUserForm(validUserData.role, validUserData.status, validUserData.password, validUserData.employeeName, validUserData.userName);
            cy.clickOnSaveButton();
            cy.verifyIfUserHasBeenCreated(validUserData.userName);
        })

        it('Verify that user can not be created, after clicking cancel button', () => {
            cy.addUser();
            cy.verifyThatUserCreationFormIsOpened();
            cy.fillUserNameField(invalidUserData.userName);
            cy.clickOnCancelButton();
            cy.verifyThatUserIsNotCreated(invalidUserData.userName);
        })
    })

})
import { AdminPage } from '../pages/adminPage';
import { BasePage } from '../pages/basePage';
import { LoginPage } from '../pages/loginPage';
import { invalidUserData, url, validUserData } from '../testData/testData';

describe('Admin page', () => {
    let loginPage = new LoginPage();
    let basePage = new BasePage();
    let adminPage = new AdminPage();

    beforeEach('Login and navigate to the Admin section', () => {
        cy.clearAllCookies();
        cy.clearAllSessionStorage();
        cy.clearAllLocalStorage();
        basePage.navigateTo(url.login);
        loginPage.performLogin(Cypress.env('username'), Cypress.env('password'));
        loginPage.verifyIfUserIsLoggedIn(url.dashboard);
    })

    it('Verify that user can click on Admin Section', () => {
        basePage.navigateToSectionFromMenu('Admin');
        basePage.verifyThatUserHasBeenNavigatedTo(url.admin_view_users);
    })

    context('Create user', () => {
        beforeEach('Navigate to the Admin section', () => {
            basePage.navigateToSectionFromMenu('Admin');
            basePage.verifyThatUserHasBeenNavigatedTo(url.admin_view_users);
        })

        it('Verify that user can be created with valid data', () => {
            // XXX failed
            adminPage.clickOnCreateUser();
            adminPage.verifyThatUserCreationFormIsOpened();
            adminPage.fillAddUserForm(validUserData.role, validUserData.status, validUserData.password, validUserData.employeeName, validUserData.userName);
            adminPage.clickOnSaveButton();
            adminPage.verifyIfUserHasBeenCreated(validUserData.userName);
        })

        it.only('Verify that user can not be created, after clicking cancel button', () => {
            adminPage.clickOnCreateUser();
            adminPage.verifyThatUserCreationFormIsOpened();
            adminPage.fillUserNameField(invalidUserData.userName);
            adminPage.clickOnCancelButton();
            adminPage.verifyThatUserIsNotCreated(invalidUserData.userName);
        })
    })

})
import { clickOnCancelButton, clickOnCreateUser, clickOnSaveButton, fillAddUserForm, fillUserNameField, verifyIfUserHasBeenCreated, verifyThatUserCreationFormIsOpened, verifyThatUserIsNotCreated } from '../modules/admin';
import { performLogin } from '../modules/login';
import { navigateTo, navigateToSectionFromMenu, verifyThatUserHasBeenNavigatedTo } from '../modules/navigation';
import { invalidUserData, url, validUserData } from '../testData/testData';

describe('Admin page', () => {

    beforeEach('Login and navigate to the Admin section', () => {
        cy.clearAllCookies();
        cy.clearAllSessionStorage();
        cy.clearAllLocalStorage();
        navigateTo(url.login);
        performLogin(Cypress.env('username'), Cypress.env('password'));
        verifyThatUserHasBeenNavigatedTo(url.dashboard);
    })

    it('Verify that user can click on Admin Section', () => {
        navigateToSectionFromMenu('Admin');
        verifyThatUserHasBeenNavigatedTo(url.admin_view_users);
    })

    context('Create user', () => {
        beforeEach('Navigate to the Admin section, click on create user', () => {
            navigateToSectionFromMenu('Admin');
            verifyThatUserHasBeenNavigatedTo(url.admin_view_users);
            clickOnCreateUser();
            verifyThatUserCreationFormIsOpened();
        })

        it('Verify that user can be created with valid data', () => {
            // XXX failed
            fillAddUserForm(validUserData.role, validUserData.status, validUserData.password, validUserData.employeeName, validUserData.userName);
            clickOnSaveButton();
            verifyIfUserHasBeenCreated(validUserData.userName);
        })

        it('Verify that user can not be created, after clicking cancel button', () => {
            fillUserNameField(invalidUserData.userName);
            clickOnCancelButton();
            verifyThatUserIsNotCreated(invalidUserData.userName);
        })
    })

})
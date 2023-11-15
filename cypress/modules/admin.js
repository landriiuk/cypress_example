import { AdminPage } from '../pages/adminPage';

const adminPage = new AdminPage();

export function clickOnCreateUser() {
    adminPage.addUserButton().click();
}

export function verifyThatUserCreationFormIsOpened() {
    adminPage.addUserContainer().should("be.visible").and("have.length", 1);
}

export function fillUserNameField(userName) {
    adminPage.userNameInput(1).type(userName);
}

export function fillAddUserForm(role, status, password, employeeName, userName, confirmPassword = password) {
    adminPage.addUserContainer().within(() => {
        adminPage.dropdownAddUser().first().click();
        cy.wait(1000);
        adminPage.getOptionFromUserDropdown(role).click();
        adminPage.dropdownAddUser().last().click();
        adminPage.getOptionFromUserDropdown(status).click();
        adminPage.passwordInput().first().clear().type(password);
        adminPage.employeeNameInput().type(employeeName);
        adminPage.selectEmployee().click();
        adminPage.userNameInput(0).type(userName);
        adminPage.passwordInput().last().type(confirmPassword);
    })
}

export function clickOnSaveButton() {
    adminPage.saveButton().click();
}

export function clickOnCancelButton() {
    adminPage.cancelButton().click();
}

export function verifyIfUserHasBeenCreated(username) {
    adminPage.getRowFromTable().should('contain', username);
}

export function verifyThatUserIsNotCreated(username) {
    adminPage.getRowFromTable().should('not.contain', username);
}

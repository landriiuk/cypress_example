export class AdminPage {

    #createUserSelectors = {
        addUserButton: (() => cy.get('.bi-plus')),
        addUserContainer: (() => cy.get('.orangehrm-card-container')),
        dropdownAddUser: (() => cy.get('.oxd-select-text-input')),
        getOptionFromUserDropdown: (optionName => cy.get(`.oxd-select-dropdown > :contains(${optionName})`, { timeout: 100500 })),
        passwordInput: (() => cy.get('[type="password"]')),
        employeeNameInput: (() => cy.get('[placeholder="Type for hints..."]')),
        selectEmployee: (() => cy.get('.oxd-autocomplete-option span', { timeout: 100500 }).first()),
        userNameInput: (index => cy.get('.oxd-input').eq(index)),
        saveButton: (() => cy.get('button:contains( Save )')),
        cancelButton: (() => cy.get('button:contains( Cancel )')),
        getRowFromTable: (() => cy.get('.oxd-table-card .oxd-table-row'))
    }

    clickOnCreateUser() {
        this.#createUserSelectors.addUserButton().click();
    }

    verifyThatUserCreationFormIsOpened() {
        this.#createUserSelectors.addUserContainer().should("be.visible").and("have.length", 1);
    }

    fillUserNameField(userName) {
        this.#createUserSelectors.userNameInput(1).type(userName);
    }

    fillAddUserForm(role, status, password, employeeName, userName, confirmPassword = password) {
        this.#createUserSelectors.addUserContainer().within(() => {
            this.#createUserSelectors.dropdownAddUser().first().click();
            cy.wait(1000);
            this.#createUserSelectors.getOptionFromUserDropdown(role).click();
            this.#createUserSelectors.dropdownAddUser().last().click();
            this.#createUserSelectors.getOptionFromUserDropdown(status).click();
            this.#createUserSelectors.passwordInput().first().clear().type(password);
            this.#createUserSelectors.employeeNameInput().type(employeeName);
            this.#createUserSelectors.selectEmployee().click();
            this.#createUserSelectors.userNameInput(0).type(userName);
            this.#createUserSelectors.passwordInput().last().type(confirmPassword);
        })
    }

    clickOnSaveButton() {
        this.#createUserSelectors.saveButton().click();
    }

    clickOnCancelButton() {
        this.#createUserSelectors.cancelButton().click();
    }

    verifyIfUserHasBeenCreated(username) {
        this.#createUserSelectors.getRowFromTable().should('contain', username);
    }

    verifyThatUserIsNotCreated(username) {
        this.#createUserSelectors.getRowFromTable().should('not.contain', username);
    }

}

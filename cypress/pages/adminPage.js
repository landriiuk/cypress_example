export class AdminPage {

    addUserButton() {
        return cy.get('.bi-plus');
    }

    addUserContainer() {
        return cy.get('.orangehrm-card-container');
    }

    dropdownAddUser() {
        return cy.get('.oxd-select-text-input');
    }

    getOptionFromUserDropdown(optionName) {
        return cy.get(`.oxd-select-dropdown > :contains(${optionName})`, { timeout: 100500 });
    }

    passwordInput() {
        return cy.get('[type="password"]');
    }

    employeeNameInput() {
        return cy.get('[placeholder="Type for hints..."]');
    }

    selectEmployee() {
        return cy.get('.oxd-autocomplete-option span', { timeout: 100500 }).first();
    }

    userNameInput(index) {
        return cy.get('.oxd-input').eq(index);
    }

    saveButton() {
        return cy.get('button:contains( Save )');
    }

    cancelButton() {
        return cy.get('button:contains( Cancel )');
    }

    getRowFromTable() {
        return cy.get('.oxd-table-card .oxd-table-row');
    }

}

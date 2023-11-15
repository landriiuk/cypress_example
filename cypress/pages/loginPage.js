export class LoginPage {

    usernameInput() {
        return cy.get('[name="username"]', { timeout: 100500 });
    }

    passwordInput() {
        return cy.get('[name="password"]');
    }

    loginButton() {
        return cy.get('[type="submit"]');
    }
}
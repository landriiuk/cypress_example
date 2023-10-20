export class LoginPage {
  #loginSelectors = {
    usernameInput: () => cy.get('[name="username"]'),
    passwordInput: () => cy.get('[name="password"]'),
    loginButton: () => cy.get('[type="submit"]')
  };

  performLogin(username, password) {
    this.#loginSelectors.usernameInput().type(username);
    this.#loginSelectors.passwordInput().type(password);
    this.#loginSelectors.loginButton().click();
  }

  verifyIfUserIsLoggedIn(endpoint) {
    cy.url().should("include", endpoint);
  }
}

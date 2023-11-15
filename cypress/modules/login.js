const { LoginPage } = require('../pages/loginPage');

let loginPage = new LoginPage();

export function performLogin(username, password) {
    loginPage.usernameInput().type(username);
    loginPage.passwordInput().type(password);
    loginPage.loginButton().click();
}

import { BasePage } from '../pages/basePage';
import { LoginPage } from '../pages/loginPage';
import { url } from '../testData/testData';

describe('Login into application with valid credentials', () => {
  let loginPage = new LoginPage();
  let basePage = new BasePage();

  beforeEach(() => {
    basePage.navigateTo(url.login);
  })

  it('Login and verify if user is logged in', () => {
    loginPage.performLogin(Cypress.env('username'), Cypress.env('password'));
    loginPage.verifyIfUserIsLoggedIn(url.dashboard);
  })
})
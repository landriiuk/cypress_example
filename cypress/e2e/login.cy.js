import { LoginPage } from '../pages/loginPage';
import { url } from '../testData/testData';

describe('Login into application with valid credentials', () => {
  let loginPage = new LoginPage();

  beforeEach(() => {
    cy.visit(url.login);
  })

  it('Login and verify if user is logged in', () => {
    loginPage.performLogin(Cypress.env('username'), Cypress.env('password'));
    loginPage.verifyIfUserIsLoggedIn(url.dashboard);
  })
})
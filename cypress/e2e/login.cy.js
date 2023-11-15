import { performLogin } from '../modules/login';
import { navigateTo, verifyThatUserHasBeenNavigatedTo } from '../modules/navigation';
import { url } from '../testData/testData';

describe('Login into application with valid credentials', () => {

  beforeEach(() => {
    navigateTo(url.login);
  })

  it('Login and verify if user is logged in', () => {
    performLogin(Cypress.env('username'), Cypress.env('password'));
    verifyThatUserHasBeenNavigatedTo(url.dashboard);
  })

})
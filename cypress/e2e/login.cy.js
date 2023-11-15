import { url } from '../testData/testData';

describe('Login into application with valid credentials', () => {

  beforeEach(() => {
    cy.visit(url.login);
  })

  it('Login and verify if user is logged in', () => {
    cy.login(Cypress.env('username'), Cypress.env('password'));
    cy.url().should('include', url.dashboard);
  })
  
})
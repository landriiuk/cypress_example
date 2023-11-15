/// <reference types="cypress" />

import './commands'
import './pages/login'
import './pages/navigation'
import './pages/adminTable'
import './pages/createUser'

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})
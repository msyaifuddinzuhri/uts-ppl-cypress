/// <reference types="cypress" />

describe('TC_DETAIL - 1941720013 - Mochammad Syaifuddin Zuhri', () => {

    beforeEach(() => {
        // Go to Login Page
        cy.visit('/')
        
        // Action
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
    })


})
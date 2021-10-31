/// <reference types="cypress" />

describe('TC_CHECKOUT - 1941720044 - Naily Ikmalul Insiyah',() => {

    beforeEach(() => {
        // Visit saucedemo page
        cy.visit('/')

        // Fill login form
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()

        // Visit checkout form
        cy.get('#shopping_cart_container').click()
        cy.get('#checkout').click()
    })

    
    it('1. Enter true first name, true last name, and true Zip/portal code at checkout form', () => {
        
        // Fill out checkout form 
        cy.get('#first-name').type('Naily')
        cy.get('#last-name').type('Ikmalul Insiyah')
        cy.get('#postal-code').type('Sauce Labs Backpack')

        // Submit form
        cy.get('#continue').click()

        // Expected Result
        cy.get('#finish').click() 
        cy.get('#back-to-products').click()
    })

    it('2. Enter empty first name, true last name, and true Zip/portal code at checkout form', () => {
        
        // Fill out the checkout form where first name is blank
        cy.get('#last-name').type('Ikmalul Insiyah')
        cy.get('#postal-code').type('Sauce Labs Backpack')

        // Submit form
        cy.get('#continue').click()

        // Expected Result
        cy.contains('Error')
    })

    it('3. Enter true first name, empty last name, and true Zip/portal code at checkout form', () => {
        
        // Fill out the checkout form where last name is blank
        cy.get('#first-name').type('Ikmalul Insiyah')
        cy.get('#postal-code').type('Sauce Labs Backpack')

        // Submit form
        cy.get('#continue').click()

        // Expected Result
        cy.contains('Error')
    })

    it('4. Enter true first name, empty last name and Zip/portal code at checkout form', () => {
        
        // Fill out the checkout form where last name and Zip are blank
        cy.get('#first-name').type('Ikmalul Insiyah')

        // Submit form
        cy.get('#continue').click()

        // Expected Result
        cy.contains('Error')
    })

    it('5. Enter true first name, empty last name and Zip/portal code at checkout form', () => {
        
        // fill out the checkout form where all fields are blank

        // Submit form
        cy.get('#continue').click()

        // Expected Result
        cy.contains('Error')
    })
})
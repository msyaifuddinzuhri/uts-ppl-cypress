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

    // Test Scenario 1
    it('1. Handle click the container product box', () => {

        // Get First ProductBox to the example
        const productBox = cy.get('.inventory_item').first()
        productBox.click();

        // Assertion then product box click is redirect to detail product page
        cy.contains('[class="btn btn_secondary back btn_large inventory_details_back_button"]', 'Back to products').should('be.visible')
    })


})
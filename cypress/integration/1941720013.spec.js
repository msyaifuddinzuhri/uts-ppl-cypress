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

    // Test Scenario 2
    it('2. Handle click the photo product box', () => {

        // Get First Photo Product Box to the example
        const photoProductBox = cy.get('.inventory_item_img').first()
        photoProductBox.click();

        // Assertion then product box click is redirect to detail product page
        cy.contains('[class="btn btn_secondary back btn_large inventory_details_back_button"]', 'Back to products').should('be.visible')
    })

    // Test Scenario 3
    it('3. Display product detail data', () => {

        // Get First Photo Product Box to the example
        const photoProductBox = cy.get('.inventory_item_img').first()
        photoProductBox.click();

        // Assertion detail product data
        cy.contains('[class="inventory_details_name large_size"]', 'Sauce Labs Backpack').should('be.visible')
        cy.contains('[class="inventory_details_desc large_size"]', 'carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.').should('be.visible')
        cy.contains('[class="inventory_details_price"]', '$29.99').should('be.visible')
        cy.contains('[class="btn btn_primary btn_small btn_inventory"]', 'Add to cart').should('be.visible')
        cy.get('[class="inventory_details_img_container"]').find('.inventory_details_img').should('be.visible')
    })
    

})
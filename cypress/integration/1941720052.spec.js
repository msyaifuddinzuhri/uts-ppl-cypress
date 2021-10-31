/// <reference types="cypress" />

describe('TC_CART - 1941720052 - Luluk Mufida', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
    })

    // Test Scenario 1
    it('1. Button Add Cart', () => {
        const btnAddCart = cy.get('[class="btn btn_primary btn_small btn_inventory"]').first()
        btnAddCart.contains('Add to cart').click()
        
        cy.get('[class="btn btn_secondary btn_small btn_inventory"]').first().should('have.text', 'Remove')
    })
    
    // Test Scenario 2
    it('2. Button Remove Cart', () => {
        const btnAddCart = cy.get('[class="btn btn_primary btn_small btn_inventory"]').first()
        btnAddCart.contains('Add to cart').click()
        const btnRemoveCart = cy.get('[class="btn btn_secondary btn_small btn_inventory"]').first()
        btnRemoveCart.contains('Remove').click()
        
        cy.get('[class="btn btn_primary btn_small btn_inventory"]').first().should('have.text', 'Add to cart')
    })
    
    // Test Scenario 3
    it('3. Cart button', () => {
        cy.get('[class="btn btn_primary btn_small btn_inventory"]').first().click()
        cy.get('[class="shopping_cart_link"]').click()
        
        cy.url().should('eq', 'https://www.saucedemo.com/cart.html')
    })

    // Test Scenario 4
    it('4. Back to continue shopping', () => {
        cy.get('[class="btn btn_primary btn_small btn_inventory"]').first().click()
        cy.get('[class="shopping_cart_link"]').click()
        
        cy.get('[class="btn btn_secondary back btn_medium"]').click()
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
    })

    // Test Scenario 5
    it('5. Cart button', () => {
        cy.get('[id="react-burger-menu-btn"]').click()
        cy.get('[id="reset_sidebar_link"]').click()
    })
})
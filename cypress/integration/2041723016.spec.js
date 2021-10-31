/// <reference types="cypress" />

describe('TC_SHOW - 2041723016 - Farel Putra Hdayat', () => {
    beforeEach(() => {
        // Go to Login Page
        cy.visit('/')
        
        // Test Scenario 5
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
    })

    // Test Scenario 1
    it('1. Filter By Name A to Z', () => {
        cy.get('select[class="product_sort_container"]').select('az')
    })

    // Test Scenario 2
    it('2. Filter By Name Z to A', () => {
        cy.get('select[class="product_sort_container"]').select('za')
    })

    // Test Scenario 3
    it('3. Filter By Price Low to High', () => {
        cy.get('select[class="product_sort_container"]').select('lohi')
    })

    // Test Scenario 4
    it('3. Filter By Price High to Low', () => {
        cy.get('select[class="product_sort_container"]').select('hilo')
    })
})
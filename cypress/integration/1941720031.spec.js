{/* <reference types="cypress" /> */ }


describe('TC LOGIN - Muhammad Auful Kirom - 1941720031', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it("Test Login Standard User", () => {
        cy.get('#user-name')
            .type('standard_user')
            .should('have.value', 'standard_user')

        cy.get('#password')
            .type('secret_sauce')
            .should('have.value', 'secret_sauce')

        cy.get('#login-button')
            .click()


        cy.url().should('include', 'inventory.html')
        cy.contains('Sauce Labs Backpack').should('be.visible')
        cy.get('.inventory_list').find('img').should('have.attr', 'src').should('include', 'sauce-backpack-1200x1500.34e7aa42.jpg')
    })

    it("Test Login Locked User", () => {

        cy.get('#user-name')
            .type('locked_out_user')
            .should('have.value', 'locked_out_user')

        cy.get('#password')
            .type('secret_sauce')
            .should('have.value', 'secret_sauce')

        cy.get('#login-button')
            .click()


        cy.contains('Epic sadface: Sorry, this user has been locked out.').should('be.visible')

    })

    it("Test Login Problem User", () => {

        cy.get('#user-name')
            .type('problem_user')
            .should('have.value', 'problem_user')

        cy.get('#password')
            .type('secret_sauce')
            .should('have.value', 'secret_sauce')

        cy.get('#login-button')
            .click()


        cy.url().should('include', 'inventory.html')
        cy.contains('Sauce Labs Backpack').should('be.visible')
        cy.get('.inventory_list').find('img').should('have.attr', 'src').should('include', '/static/media/sl-404.168b1cce.jpg')
    })


    it("Test Login Performance Glitch User", () => {

        cy.get('#user-name')
            .type('performance_glitch_user')
            .should('have.value', 'performance_glitch_user')

        cy.get('#password')
            .type('secret_sauce')
            .should('have.value', 'secret_sauce')

        cy.get('#login-button')
            .click()


        cy.url().should('include', 'inventory.html')
        cy.contains('Sauce Labs Backpack').should('be.visible')
        cy.get('.inventory_list').find('img').should('have.attr', 'src').should('include', 'sauce-backpack-1200x1500.34e7aa42.jpg')
    })

    it("Test Login Empty User", () => {



        cy.get('#login-button')
            .click()


        cy.contains('Epic sadface: Username is required').should('be.visible')
    })
})

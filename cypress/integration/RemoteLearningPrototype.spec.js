describe('Validate user is able to view remote learning prototype', function () {
    this.beforeEach(function () {
        cy.visit('https://remote-learning-prototype.london.cloudapps.digital/', {
            auth: { username: 'remote', password: 'learning' }
        })
    })

    it('Validate the user is able to launch remote learning prototype portal', function () {
        cy.get('.govuk-heading-xl').should('exist')
        cy.get('.govuk-grid-column-two-thirds > :nth-child(2) > .govuk-link').should('exist')
        cy.get('.govuk-footer__meta-item').should('exist')
        cy.get(':nth-child(8) > .govuk-link').should('exist')

    })

    it('Validate the system is navigating to next page if user clicks on Teaching during coronavirus (COVID-19) link', function () {
        cy.get('.govuk-grid-column-two-thirds > :nth-child(2) > .govuk-link').click()
        cy.get('.govuk-heading-xl').should('exist')
        cy.get('#a-guide-for-teachers-and-leaders').should('exist')
        cy.get('.govuk-footer__licence-description').should('exist')

    })
    it('Validate the system is navigating home page back if user clicks home page link', function () {
        cy.get('.govuk-grid-column-two-thirds > :nth-child(2) > .govuk-link').click()
        cy.get('.govuk-breadcrumbs__link').click()
        cy.get('.govuk-heading-xl').should('exist')
        cy.get('.govuk-grid-column-two-thirds > :nth-child(2) > .govuk-link').should('exist')
        cy.get('.govuk-footer__meta-item').should('exist')
        cy.get(':nth-child(8) > .govuk-link').should('exist')        
    })
    it('Validate the system is navigating next page if user clicks on Supporting your children\'s learning during coronavirus (COVID-19) link', function () {
        cy.get(':nth-child(5) > .govuk-link').click() 
        cy.get('.govuk-heading-xl').should('exist') 
        cy.get('.gem-c-govspeak > :nth-child(1)').should('exist') 
        cy.get('.govuk-footer__meta').should('exist')
    })

})
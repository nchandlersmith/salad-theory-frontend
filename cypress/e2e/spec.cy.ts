describe('salad theory', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  it('should have a link to the salad theory document', () => {
    cy
        .contains('A food entropy calculator inspired by this work.')
        .should('have.attr', 'href', 'https://saladtheory.github.io/')
  })
})
describe('salad theory', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  it('should have a link to the salad theory document', () => {
    cy
      .contains('A food entropy calculator inspired by this work.')
      .should('have.attr', 'href', 'https://saladtheory.github.io/')
  })
  it('should have a number of ingredients input', () => {
    cy
      .contains('Number of Ingredients')
      .parent()
      .type('5')
  })
  it('should have a number of unique ingredients input', () => {
    cy
      .contains('Number of Unique Ingredients')
      .parent()
      .type('2')
  })
  it('should display the ingredient entropy', () => {
    cy
      .contains('Ingredient Entropy')
  })
})
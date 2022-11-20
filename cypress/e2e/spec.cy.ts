describe('salad theory', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  describe('header', () => {
    it('should have a link to the salad theory document', () => {
      cy
        .contains('Inspired by this post')
        .should('have.attr', 'href', 'https://saladtheory.github.io/')
    })
  })
  describe('calculate ingredient entropy', () => {
    it('should calculate the ingredient entropy', () => {
      cy.inputByLabel('Number of Ingredients', '5')
      cy.inputByLabel('Number of Unique Ingredients', '2')
      cy.verifyInputEqualsByLabel(/^Ingredient Entropy$/, '4.64')
    })
    it('should show empty fields when I land on the page', () => {
      cy.verifyInputEqualsByLabel(/^Number of Ingredients$/, ' ')
      cy.verifyInputEqualsByLabel(/^Number of Unique Ingredients$/, ' ')
      cy.verifyInputEqualsByLabel(/^Ingredient Entropy$/, ' ')
    })

  })
})
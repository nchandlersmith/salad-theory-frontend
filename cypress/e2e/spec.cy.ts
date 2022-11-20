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
    it ('should have a form title', () => {
      cy.contains('Calculate Ingredient Entropy')
    })
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
  describe('food', () => {
    it('should have a form title', () => {
      cy.contains(/^Food$/)
    })
    it('should have a name input', () => {
      cy.inputByLabel('Name', 'Hamburger')
    })
    describe('recipe', () => {
      it('should have a title', () => {
        cy.contains(/^Recipe$/)
      })
      it('should have an ingredient', () => {
        cy.inputByLabel('Ingredient Name', 'Bun')
      })
      it('should have an ingredient', () => {
        cy.inputByLabel('Unit', 'Each')
      })
      it('should have a quantity', () => {
        cy.inputByLabel('Quantity', '2')
      })
    })
  })
})
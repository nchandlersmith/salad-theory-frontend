import {wait} from "@testing-library/user-event/dist/utils";

describe('salad theory', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  it('should have a link to the salad theory document', () => {
    cy
      .contains('Inspired by this post')
      .should('have.attr', 'href', 'https://saladtheory.github.io/')
  })
  it('should calculate the ingredient entropy', () => {
    cy
    .contains('Number of Ingredients')
    .parent()
    .type('5', {delay: 100})
    cy
    .contains('Number of Unique Ingredients')
    .parent()
    .type('2')
    cy
      .contains(/^Ingredient Entropy$/)
      .parent()
      .find('input')
      .invoke('val')
      .then(value => {
        expect(value).to.eq('4.64')
      })
  })
  it('should show empty fields when I land on the page', () => {
    cy
      .contains(/^Number of Ingredients$/)
      .parent()
      .find('input')
      .invoke('val')
      .then(value => {
        expect(value).to.eq(' ')
      })
    cy
      .contains(/^Number of Unique Ingredients$/)
      .parent()
      .find('input')
      .invoke('val')
      .then(value => {
        expect(value).to.eq(' ')
      })
    cy
      .contains(/^Ingredient Entropy$/)
      .parent()
      .find('input')
      .invoke('val')
      .then(value => {
        expect(value).to.eq(' ')
      })
  })
})
describe('vanilla create react app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  it('should have edit and save', () => {
    cy.contains("Edit")
    cy.contains("and save to reload.")
  })
  it('should have a link to learn more', () => {
    cy.contains('Learn React')
        .invoke('attr', 'href')
        .should('eq', 'https://reactjs.org')
  })
})
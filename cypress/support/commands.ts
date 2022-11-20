/// <reference types="cypress" />

Cypress.Commands.add('inputByLabel',
  (labelText, value) => {
    cy
      .contains(labelText)
      .parent()
      .type(value)
  })

Cypress.Commands.add('verifyInputEqualsByLabel',
  (labelText, expectedValue) => {
    cy
      .contains(labelText)
      .parent()
      .find('input')
      .invoke('val')
      .then(actualValue => {
        expect(actualValue).to.eq(expectedValue)
      })
  })

declare namespace Cypress {
  interface Chainable {
    inputByLabel(labelText: string, value: string): Chainable<void>,
    verifyInputEqualsByLabel(labelText: string | RegExp, expectedValue: string): Chainable<void>
  }
}
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

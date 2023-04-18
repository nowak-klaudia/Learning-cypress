/// <reference types="cypress" />


describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('https://wordlegame.org/?seed=20230418')
    
  })

  it('czy jest 6 wierszy i 30 okienek do wpisywania', () => {
    // We use the `cy.get()` command to get all elements that match the selector.
    // Then, we use `should` to assert that there are two matched items,
    // which are the two default items.
    cy.get('div.Row').should('have.length', 6)
    cy.get('div.Row-letter').should('have.length', 30)
  })

  it('czy klawiatura posiada klawisz q', () => {
    cy.get('div.Game-keyboard-button')
        .should('have.length', 28)
        .first()
        .should('have.text', 'q')
  })

  it('czy da się wpisać podwójnie to samo słowo', () => {
    cy.get('div.Game-keyboard-button').contains('g').click()
    cy.get('div.Game-keyboard-button').contains('h').click()
    cy.get('div.Game-keyboard-button').contains('o').click()
    cy.get('div.Game-keyboard-button').contains('s').click()
    cy.get('div.Game-keyboard-button').contains('t').click()
    cy.get('div.Game-keyboard-button').contains('Enter').click()
    cy.get('div.Game-keyboard-button').contains('g').click()
    cy.get('div.Game-keyboard-button').contains('h').click()
    cy.get('div.Game-keyboard-button').contains('o').click()
    cy.get('div.Game-keyboard-button').contains('s').click()
    cy.get('div.Game-keyboard-button').contains('t').click()
    cy.get('div.Game-keyboard-button').contains('Enter').click()
  })
})

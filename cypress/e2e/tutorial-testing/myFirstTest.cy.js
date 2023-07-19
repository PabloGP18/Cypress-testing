// These are render-based tests to ensure that elements are showing up on the page.

context('My first test', () => {
  // 'beforeEach' saves you from typing the same command repeatedly.
  beforeEach(() => {
    cy.visit('http://example.cypress.io/commands/actions')
  })

  // Use the 'get' command to find all 'h1' elements on the page.
  it('has an h1 on the page', () => {
    // Assert that an 'h1' element exists.
    cy.get('h1').should('exist')
  })

  // Assert that the 'h1' element contains the correct text.
  it('renders the correct h1 text', () => {
    cy.get('h1').should('contain.text', 'Actions')
  })

  // Assert that a paragraph exists under the 'h1' element.
  it('renders a paragraph under the h1', () => {
    // Change the scope to get a specific element, then find a single 'p' element and check if it exists.
    cy.get('.container').eq(1).find('p').should('exist')
  })

  // Assert that a section contains the correct elements.
  it('renders a section with the correct elements', () => {
    // Change the scope to run a series of tests within a specific container element.
    cy.get('.container')
      .eq(2)
      .within(() => {
        cy.get('h4').should('exist') // Assert that an 'h4' element exists.
        cy.get('p').should('exist') // Assert that a 'p' element exists.
      })
  })
})

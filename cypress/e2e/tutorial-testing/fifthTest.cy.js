// This test is to identify and use common Cypress assertions
// To understand when assertions happen by default

it('shows an active class for the current page', () => {
  // Visit the '/commands/actions' page
  cy.visit('/commands/actions')

  // Perform a positive assertion
  // Check if the third <li> element within '.dropdown-menu' has the class 'active'
  cy.get('.dropdown-menu').find('li').eq(2).should('have.class', 'active')
})

it('should not have an active class on inactive pages', () => {
  // Visit the '/commands/actions' page
  cy.visit('/commands/actions')

  // Perform a negative assertion
  // Check if any <li> element within '.dropdown-menu' has the class 'class' (which doesn't exist)
  cy.get('.dropdown-menu').find('li').should('not.have.class', 'class')
})

it('should not have an active class on inactive pages and have attribute with href and then with link /commands/querying', () => {
  // Visit the '/commands/actions' page
  cy.visit('/commands/actions')

  // Perform multiple assertions
  // Check if any <li> element within '.dropdown-menu' does not have the class 'class'
  // Then find the <a> element within that <li> element and check if it has the 'href' attribute equal to '/commands/querying'
  cy.get('.dropdown-menu')
    .find('li')
    .should('not.have.class', 'class')
    .find('a')
    .should('have.attr', 'href', '/commands/querying')
})

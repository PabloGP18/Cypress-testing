// Understand how hooks can minimize boilerplate
// Use the four common Cypress hooks in a test suite:
// - before: runs one time before all tests start
// - beforeEach: runs before each individual test
// - after: runs one time after all tests are finished
// - afterEach: runs after each individual test

// some context: In this test suite, the hooks are used to perform certain actions or assertions before or after the tests.
// The before hook checks the API, the beforeEach hook visits a page before each test,
// the afterEach hook logs a message after each test,
// and the after hook logs a final message after all tests are done. The two tests within the context then perform their respective assertions.

context('Testing all hooks', () => {
  // The 'before' hook checks that the API is working and returning a list of 10 missions
  before(() => {
    cy.request('https://api.spacexdata.com/v3/missions')
      .its('body')
      .should('have.length', 10)
  })

  // The 'beforeEach' hook runs the 'cy.visit' command before each test
  beforeEach(() => {
    cy.visit('/')
  })

  // The 'afterEach' hook runs after each test
  afterEach(() => {
    cy.log('After each hook is here')
  })

  // The 'after' hook runs once after all the tests are done
  after(() => {
    cy.log('The final after hook runs once')
  })

  it('has an h1 on the page', () => {
    // Perform an assertion that checks if an <h1> element exists on the page
    cy.get('h1').should('exist')
  })

  it('renders the correct h1 text', () => {
    // Perform an assertion that checks if the <h1> element contains the expected text 'Kitchen Sink'
    cy.get('h1').should('contain.text', 'Kitchen Sink')
  })
})

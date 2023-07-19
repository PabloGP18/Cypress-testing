// Understand how hooks can minimize boilerplate
// use the four common cypress hooks in a test suite:
// - before: runs one time before all tests start
// - beforeEach: runs before each individual test
// - after: runs one time after all tests are finished
// - afterEach: runs after each individual test

context('Testing all hooks', () => {
  // this will check BEFORE any of the test runs it will check that the api is working and its returning a list of 10 missions
  before(() => {
    cy.request('https://api.spacexdata.com/v3/missions')
      .its('body')
      .should('have.length', 10)
  })

  // BEFOREEACH will run the cy.visit every time a test runs
  beforeEach(() => {
    cy.visit('/')
  })

  // AFTEREACH will run after every test
  afterEach(() => {
    cy.log('After each hook is here')
  })

  // AFTER will run once after all the tests are done
  after(() => {
    cy.log('The final after hook runs once')
  })

  it('has an h1 on the page', () => {
    cy.get('h1').should('exist')
  })

  it('renders the correct h1 text', () => {
    cy.get('h1').should('contain.text', 'Kitchen Sink')
  })
})

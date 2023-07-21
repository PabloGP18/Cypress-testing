// Understanding how to set up and import fixtures
// Write a test that uses stubbed data

// In this test suite, the beforeEach hook is used to load the fixture data and assign it to this.
// Data for later use. The first test uses the loaded fixture data as a response in a network request by stubbing the request using cy.
// Intercept. The second test simply logs the loaded fixture data. The third test modifies the fixture data by updating the email property. The purpose of these tests is to demonstrate how to set up and import fixture data, as well as how to use it in network requests and manipulate it as needed.

context('Testing with fixtures', () => {
  beforeEach(() => {
    // Load the fixture data and assign it to 'this.data' for later use
    cy.fixture('example').then(function (data) {
      this.data = data
      cy.log('this:', this.data)
    })
  })

  // Test that uses fixture data in a network request
  it('uses fixture data in a network request', function () {
    cy.visit('/commands/network-requests')
    // Stub a network request and use the fixture data as the response
    cy.intercept('GET', '**/comments/*', this.data).as('getComment')
    cy.get('.network-btn').click()
    cy.wait('@getComment').then((res) => {
      cy.log('Response:', res)
    })
  })

  // Test that pulls data from a fixture
  it('pulls data from a fixture', () => {
    // Load the fixture data and log it
    cy.fixture('example').then((data) => {
      cy.log('data:', data)
    })
  })

  // Test that updates fixture data inline
  it('updates fixture data inline', () => {
    // Load the fixture data and modify it
    cy.fixture('example').then((data) => {
      data.email = 'updated@email.com'
      cy.log('updated:', data)
    })
  })
})

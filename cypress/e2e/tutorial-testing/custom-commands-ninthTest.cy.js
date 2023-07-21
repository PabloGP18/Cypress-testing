// Differentiate between adding and overwriting commands
// Understand when to use custom commands vs. using existing commands

// In summary, he test cases inside the context demonstrate the usage of custom Cypress commands 'setLocalStorage' and 'getLocalStorage' to interact with the local storage.
// The last test case shows how to overwrite the 'type' command to replace sensitive text with asterisks (*) when simulating user input.

// Define a variable to store a sample token for testing
const token = 'abcd123'

// Define a test context to group related tests
context('Testing with custom commands', () => {
  // Set up a beforeEach hook to run before each test in this context
  beforeEach(() => {
    // Load the fixture data from the 'example.json' file
    // and assign it to 'this.data' for later use in the tests
    cy.fixture('example').then(function (data) {
      this.data = data
      // Log the loaded data to the Cypress console for debugging purposes
      cy.log('this:', this.data)
    })
  })

  // Test case to demonstrate setting and getting data from local storage
  it('sets and gets a token from local storage', () => {
    // Set the 'token' in the local storage using a custom Cypress command 'setLocalStorage'
    cy.setLocalStorage('token', token)

    // Retrieve the 'token' from the local storage using a custom Cypress command 'getLocalStorage'
    // and assert that the retrieved token is equal to the token we set
    cy.getLocalStorage('token').should('eq', token)
  })

  // Test case to demonstrate overwriting the 'type' command with sensitive characters
  it('overwrites the type command by using sensitive characters', () => {
    // Visit the '/commands/actions' page
    cy.visit('/commands/actions')

    // Use the 'type' command to simulate typing an email address in the 'Email' input field
    cy.findByPlaceholderText('Email').type('test@email.com')

    // Use the 'type' command again to simulate typing the same email address,
    // but this time, set the 'sensitive' option to 'true'
    // This custom 'type' command implementation should hide the actual typed text and replace it with '*'
    cy.findByPlaceholderText('Email').type('test@email.com', {
      sensitive: true
    })
  })
})

// Differentiate between adding and overwriting commands
// Understand when to use custom commands vs. using existing commands

const token = 'abcd123'

context('Testing with custom commands', () => {
  beforeEach(() => {
    // Load the fixture data and assign it to 'this.data' for later use
    cy.fixture('example').then(function (data) {
      this.data = data
      cy.log('this:', this.data)
    })
  })

  it('sets and gets a token from local storage', () => {
    cy.setLocalStorage('token', token)
    cy.getLocalStorage('token').should('eq', token)
  })

  it('overwrites the type command by using sensitive characters', () => {
    cy.visit('/commands/actions')
    cy.findByPlaceholderText('Email').type('test@email.com')
    cy.findByPlaceholderText('Email').type('test@email.com', {
      sensitive: true
    })
  })
})

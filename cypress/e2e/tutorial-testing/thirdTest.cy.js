// This test demonstrates how the Cypress commands work in order (synchronously).

context('My third test', () => {
  it('types into an email field', () => {
    cy.visit('/commands/actions')

    // Use 'findByPlaceholderText' to locate the email input field and type into it.
    cy.findByPlaceholderText('Email').type('test@email.com')

    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(5000)

    // This will be executed first because it's not a Cypress command.
    console.log('Test is finished')
  })
})

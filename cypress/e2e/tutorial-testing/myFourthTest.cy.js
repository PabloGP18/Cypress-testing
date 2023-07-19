// This test demonstrates how to work with non-Cypress commands that are not waiting in a queue.
// '.then()' is used to run non-Cypress commands sequentially.

context('My fourth test', () => {
  it('types into an email field', () => {
    cy.visit('/commands/actions')

    // Use 'findByPlaceholderText' to locate the email input field and type into it.
    cy.findByPlaceholderText('Email').type('test@email.com')

    // Use '.then()' to execute the following commands sequentially after waiting for 2000ms.
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(2000).then(() => {
      // Use 'fetch' to make a request to the SpaceX API and log the response data.
      fetch('https://api.spacexdata.com/v3/missions')
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
        })
    })

    // Log a message to the Cypress console.
    cy.log('Cypress log used')
  })
})

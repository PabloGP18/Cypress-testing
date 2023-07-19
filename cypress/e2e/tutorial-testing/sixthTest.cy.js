// Example to understand how to write tests that interact with the user interface
// Recognize when to use command options

it('Links to the action page correctyl', () => {
  cy.visit('/')
  // finding the last actions link
  cy.findAllByText('Actions').last().click()
  cy.url().should('include', 'commands/actions')
})

it('Links to the action page correctyl when display none active', () => {
  cy.visit('/')
  // finding the first actions with display none active
  cy.findAllByText('Actions').first().click({ force: true })
  cy.url().should('include', 'commands/actions')
})

it('Lets you type in an input field', () => {
  cy.visit('/commands/actions')
  cy.findAllByPlaceholderText('Email').type('Test').should('have.value', 'Test')
})

it('Lets you clear in an input field', () => {
  cy.visit('/commands/actions')
  cy.findAllByLabelText('Describe:')
    .type('Test description')
    .should('have.value', 'Test description')
    .clear()
    .should('have.value', '')
})

it('Lets you check a checkbox', () => {
  cy.visit('/commands/actions')
  cy.get('.action-checkboxes [type="checkbox"]')
    .first()
    .check()
    .should('be.checked')
})

it('Lets you check a disabled checkbox', () => {
  cy.visit('/commands/actions')
  cy.get('.action-checkboxes [type="checkbox"]')
    .eq(1)
    .check({ force: true })
    .should('be.checked')
})

// Test using Cypress mouse commands with options
// Learning a workaround for creating a hover event

// In summary, these test cases cover various interactions using Cypress mouse commands.
// They demonstrate triggering popovers on click, clicking on different sections of a canvas,
// double-clicking to edit elements, right-clicking to edit elements, and showing navigation links on hover.

// Define a test context named '10th test using mouse commands'
context('10th test using mouse commands', () => {
  beforeEach(() => {
    // Visit the '/commands/actions' page before each test
    cy.visit('/commands/actions')
  })

  // Test case to demonstrate triggering a popover on click
  it('triggers a popover on click', () => {
    // Find the element with the class 'action-btn' and click on it
    cy.get('.action-btn').click()

    // After the click, check if the popover with text 'This popover shows up on click' is visible
    cy.findByText('This popover shows up on click').should('be.visible')
  })

  // Test case to demonstrate clicking on different sections of a canvas
  it('can click on different sections of a canvas', () => {
    // Use the 'click' command with the 'top' option to click on the top part of the element with id 'action-canvas'
    cy.get('#action-canvas').click('top')

    // Use the 'click' command with the 'bottomRight' option to click on the bottom-right part of the element with id 'action-canvas'
    cy.get('#action-canvas').click('bottomRight')

    // Use the 'click' command with specific x and y coordinates (80, 100) to click on the canvas at those coordinates
    cy.get('#action-canvas').click(80, 100)
  })

  // Test case to demonstrate double-clicking an element to trigger an action
  it('can double click to edit', () => {
    // Double click on the element with class 'action-div'
    cy.get('.action-div').dblclick().should('not.be.visible')

    // After the double click, check that the element with class 'action-input-hidden' is now visible
    cy.get('.action-input-hidden').should('be.visible')
  })

  // Test case to demonstrate right-clicking an element to trigger an action
  it('can right click to edit', () => {
    // Right-click on the element with class 'rightclick-action-div'
    cy.get('.rightclick-action-div').rightclick().should('not.be.visible')

    // After the right-click, check that the element with class 'rightclick-action-input-hidden' is now visible
    cy.get('.rightclick-action-input-hidden').should('be.visible')
  })

  // Test case to demonstrate showing navigation links on hover
  it('shows the nav links on hover', () => {
    // Trigger a mouseover event on the element with class 'dropdown-toggle'
    cy.get('.dropdown-toggle').trigger('mouseover')
    // After the mouseover, check that the element with class 'dropdown-menu' is now visible
    cy.get('.dropdown-menu').should('be.visible')
  })
})

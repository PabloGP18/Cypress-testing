// This test demonstrates how to use a plugin (testing-library/cypress) to test like in React.

// Importing from the cypress.config file.
import { e2e } from '../../../cypress.config'
import cypressConfig from '../../../cypress.config'

// Creating variables that come from the cypress.config.js file.
// This approach allows easy configuration changes in one place.
const navbarText = e2e.env.navbartText
const navbarText2 = cypressConfig.e2e.env.navbartText2

context('My second test', () => {
  // 'beforeEach' saves you from typing the same command repeatedly.
  beforeEach(() => {
    cy.visit('/')
  })

  // Using the plugin for testing like in React.
  it('Correctly renders the cypress website link', () => {
    // Use 'findByText' to locate the navbar text and assert that it exists.
    cy.findByText(navbarText).should('exist')

    // I'm using 'contains' in this case because the navbar text is grayed out,
    // and 'contains' will find it even if the text is disabled.
    cy.contains(navbarText2).should('exist')
  })
})

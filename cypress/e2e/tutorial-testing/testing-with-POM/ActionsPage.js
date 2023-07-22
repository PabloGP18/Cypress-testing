class ActionsPage {
  header = 'h1'
  container = '.container'
  paragraph = 'p'
  subheader = 'h4'

  visit() {
    cy.visit('http://example.cypress.io/commands/actions')
  }

  checkHeaderExist() {
    cy.get(ActionsPage.header).should('exist')
  }

  checkHeaderText(text) {
    cy.get(ActionsPage.header).should('contain.text', text)
  }

  checkParagraphUnderHeader(index) {
    cy.get(ActionsPage.container)
      .eq(index)
      .find(ActionsPage.paragraph)
      .should('exist')
  }

  checkElementInSection(index) {
    cy.get(ActionsPage.container)
      .eq(index)
      .within(() => {
        cy.get(ActionsPage.subheader).should('exist')
        cy.get(ActionsPage.paragraph).should('exist')
      })
  }
}

export default ActionsPage

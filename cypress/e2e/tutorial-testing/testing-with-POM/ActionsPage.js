class ActionsPage {
  static header = 'h1'
  static container = '.container'
  static paragraph = 'p'
  static subheader = 'h4'

  static visit() {
    cy.visit('http://example.cypress.io/commands/actions')
  }

  static checkHeaderExist() {
    cy.get(ActionsPage.header).should('exist')
  }

  static checkHeaderText(text) {
    cy.get(ActionsPage.header).should('contain.text', text)
  }

  static checkParagraphUnderHeader(index) {
    cy.get(ActionsPage.container)
      .eq(index)
      .find(ActionsPage.paragraph)
      .should('exist')
  }

  static checkElementInSection(index) {
    cy.get(ActionsPage.container)
      .eq(index)
      .within(() => {
        cy.get(ActionsPage.subheader).should('exist')
        cy.get(ActionsPage.paragraph).should('exist')
      })
  }
}

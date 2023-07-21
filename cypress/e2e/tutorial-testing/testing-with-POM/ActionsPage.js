class ActionsPage {
  constructor() {
    this.header = 'h1'
    this.container = '.container'
    this.paragraph = 'p'
    this.subheader = 'h4'
  }

  visit() {
    cy.visit('http://example.cypress.io/commands/actions')
    return this
  }

  checkHeaderExist() {
    cy.get(this.header).should('exist')
    return this
  }

  checkHeaderText(text) {
    cy.get(this.header).should('contain.text', text)
    return this
  }

  checkParagraphUnderHeader(index) {
    cy.get(this.container).eq(index).find(this.paragraph).should('exist')
    return this
  }

  checkElementInSection(index) {
    cy.get(this.container)
      .eq(index)
      .within(() => {
        cy.get(this.subheader).should('exist')
        cy.get(this.paragraph).should('exist')
      })
    return this
  }
}

export default ActionsPage

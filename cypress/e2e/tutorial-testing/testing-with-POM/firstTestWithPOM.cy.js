import ActionsPage from './ActionsPage'

context('Redoing first test with POM', () => {
  beforeEach(() => {
    ActionsPage.visit()
  })

  it('has an h1 on the page', () => {
    ActionsPage.checkHeaderExist()
  })

  it('renders the correct h1 text', () => {
    ActionsPage.checkHeaderText('Actions')
  })

  it('renders a paragraph under the h1', () => {
    ActionsPage.checkParagraphUnderHeader(1)
  })

  it('renders a section with the correct elements', () => {
    ActionsPage.checkElementInSection(2)
  })
})

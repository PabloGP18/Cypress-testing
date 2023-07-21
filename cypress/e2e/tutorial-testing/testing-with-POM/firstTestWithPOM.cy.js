import ActionsPage from './ActionsPage'

const actionPage = new ActionsPage()

context('Redoing first test with POM', () => {
  beforeEach(() => {
    actionPage.visit()
  })

  it('has an h1 on the page', () => {
    actionPage.checkHeaderExist()
  })

  it('renders the correct h1 text', () => {
    actionPage.checkHeaderText('Actions')
  })

  it('renders a paragraph under the h1', () => {
    actionPage.checkParagraphUnderHeader(1)
  })

  it('renders a section with the correct elements', () => {
    actionPage.checkElementInSection(2)
  })
})

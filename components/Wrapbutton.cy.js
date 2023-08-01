import Wrapbutton from './Wrapbutton.vue'

describe('<Wrapbutton />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(Wrapbutton)
  })
})
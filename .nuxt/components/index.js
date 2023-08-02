export const WrapbuttonCy = () => import('../../components/Wrapbutton.cy.js' /* webpackChunkName: "components/wrapbutton-cy" */).then(c => wrapFunctional(c.default || c))
export const Wrapbutton = () => import('../../components/Wrapbutton.vue' /* webpackChunkName: "components/wrapbutton" */).then(c => wrapFunctional(c.default || c))
export const Wrapcontent = () => import('../../components/wrapcontent.vue' /* webpackChunkName: "components/wrapcontent" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}

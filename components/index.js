import menu from './menu'
import card from './card'

function register(Vue, components) {
  components.forEach(function(comp) {
    Vue.component(comp.name, comp)
  })
}

function install(Vue) {
  register(Vue, menu)
  register(Vue, card)
}

export default {install}

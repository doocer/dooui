import clickoutside from './clickoutside'
import menu from './menu'
import card from './card'
import select from './select'

function register(Vue, components) {
  components.forEach(function(comp) {
    Vue.component(comp.name, comp)
  })
}

function install(Vue) {
  Vue.directive('clickoutside', clickoutside)
  register(Vue, menu)
  register(Vue, card)
  register(Vue, select)
}

export default {install}

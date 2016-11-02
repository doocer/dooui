import menu from './menu'

function register(Vue, components) {
  Object.keys(components).forEach(function(k) {
    Vue.component(k, components[k])
  })
}

function install(Vue) {
  register(Vue, menu)
}

export default {install}

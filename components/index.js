import menu from './menu'
import card from './card'
import select from './select'

function install(Vue) {
  menu.install(Vue)
  card.install(Vue)
  select.install(Vue)
}

export default {install}

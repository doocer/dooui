import grid from './grid'
import icon from './icon'
import menu from './menu'
import card from './card'
import select from './select'
import monthpicker from './monthpicker'

function install(Vue) {
  grid.install(Vue)
  icon.install(Vue)
  menu.install(Vue)
  card.install(Vue)
  select.install(Vue)
  monthpicker.install(Vue)
}

export default {install}

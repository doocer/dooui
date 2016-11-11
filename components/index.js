import grid from './grid'
import icon from './icon'
import menu from './menu'
import box from './box'
import select from './select'
import monthpicker from './monthpicker'

function install(Vue) {
  grid.install(Vue)
  icon.install(Vue)
  menu.install(Vue)
  box.install(Vue)
  select.install(Vue)
  monthpicker.install(Vue)
}

export default {install}

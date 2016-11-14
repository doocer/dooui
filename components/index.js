import grid from './grid'
import icon from './icon'
import menu from './menu'
import box from './box'
import button from './button'
import picker from './picker'
import select from './select'
import monthpicker from './monthpicker'

function install(Vue) {
  grid.install(Vue)
  icon.install(Vue)
  menu.install(Vue)
  box.install(Vue)
  button.install(Vue)
  picker.install(Vue)
  select.install(Vue)
  monthpicker.install(Vue)
}

export default {install}

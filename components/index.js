import grid from './grid'
import menu from './menu'
import box from './box'
import picker from './picker'
import select from './select'
import monthpicker from './monthpicker'

function install(Vue) {
  grid.install(Vue)
  menu.install(Vue)
  box.install(Vue)
  picker.install(Vue)
  select.install(Vue)
  monthpicker.install(Vue)
}

export default {install}

import grid from './grid'
import menu from './menu'
import box from './box'
import connect from './connect'
import picker from './picker'
import popover from './popover'
import input from './input'
// switch is a keyword
import _switch from './switch'
import select from './select'
import monthpicker from './monthpicker'

import breadcrumb from './breadcrumb'
import tab from './tab'

import progress from './progress'
import message from './message'
import dialog from './dialog'
import chart from './chart'


function install(Vue) {
  Vue.use(connect)
  Vue.use(grid)
  Vue.use(menu)
  Vue.use(box)
  Vue.use(picker)
  Vue.use(popover)
  Vue.use(input)
  Vue.use(_switch)
  Vue.use(select)
  Vue.use(monthpicker)
  Vue.use(breadcrumb)
  Vue.use(tab)
  Vue.use(progress)
  Vue.use(message)
  Vue.use(dialog)
  Vue.use(chart)
}

export default {install}

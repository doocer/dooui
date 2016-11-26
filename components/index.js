import grid from './grid'
import menu from './menu'
import box from './box'
import picker from './picker'
import input from './input'
// switch is a keyword
import _switch from './switch'
import select from './select'
import monthpicker from './monthpicker'

import breadcrumb from './breadcrumb'
import progress from './progress'
import message from './message'
import chart from './chart'


function install(Vue) {
  Vue.use(grid)
  Vue.use(menu)
  Vue.use(box)
  Vue.use(picker)
  Vue.use(input)
  Vue.use(_switch)
  Vue.use(select)
  Vue.use(monthpicker)
  Vue.use(breadcrumb)
  Vue.use(progress)
  Vue.use(message)
  Vue.use(chart)
}

export default {install}

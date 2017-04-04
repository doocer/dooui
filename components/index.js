import Grid from './grid'
import Menu from './menu'
import Box from './box'
import Connect from './connect'
import Popover from './popover'
import Input from './input'
import Switch from './switch'
import Select from './select'
import RadioGroup from './radio-group'
import MonthPicker from './monthpicker'

import Breadcrumb from './breadcrumb'
import Pagination from './pagination'
import Tab from './tab'

import Progress from './progress'
import Message from './message'
import Dialog from './dialog'
import Chart from './chart'


function install(Vue) {
  Vue.use(Connect)
  Vue.use(Grid)
  Vue.use(Menu)
  Vue.use(Box)
  Vue.use(Popover)
  Vue.use(Input)
  Vue.use(Switch)
  Vue.use(Select)
  Vue.use(RadioGroup)
  Vue.use(MonthPicker)
  Vue.use(Breadcrumb)
  Vue.use(Pagination)
  Vue.use(Tab)
  Vue.use(Progress)
  Vue.use(Message)
  Vue.use(Dialog)
  Vue.use(Chart)
}

export default {install}

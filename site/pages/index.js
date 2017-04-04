import Home from './Home.vue'
import Design from './Design.vue'
import Guide from './Guide.vue'
import Colors from './Colors.vue'
import Grid from './Grid.vue'
import Badge from './Badge.vue'

import Button from './Button.vue'
import Input from './Input.vue'
import Radio from './Radio.vue'
import Checkbox from './Checkbox.vue'
import Switch from './Switch.vue'
import Select from './Select.vue'
import RadioGroup from './RadioGroup.vue'
import Monthpicker from './Monthpicker.vue'

import Tab from './Tab.vue'
import Menu from './Menu.vue'
import Breadcrumb from './Breadcrumb.vue'
import Pagination from './Pagination.vue'

import Progress from './Progress.vue'
import Message from './Message.vue'
import Dialog from './Dialog.vue'

import LineChart from './LineChart.vue'
import BarChart from './BarChart.vue'
import PieChart from './PieChart.vue'

const routes = [
  {path: '/', name: 'home', component: Home},
  {path: '/design/', component: Design},
  {path: '/guide/', component: Guide},
  {path: '/colors/', component: Colors},
  {path: '/grid/', component: Grid},
  {path: '/badge/', component: Badge},
  {path: '/button/', component: Button},
  {path: '/input/', component: Input},
  {path: '/radio/', component: Radio},
  {path: '/checkbox/', component: Checkbox},
  {path: '/switch/', component: Switch},
  {path: '/select/', component: Select},
  {path: '/radio-group/', component: RadioGroup},
  {path: '/month-picker/', component: Monthpicker},
  {path: '/breadcrumb/', component: Breadcrumb},
  {path: '/pagination/', component: Pagination},
  {path: '/tab/', component: Tab},
  {path: '/menu/', component: Menu},
  {path: '/progress/', component: Progress},
  {path: '/message/', component: Message},
  {path: '/dialog/', component: Dialog},
  {path: '/line-chart/', component: LineChart},
  {path: '/bar-chart/', component: BarChart},
  {path: '/pie-chart/', component: PieChart},
]

export default {
  routes,
  mode: 'hash',
}

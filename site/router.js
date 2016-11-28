import Home from './basic/Home.vue'
import Design from './basic/Design.vue'
import Guide from './basic/Guide.vue'
import Colors from './basic/Colors.vue'
import Grid from './basic/Grid.vue'
import Badge from './basic/Badge.vue'

import Button from './form/Button.vue'
import Input from './form/Input.vue'
import Radio from './form/Radio.vue'
import Checkbox from './form/Checkbox.vue'
import Switch from './form/Switch.vue'
import Select from './form/Select.vue'
import Monthpicker from './time/Monthpicker.vue'

import Breadcrumb from './navigation/Breadcrumb.vue'
import Progress from './data/Progress.vue'
import Message from './message/Message.vue'

import LineChart from './chart/LineChart.vue'
import BarChart from './chart/BarChart.vue'


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
  {path: '/monthpicker/', component: Monthpicker},
  {path: '/breadcrumb/', component: Breadcrumb},
  {path: '/progress/', component: Progress},
  {path: '/message/', component: Message},
  {path: '/line-chart/', component: LineChart},
  {path: '/bar-chart/', component: BarChart},
]

export default {
  routes,
  mode: 'hash',
}

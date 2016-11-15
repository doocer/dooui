import Home from './basic/Home.vue'
import Design from './basic/Design.vue'
import Guide from './basic/Guide.vue'
import Colors from './basic/Colors.vue'
import Grid from './basic/Grid.vue'

import Button from './form/Button.vue'
import Radio from './form/Radio.vue'
import Select from './form/Select.vue'
import Monthpicker from './time/Monthpicker.vue'


const routes = [
  {path: '/', name: 'home', component: Home},
  {path: '/design/', component: Design},
  {path: '/guide/', component: Guide},
  {path: '/colors/', component: Colors},
  {path: '/grid/', component: Grid},
  {path: '/button/', component: Button},
  {path: '/radio/', component: Radio},
  {path: '/select/', component: Select},
  {path: '/monthpicker/', component: Monthpicker},
]

export default {
  routes,
  mode: 'hash',
}

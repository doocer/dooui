import Home from './basic/Home.vue'
import Colors from './basic/Colors.vue'

import Grid from './basic/Grid.vue'
import Select from './form/Select.vue'
import Monthpicker from './time/Monthpicker.vue'


const routes = [
  {path: '/', name: 'home', component: Home},
  {path: '/colors/', component: Colors},
  {path: '/grid/', component: Grid},
  {path: '/select/', component: Select},
  {path: '/monthpicker/', component: Monthpicker},
]

export default {
  routes,
  mode: 'hash',
}

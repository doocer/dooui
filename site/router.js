import Home from './views/Home.vue'
import Colors from './views/Colors.vue'

import Grid from './grid/index.vue'
import Select from './select/index.vue'
import Monthpicker from './monthpicker/index.vue'


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

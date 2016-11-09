import Home from './Home.vue'
import Grid from './Grid.vue'
import Select from './Select.vue'


const routes = [
  {path: '/', name: 'home', component: Home},
  {path: '/grid/', component: Grid},
  {path: '/select/', component: Select},
]

export default {
  routes,
  mode: 'hash',
}

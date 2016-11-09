import Home from './Home.vue'
import Select from './Select.vue'


const routes = [
  {path: '/', name: 'home', component: Home},
  {path: '/select/', component: Select},
]

export default {
  routes,
  mode: 'hash',
}

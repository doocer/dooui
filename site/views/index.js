import Home from './Home.vue'
import Grid from './Grid.vue'
import Select from './Select.vue'
import MonthPicker from './MonthPicker.vue'


const routes = [
  {path: '/', name: 'home', component: Home},
  {path: '/grid/', component: Grid},
  {path: '/select/', component: Select},
  {path: '/month-picker/', component: MonthPicker},
]

export default {
  routes,
  mode: 'hash',
}

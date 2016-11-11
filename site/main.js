import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Dooui from '../components'
import routerConfig from './router'

Vue.use(VueRouter)
Vue.use(Dooui)

const router = new VueRouter(routerConfig)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

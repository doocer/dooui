import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Dooui from '../components'
import routerConfig from './router'
import DocAttrs from './DocAttrs.vue'
import Demo from './Demo.vue'

Vue.use(VueRouter)
Vue.use(Dooui)
Vue.component('demo', Demo)
Vue.component('doc-attrs', DocAttrs)

const router = new VueRouter(routerConfig)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

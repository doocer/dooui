import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Dooui from '../components'
import routerConfig from './pages'
import DocAttrs from './DocAttrs.vue'
import DocEvents from './DocEvents.vue'
import Demo from './Demo.vue'

Vue.use(VueRouter)
Vue.use(Dooui)
Vue.component('demo', Demo)
Vue.component('doc-attrs', DocAttrs)
Vue.component('doc-events', DocEvents)

const RootApp = Vue.extend(App)
const router = new VueRouter(routerConfig)

router.afterEach((to) => {
  if (to.path === '/') {
    document.title = 'dooui'
  } else {
    var title = to.path.replace(/\//g, '')
    title = title.split('-').map(t => {
      return t.charAt(0).toUpperCase() + t.substr(1)
    }).join(' ')
    document.title = 'dooui - ' + title
  }
  ga('set', 'page', to.path)
  ga('send', 'pageview')
})

window.rootApp = new RootApp({
  el: '#app',
  name: 'RootApp',
  router,
})

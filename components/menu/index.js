import Menu from './Menu.vue'
import MenuItem from './MenuItem.vue'
import MenuTree from './MenuTree.vue'


function install(Vue) {
  Vue.component(Menu.name, Menu)
  Vue.component(MenuItem.name, MenuItem)
  Vue.component(MenuTree.name, MenuTree)
}

export default {Menu, MenuItem, MenuTree, install}

import Select from './Select.vue'
import Option from './Option.vue'
import Optgroup from './Optgroup.vue'

function install(Vue) {
  Vue.component(Select.name, Select)
  Vue.component(Option.name, Option)
  Vue.component(Optgroup.name, Optgroup)
}

export default {Select, Option, Optgroup, install}

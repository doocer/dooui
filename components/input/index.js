import Radio from './Radio.vue'
import Checkbox from './Checkbox.vue'

function install(Vue) {
  Vue.component(Radio.name, Radio)
  Vue.component(Checkbox.name, Checkbox)
}

export default {Radio, Checkbox, install}

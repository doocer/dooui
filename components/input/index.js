import Input from './input'
import Radio from './Radio.vue'
import Checkbox from './Checkbox.vue'

function install(Vue) {
  Vue.component(Input.name, Input)
  Vue.component(Radio.name, Radio)
  Vue.component(Checkbox.name, Checkbox)
}

export default {Input, Radio, Checkbox, install}

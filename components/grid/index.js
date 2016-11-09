import Row from './Row.vue'
import Col from './Col.vue'

function install(Vue) {
  Vue.component(Row.name, Row)
  Vue.component(Col.name, Col)
}

export default {Row, Col, install}

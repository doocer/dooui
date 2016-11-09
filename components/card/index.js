import Card from './Card.vue'

function install(Vue) {
  Vue.component(Card.name, Card)
}

export default {Card, install}

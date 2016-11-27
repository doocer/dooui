const Box = {
  name: 'du-box',
  render(h) {
    var children = []
    var heads = this.$slots.head
    if (heads) {
      children.push(
        h('div', {'class': 'du-box_head'}, heads)
      )
    }
    children.push(
      h('div', {'class': 'du-box_body'}, this.$slots.default)
    )
    var foots = this.$slots.foot
    if (foots) {
      children.push(
        h('div', {'class': 'du-box_foot'}), foots
      )
    }
    return h('div', {'class': 'du-box'}, children)
  }
}

function install(Vue) {
  Vue.component(Box.name, Box)
}

export default {Box, install}

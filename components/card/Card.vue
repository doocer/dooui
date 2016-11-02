<script>
export default {
  name: 'du-card',
  render(h) {
    var children = []
    var heads = this.$slots.head
    if (heads) {
      children.push(h('div', {'class': 'du-card_head'}), heads)
    }
    children.push(h('div', {'class': 'du-card_body'}, this.$slots.default))
    var foots = this.$slots.foot
    if (foots) {
      children.push(h('div', {'class': 'du-card_foot'}), foots)
    }
    return h('div', {'class': 'du-card'}, children)
  }
}
</script>

<style>
.du-card {
  box-shadow: var(--box-shadow);
}
</style>

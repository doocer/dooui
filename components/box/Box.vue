<script>
export default {
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
</script>

<style>
.du-box {
  border-top: 3px solid var(--color-silver);
  box-shadow: var(--box-shadow);
  background-color: var(--color-white);
  border-radius: 2px;
}
.du-box + .du-box {
  margin-top: 15px;
}
.du-box.Blue {
  border-color: var(--color-blue);
}
.du-box.Green {
  border-color: var(--color-green);
}
.du-box.Yellow {
  border-color: var(--color-yellow);
}
.du-box.Red {
  border-color: var(--color-red);
}
.du-box_head,
.du-box_body,
.du-box_foot {
  padding: 15px;
}
.du-box_head {
  padding: 10px 15px;
  border-bottom: 1px solid var(--line-light-color);
}
h1.du-box_head,
h2.du-box_head,
h3.du-box_head,
h4.du-box_head,
.du-box_head h1,
.du-box_head h2,
.du-box_head h3,
.du-box_head h4 {
  font-size: 1.2em;
  font-weight: 500;
}
.du-box_body {
  padding: 15px;
}
.du-box_foot {
  padding: 10px 15px;
  border-top: 1px solid var(--line-light-color);
}
</style>

export default {
  name: 'du-input',
  props: {
    type: {
      type: String,
      default: 'text'
    },
    name: String,
    icon: String,
    placeholder: String,
    pattern: String,
    disabled: {
      type: Boolean,
      default: false
    }
  },
  render(h) {
    var children = []
    var prepend = this.$slots.prepend
    if (prepend) {
      children.push(
        h('div', {'class': 'du-input_prepend'}, prepend)
      )
    }
    var inputs = []
    if (this.icon) {
      inputs.push(h('i', {
        'class': ['du-icon', this.icon],
        attrs: {
          'aria-hidden': true
        }
      }))
    }
    inputs.push(h('input', {attrs: {
      name: this.name,
      type: this.type,
      pattern: this.pattern,
      disabled: this.disabled,
      placeholder: this.placeholder,
    }}))
    children.push(
      h('div', {'class': 'du-input_inner'}, inputs)
    )
    var append = this.$slots.append
    if (append) {
      children.push(
        h('div', {'class': 'du-input_append'}, append)
      )
    }
    var classes = ['du-input']
    if (prepend || append) {
      classes.push('Group')
    }
    if (this.disabled) {
      classes.push('Disabled')
    }
    return h('div', {'class': classes}, children)
  }
}

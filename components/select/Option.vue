<template>
<li class="du-option" role="treeitem"
  :class="{'Disabled': isDisabled, 'Hover': isHover}"
  :aria-selected="isSelected" v-show="isVisible"
  @click.stop="selectOption" @mouseenter="hoverOption">
  <slot>
    <span v-text="label || value"></span>
  </slot>
</li>
</template>

<script>
export default {
  name: 'du-option',
  props: {
    value: {
      required: true,
    },
    label: [String, Number],
    disabled: {
      type: Boolean,
      default: false,
    },
    extra: {}
  },
  computed: {
    root() {
      var comp = this.$parent
      while (!comp.$options.select) {
        comp = comp.$parent
      }
      return comp
    },
    isDisabled() {
      return this.disabled || this.$parent.disabled
    },
    isSelected() {
      return this.root.selected.indexOf(this.value) !== -1
    },
    isVisible() {
      return this.root.visibleOptions.indexOf(this) !== -1
    },
    isHover() {
      return this.root.hoverOption === this
    },
  },
  created() {
    this.root.options.push(this)
    if (this.$parent.$options.optgroup) {
      this.$parent.options.push(this)
    }
  },
  beforeDestroy() {
    var index = this.root.options.indexOf(this)
    this.root.options.splice(index, 1)
  },
  methods: {
    selectOption() {
      if (!this.isDisabled) {
        this.root.selectOption(this)
      }
    },
    hoverOption() {
      if (!this.isDisabled) {
        this.root.hoverOption = this
      }
    },
  }
}
</script>

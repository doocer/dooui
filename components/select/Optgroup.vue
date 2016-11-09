<template>
<li  role="group" class="du-optgroup"
  :class="{'Disabled': disabled}" v-show="visible">
  <strong v-text="label" v-if="label"></strong>
  <ul><slot></slot></ul>
</li>
</template>

<script>
export default {
  name: 'du-optgroup',
  optgroup: true,
  props: {
    label: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      options: []
    }
  },
  computed: {
    visible() {
      return this.options.filter(o => o.isVisible).length
    }
  }
}
</script>

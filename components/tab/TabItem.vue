<template>
<div class="du-tab_item" :aria-hidden="!selected">
  <slot></slot>
</div>
</template>

<script>
var count = 0
export default {
  name: 'du-tab-item',
  props: {
    title: {
      type: String,
      required: true
    },
  },
  data() {
    return {id: count++}
  },
  computed: {
    selected() {
      return this.$parent.active === this
    }
  },
  created() {
    this.$parent.items.push(this)
  }
}
</script>

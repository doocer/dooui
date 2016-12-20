<template>
<div class="du-tab_item" :aria-hidden="!selected" v-show="selected">
  <slot></slot>
</div>
</template>

<script>
export default {
  name: 'du-tab-item',
  props: {
    title: {
      type: String,
      required: true
    },
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

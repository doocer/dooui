<template>
<label class="du-pagination_goto">
  <slot>{{label}}</slot>
  <input type="number" @keyup.enter="select">
</label>
</template>

<script>
export default {
  name: 'du-pagination-goto',
  props: {
    label: {
      type: String,
      default: 'Goto'
    }
  },
  methods: {
    select(e) {
      var num = e.target.value
      this.$parent.select(parseInt(num, 10))
    }
  }
}
</script>

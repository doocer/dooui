<template>
<div class="du-month-panel">
  <a class="du-month-panel_prev" role="button" @click.prevent="prev">
    <i class="du-double-arrow Left"></i>
  </a>
  <div class="du-month-panel_year">
    <a role="button" v-text="year"></a>
    <input type="number" pattern="[0-9]*" v-model="year">
  </div>
  <a class="du-month-panel_next" role="button" @click.prevent="next">
    <i class="du-double-arrow Right"></i>
  </a>
</div>
</template>

<script>
export default {
  name: 'du-month-panel',
  props: {
    year: {
      type: Number,
      default: () => {
        var d = new Date()
        return d.getFullYear()
      }
    }
  },
  methods: {
    prev() {
      this.$emit('year-change', this.year - 1)
    },
    next() {
      this.$emit('year-change', this.year + 1)
    },
  }
}
</script>

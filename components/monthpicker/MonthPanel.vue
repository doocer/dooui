<template>
<div class="du-month-panel">
  <a class="du-month-panel_prev" role="button" @click.prevent="prev">
    <i class="du-double-arrow Left"></i>
  </a>
  <div class="du-month-panel_year">
    <input type="number" pattern="[0-9]*" :value="current"
      @input="record">
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
  watch: {
    year(y) {
      this.current = y
    },
    current(y) {
      this.$emit('change', y)
    }
  },
  data() {
    return {
      current: this.year
    }
  },
  methods: {
    prev() {
      this.current -= 1
    },
    next() {
      this.current += 1
    },
    record(e) {
      try {
        this.current = parseInt(e.target.value, 10)
      } catch (e) {
      }
    },
  }
}
</script>

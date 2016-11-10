<template>
<div class="du-month-calendar">
  <div class="du-month-calendar_panel">
    <du-month-panel :year="year" @year-change="yearChange"></du-month-panel>
  </div>
  <div class="du-month-calendar_table">
    <du-month-table :month="month"
      @month-change="monthChange" @year-delta="yearDelta">
    </du-month-table>
  </div>
</div>
</template>

<script>
export default {
  name: 'du-month-calendar',
  props: {
    value: {
      type: Array,
      default: () => {
        var d = new Date()
        var year = d.getFullYear()
        var month = d.getMonth() + 1
        return [year, month]
      }
    },
  },
  watch: {
    value(v) {
      this.year = v[0]
      this.month = v[1]
    }
  },
  data() {
    return {
      year: this.value[0],
      month: this.value[1]
    }
  },
  methods: {
    yearChange(year) {
      this.$emit('input', [year, this.value[1]])
      this.year = year
    },
    yearDelta(delta) {
      this.yearChange(this.value[0] + delta)
    },
    monthChange(month) {
      this.$emit('input', [this.value[0], month])
      this.month = month
    },
  }
}
</script>

<style src="./style.css"></style>

<template>
<div class="du-month-calendar">
  <div class="du-month-calendar_head">
    <du-month-panel :year="year" @change="yearChange"></du-month-panel>
  </div>
  <div class="du-month-calendar_body">
    <du-month-table :month="month" :months="months" ref="table"
      @select="onSelect" @change="monthChange" @year-delta="yearDelta">
    </du-month-table>
  </div>
</div>
</template>

<script>
const DELTA_MAP = {37: -1, 39: +1}

export default {
  name: 'du-month-calendar',
  props: {
    months: Array,
    year: {
      type: Number,
      default: () => {
        var d = new Date()
        return d.getFullYear()
      }
    },
    month: {
      type: Number,
      default: () =>{
        var d = new Date()
        return d.getMonth() + 1
      }
    }
  },
  methods: {
    yearChange(year) {
      this.$emit('change', [year, this.month])
    },
    yearDelta(delta) {
      this.yearChange(this.year + delta)
    },
    monthChange(month) {
      this.$emit('change', [this.year, month])
    },
    onSelect() {
      this.$emit('select')
    },
    keypress(e) {
      var code = e.keyCode
      if (e.ctrlKey || e.metaKey) {
        var delta = DELTA_MAP[code]
        if (delta) {
          e.preventDefault()
          this.yearDelta(delta)
        }
      } else {
        this.$refs.table.keypress(e)
      }
    },
  }
}
</script>

<template>
<span class="du-month-picker" :class="{'Active': active}"
  v-off:click="toggleOff" @keydown="keypress">
  <span class="du-month-picker_box">
    <input type="text" :value="display" readonly
      @click="toggle" :placeholder="placeholder">
  </span>
  <div class="du-month-picker_dropdown">
    <du-month-calendar :year="year" :month="month" :months="months"
      @change="change" @select="select" ref="calendar">
    </du-month-calendar>
  </div>
</span>
</template>

<script>
import off from 'vue-document-event'
export default {
  name: 'du-month-picker',
  directives: {off},
  props: {
    placeholder: String,
    value: String,
    months: Array,
  },
  watch: {
    value(v) {
      var ym = splitValue(v)
      if (ym) {
        this.year = ym[0]
        this.month = ym[1]
      }
    }
  },
  data() {
    var year, month
    var ym = splitValue(this.value)
    if (ym) {
      year = ym[0]
      month = ym[1]
    }
    return {
      active: false,
      year,
      month,
    }
  },
  computed: {
    display() {
      if (this.year && this.month) {
        return formatMonth(this.year, this.month)
      }
    }
  },
  methods: {
    change(ym) {
      this.year = ym[0]
      this.month = ym[1]
    },
    select() {
      this.toggleOff()
    },
    keypress(e) {
      this.$refs.calendar.keypress(e)
    },
    toggleOff() {
      this.active = false
    },
    toggle() {
      this.active = !this.active
    }
  }
}

function splitValue(value) {
  if (!value || value.indexOf('-') === -1) {
    return null
  }
  var ym = value.split('-')
  return [parseInt(ym[0], 10), parseInt(ym[1], 10)]
}
function formatMonth(y, m) {
  if (m < 10) {
    m = '0' + m
  }
  return y + '-' + m
}
</script>

<style src="./style.css"></style>

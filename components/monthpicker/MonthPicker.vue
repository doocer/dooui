<template>
<span class="du-month-picker"
  :class="{'Active': active}" v-don:click="toggleOff"
  @keydown="handleKey">
  <span class="du-month-picker_box">
    <input type="text" readonly="" @click="toggle">
  </span>
  <div class="du-month-picker_dropdown">
    <du-month-calendar ></du-month-calendar>
  </div>
</span>
</template>

<script>
export default {
  name: 'du-month-picker',
  props: {
    value: String,
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
    var ym = splitValue(this.value) || defaultValue()
    return {
      year: ym[0],
      month: ym[1],
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
function defaultValue() {
  var d = new Date()
  var year = d.getFullYear()
  var month = d.getMonth() + 1
  return [year, month]
}
</script>

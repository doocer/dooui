<template>
<span class="du-month-picker" :class="{'Active': active}"
  v-off:click="toggleOff" @keydown="keypress">
  <span class="du-month-picker_box">
    <input type="text" :value="display" :placeholder="placeholder"
      @click="toggle" ref="input" :readonly="readonly">
    <span class="du-month-picker_icon">
      <slot name="icon"></slot>
    </span>
  </span>
  <div class="du-month-picker_dropdown" @click="refocus">
    <du-month-calendar :year="year" :month="month" :locale="locale"
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
    locale: String,
    format: Function,
    readonly: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    value: {
      immediate: true,
      handler(v) {
        var ym = splitValue(v)
        this.selected = ym
        if (ym) {
          this.year = ym[0]
          this.month = ym[1]
        }
      }
    }
  },
  data() {
    var year, month, selected, active = false
    return {active, year, month, selected}
  },
  computed: {
    display() {
      if (this.selected) {
        var fn = this.format || _format
        return fn(this.selected[0], this.selected[1])
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
      this.$nextTick(() => {
        this.selected = [this.year, this.month]
        this.$emit('input', _format(this.year, this.month))
      })
    },
    keypress(e) {
      this.$refs.calendar.keypress(e)
    },
    toggleOff() {
      this.active = false
    },
    toggle() {
      this.active = !this.active
    },
    refocus(e) {
      if (e.target.nodeName !== 'INPUT') {
        this.$nextTick(() => {
          this.$refs.input.focus()
        })
      }
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
function _format(y, m) {
  if (m < 10) {
    m = '0' + m
  }
  return y + '-' + m
}
</script>

<style src="./style.css"></style>

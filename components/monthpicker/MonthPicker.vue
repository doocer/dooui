<template>
<du-picker class="du-month-picker" @keydown.native="keypress" ref="popup">
  <span class="du-month-picker_box">
    <input type="text" :value="display" :placeholder="placeholder"
      @click="toggle" ref="input" :readonly="readonly">
    <span class="du-month-picker_icon">
      <slot name="icon"></slot>
    </span>
  </span>
  <du-month-calendar slot="overlay" ref="calendar"
    :year="year" :month="month" :locale="locale"
    @change="change" @select="select" tabindex="0">
  </du-month-calendar>
</du-picker>
</template>

<script>
export default {
  name: 'du-month-picker',
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
    var year, month, selected
    return {year, month, selected}
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
      this.$refs.popup.toggleOff()
      this.$nextTick(() => {
        this.selected = [this.year, this.month]
        this.$emit('input', _format(this.year, this.month))
      })
      this.$refs.input.focus()
    },
    keypress(e) {
      this.$refs.calendar.keypress(e)
    },
    toggle() {
      this.$refs.popup.toggle()
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

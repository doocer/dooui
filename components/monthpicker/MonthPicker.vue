<template>
<div class="du-month-picker" @keydown="keypress">
  <span class="du-month-picker_box" ref="box">
    <i class="du-icon" :class="icon" aria-hidden="true" v-if="icon"></i>
    <input type="text" :name="name" :value="display"
      :placeholder="placeholder" ref="input" readonly>
  </span>
  <div class="du-month-picker_overlay" v-show="visible"
    ref="pop" :style="style">
    <du-month-calendar :year="year" :month="month" :locale="locale"
      @change="change" @select="select" tabindex="0" ref="ca">
    </du-month-calendar>
  </div>
</div>
</template>

<script>
import mixin from '../connect/mixin'
export default {
  name: 'du-month-picker',
  mixins: [mixin],
  props: {
    name: String,
    placeholder: String,
    icon: String,
    value: String,
    locale: String,
    placement: {
      type: String,
      default: 'bottom-left'
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
        return _format(this.selected[0], this.selected[1])
      }
    }
  },
  methods: {
    change(ym) {
      this.year = ym[0]
      this.month = ym[1]
    },
    select() {
      this.$nextTick(() => {
        this.selected = [this.year, this.month]
        this.$emit('input', _format(this.year, this.month))
      })
      this.$refs.input.focus()
    },
    keypress(e) {
      this.$refs.ca.keypress(e)
    },
  },
  mounted() {
    this.connect(this.$refs.box)
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

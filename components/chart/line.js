import {animationProps} from './mixins'

export default {
  name: 'du-chart-line',
  mixins: [animationProps],
  props: {
    name: String,
    data: Array,
    stack: String,
    connectNulls: {
      type: Boolean,
      default: false
    },
    clipOverfow: {
      type: Boolean,
      default: true
    },
    step: {
      type: [String, Boolean],
      default: false
    },
    smooth: {
      type: Boolean,
      default: false,
    },
    smoothMonotone: {
      type: String,
      choices: ['x', 'y']
    },
    sampling: {
      type: String,
      choices: ['average', 'max', 'min', 'sum']
    },
  },
  computed: {
    seriesOption() {
      var rv = {type: 'line'}
      var props = this.$options.propsData
      Object.keys(props).forEach(k => {
        rv[k] = props[k]
      })
      return rv
    }
  },
  render(h) {
    return
  },
  mounted() {
    this.$parent.series.push(this.seriesOption)
  }
}

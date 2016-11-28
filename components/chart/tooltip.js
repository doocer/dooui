export default {
  name: 'du-chart-tooltip',
  props: {
    showContent: {
      type: Boolean,
      default: true
    },
    trigger: {
      type: String,
      default: 'item'
    },
    triggerOn: {
      type: String,
      default: 'mousemove'
    },
    alwaysShowContent: {
      type: Boolean,
      default: false
    },
    showDelay: {
      type: Number,
      default: 0
    },
    hideDelay: {
      type: Number,
      default: 100
    },
    enterable: {
      type: Boolean,
      default: false
    },
    position: {
      type: [String, Array, Function]
    },
    confine: {
      type: Boolean,
      default: false
    },
    transitionDuration: {
      type: Number,
      default: 0.4
    },
    formatter: {
      type: [String, Function]
    },
    backgroundColor: String,
    borderColor: String,
    borderWidth: {
      type: Number,
      default: 0
    },
    padding: {
      type: Number,
      default: 5
    }
  },
  computed: {
    chartOption() {
      var rv = {show: true}
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
    this.$parent.setOption('tooltip', this.chartOption)
  }
}

export default {
  name: 'du-chart-grid',
  props: {
    z: {
      type: Number,
      default: 2
    },
    zlevel: {
      type: Number,
      default: 0
    },
    left: {
      type: [String, Number],
      default: 'auto'
    },
    top: {
      type: [String, Number],
      default: 60
    },
    right: {
      type: [String, Number],
      default: '10%'
    },
    bottom: {
      type: [String, Number],
      default: 60
    },
    width: {
      type: [String, Number],
      default: 'auto'
    },
    height: {
      type: [String, Number],
      default: 'auto'
    },
    borderColor: {
      type: String,
      default: '#ddd'
    },
    borderWidth: {
      type: Number,
      default: 1
    }
  },
  computed: {
    chartOption() {
      return {
        show: true,
        z: this.z,
        zlevel: this.zlevel,
        left: this.left,
        top: this.top,
        right: this.right,
        bottom: this.bottom,
        width: this.width,
        height: this.height,
        borderColor: this.borderColor,
        borderWidth: this.borderWidth
      }
    }
  },
  render(h) {
    return
  },
  created() {
    this.$parent.setOption('grid', this.chartOption)
  }
}

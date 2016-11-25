const echarts = require('echarts')

const Chart = {
  name: 'du-chart',
  props: {
    animation: {
      type: Boolean,
      default: true
    },
  },
  data() {
    return {
      options: {},
      series: [],
    }
  },
  computed: {
    chartOption() {
      return {
        animation: this.animation,
        series: this.series,
      }
    }
  },
  methods: {
    addSeries(option) {
      this.series = this.series.concat(option)
    },
    setOption(key, value) {
      this.options[key] = value
    }
  },
  render(h) {
    return h('div', {'class': 'du-chart'})
  },
  mounted: {
    this._canvas = echarts.init(this.$el)
    // TODO: watch option
    this._canvas.setOption(this.chartOption)
  }
}

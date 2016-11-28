import echarts from 'echarts'

const COLORS = [
  '#03A9F4', '#49C784', '#F7BA2A', '#FF612F',
  '#0EA0E2', '#42B983', '#F1B52A', '#F55826',
  '#8492A6', '#1F2D3D', '#99A9BF', '#36495D',
  '#C23531', '#61A0A8', '#D48265', '#749F83',
  '#CA8622', '#6E7074', '#546570', '#C4CCD3'
]

export default {
  name: 'du-chart',
  props: {
    width: {
      type: Number,
      default: 0,
    },
    height: {
      type: Number,
      default: 400,
    },
    animation: {
      type: Boolean,
      default: true
    },
    backgroundColor: {
      type: String,
      default: 'transparent'
    },
    colors: {
      type: Array,
      default: () => COLORS
    }
  },
  data() {
    return {
      options: {},
      series: [],
      visualMap: [],
    }
  },
  computed: {
    chartOption() {
      var rv = {}
      Object.keys(this.options).forEach(k => {
        rv[k] = this.options[k]
      })
      rv.animation = this.animation
      rv.series = this.series
      rv.color = this.colors
      rv.visualMap = this.visualMap
      rv.backgroundColor = this.backgroundColor
      return rv
    }
  },
  methods: {
    setOption(key, value) {
      this.options[key] = value
    }
  },
  render(h) {
    var style = {}
    if (this.width) {
      style['width'] = this.width + 'px'
    }
    if (this.height) {
      style['height'] = this.height + 'px'
    }
    return h(
      'div', {'class': 'du-chart', style: style},
      this.$slots.default
    )
  },
  mounted() {
    this.$chart = echarts.init(this.$el)
    this.$chart.setOption(this.chartOption)
  },
  beforeDestroy() {
    if (this.chart) {
      this.chart.dispose()
      this.chart = null
    }
  }
}

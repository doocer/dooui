import echarts from 'echarts'
import {animationProps} from './mixins'

const COLORS = [
  '#03A9F4', '#49C784', '#F7BA2A', '#FF612F',
  '#0EA0E2', '#42B983', '#F1B52A', '#F55826',
  '#8492A6', '#1F2D3D', '#99A9BF', '#36495D',
  '#C23531', '#61A0A8', '#D48265', '#749F83',
  '#CA8622', '#6E7074', '#546570', '#C4CCD3'
]

export default {
  name: 'du-chart',
  mixins: [animationProps],
  props: {
    width: {
      type: Number,
      default: 0,
    },
    height: {
      type: Number,
      default: 400,
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
      var options = {
        series: this.series,
        visualMap: this.visualMap,
        color: this.colors,
        backgroundColor: this.backgroundColor,
        animation: this.animation,
        animationThreshold: this.animationThreshold,
        animationDuration: this.animationDuration,
        animationEasing: this.animationEasing,
        animationDelay: this.animationDelay,
        animationDurationUpdate: this.animationDurationUpdate,
        animationEasingUpdate: this.animationEasingUpdate,
        animationDelayUpdate: this.animationDelayUpdate,
      }
      Object.keys(this.options).forEach(k => {
        options[k] = this.options[k]
      })
      return options
    }
  },
  methods: {
    setOption(key, value) {
      this.options[key] = value
    },
    refresh() {
      if (this.$chart) {
        this.$chart.setOption(this.chartOption)
      }
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
    this.refresh()
  },
  beforeDestroy() {
    if (this.$chart) {
      this.$chart.dispose()
      this.$chart = null
    }
  }
}

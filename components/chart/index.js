import echarts from 'echarts'
import {xAxis, yAxis} from './axis'
import Line from './line'

const Chart = {
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
  },
  data() {
    return {
      options: {},
      series: [],
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
      return rv
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
    var style = {}
    if (this.width) {
      style['width'] = this.width + 'px'
    }
    if (this.height) {
      style['height'] = this.height + 'px'
    }
    return h('div', {'class': 'du-chart', style: style}, this.$slots.default)
  },
  mounted() {
    this._canvas = echarts.init(this.$el)
    // TODO: watch option
    this._canvas.setOption(this.chartOption)
  }
}

function install(Vue) {
  Vue.component(Chart.name, Chart)
  Vue.component(xAxis.name, xAxis)
  Vue.component(yAxis.name, yAxis)
  Vue.component(Line.name, Line)
}

export default {install}

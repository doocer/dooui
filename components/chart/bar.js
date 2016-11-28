import {animationProps, seriesMixin} from './mixins'

export default {
  name: 'du-chart-bar',
  mixins: [animationProps, seriesMixin],
  props: {
    name: String,
    data: Array,
    stack: String,
    legendHoverLink: {
      type: Boolean,
      default: true
    },
    xAxisIndex: {
      type: Number,
      default: 0
    },
    yAxisIndex: {
      type: Number,
      default: 0
    },
    barWidth: {
      type: [Number, String]
    },
    barMaxWidth: {
      type: [Number, String]
    },
    barMinHeight: {
      type: Number,
      default: 0
    },
    barGap: {
      type: String,
      default: '30%'
    },
    barCategoryGap: {
      type: String,
      default: '30%'
    },
  },
    computed: {
    seriesOption() {
      return {
        type: 'bar',
        name: this.name,
        data: this.data,
        stack: this.stack,

        legendHoverLink: this.legendHoverLink,
        xAxisIndex: this.xAxisIndex,
        yAxisIndex: this.yAxisIndex,
        barWidth: this.barWidth,
        barMaxWidth: this.barMaxWidth,
        barMinHeight: this.barMinHeight,
        barGap: this.barGap,
        barCategoryGap: this.barCategoryGap,

        animation: this.animation,
        animationThreshold: this.animationThreshold,
        animationDuration: this.animationDuration,
        animationEasing: this.animationEasing,
        animationDelay: this.animationDelay,
        animationDurationUpdate: this.animationDurationUpdate,
        animationEasingUpdate: this.animationEasingUpdate,
        animationDelayUpdate: this.animationDelayUpdate,
      }
    }
  }
}

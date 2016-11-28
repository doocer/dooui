import {animationProps, seriesMixin} from './mixins'

export default {
  name: 'du-chart-line',
  mixins: [animationProps, seriesMixin],
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
      return {
        type: 'line',
        name: this.name,
        data: this.data,
        stack: this.stack,
        connectNulls: this.connectNulls,
        clipOverfow: this.clipOverfow,
        step: this.step,
        smooth: this.smooth,
        smoothMonotone: this.smoothMonotone,
        sampling: this.sampling,
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

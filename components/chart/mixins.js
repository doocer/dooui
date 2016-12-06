export const animationProps = {
  props: {
    animation: {
      type: Boolean,
      default: true
    },
    animationThreshold: {
      type: Number,
      default: 2000
    },
    animationDuration: {
      type: Number,
      default: 1000
    },
    animationEasing: {
      type: String,
      default: 'linear'
    },
    animationDelay: {
      type: [Number, Function],
      default: 0
    },
    animationDurationUpdate: {
      type: Number,
      default: 300
    },
    animationEasingUpdate: {
      type: String,
      default: 'cubicOut'
    },
    animationDelayUpdate: {
      type: [Number, Function],
      default: 0
    }
  }
}

export const seriesMixin = {
  data() {
    return {id: null}
  },
  watch: {
    seriesOption(val) {
      this.$parent.series[this.id - 1] = val
      this.$parent.refresh(true)
    }
  },
  render(h) {
    return
  },
  created() {
    this.$parent.series.push(this.seriesOption)
    this.id = this.$parent.series.length
  }
}

export const optionMixin = {
  render(h) {
    return
  },
  created() {
    const name = this.$options.chartOption
    this.$parent.setOption(name, this.chartOption)
  }
}

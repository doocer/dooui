const NAME_LOCATIONS = ['start', 'middle', 'end']
const TYPES = ['category', 'value', 'time', 'log']

function choiceValidate(choices) {
  return function(value) {
    return choices.indexOf(value) !== -1
  }
}

const axisMixin = {
  props: {
    data: Array,
    gridIndex: Number,
    offset: Number,
    formatter: String,
    boundaryGap: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    chartOption() {
      return {
        type: this.type,
        data: this.data,
        gridIndex: this.gridIndex,
        offset: this.offset,
        boundaryGap: this.boundaryGap,
        axisLabel: {
          formatter: this.formatter
        }
      }
    }
  },
  render(h) {
    return
  },
}

export const xAxis = {
  name: 'du-chart-x-axis',
  mixins: [axisMixin],
  props: {
    type: {
      type: String,
      default: 'category',
      validator: choiceValidate(TYPES)
    },
    nameLocation: {
      type: String,
      default: 'end',
      validator: choiceValidate(NAME_LOCATIONS)
    }
  },
  created() {
    this.$parent.setOption('xAxis', this.chartOption)
  }
}

export const yAxis = {
  name: 'du-chart-y-axis',
  mixins: [axisMixin],
  props: {
    type: {
      type: String,
      default: 'value',
      validator: choiceValidate(TYPES)
    },
    nameLocation: {
      type: String,
      default: 'end',
      validator: choiceValidate(NAME_LOCATIONS)
    }
  },
  created() {
    this.$parent.setOption('yAxis', this.chartOption)
  }
}

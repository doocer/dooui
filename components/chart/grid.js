const Grid = {
  name: 'du-chart-grid',
  props: {
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
      }
    }
  },
  mounted: {
    this.$parent.setOption('grid', this.chartOption)
  }
}

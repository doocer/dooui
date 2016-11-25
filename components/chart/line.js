const Line = {
  name: 'du-chart-line',
  props: {
    data: Array,
  },
  computed: {
    seriesOption() {
      return {
        type: 'line',
        data: this.data,
      }
    }
  },
  mounted: {
    this.$parent.addSeries(this.seriesOption)
  }
}

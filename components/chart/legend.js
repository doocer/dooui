export default {
  name: 'du-chart-legend',
  props: {
  },
  computed: {
    chartOption() {
      return {
        show: true,
      }
    }
  },
  created() {
    this.$parent.setOption('legend', this.chartOption)
  }
}

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
  mounted() {
    this.$parent.setOption('legend', this.chartOption)
  }
}

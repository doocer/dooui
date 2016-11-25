export default {
  name: 'du-chart-line',
  props: {
    name: String,
    data: Array,
  },
  computed: {
    seriesOption() {
      return {
        type: 'line',
        name: this.name,
        data: this.data,
      }
    }
  },
  render(h) {
    return
  },
  mounted() {
    this.$parent.addSeries(this.seriesOption)
  }
}

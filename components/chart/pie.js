import {animationProps, seriesMixin} from './mixins'

export default {
  name: 'du-chart-pie',
  mixins: [animationProps, seriesMixin],
  props: {
    name: String,
    data: Array,
    legendHoverLink: {
      type: Boolean,
      default: true
    },
    hoverAnimation: {
      type: Boolean,
      default: true
    },
    selectedMode: {
      type: [Boolean, String],
      default: false
    },
    selectedOffset: {
      type: Number,
      default: 10
    },
    clockwise: {
      type: Boolean,
      default: true
    },
    startAngle: {
      type: Number,
      default: 90
    },
    minAngle: {
      type: Number,
      default: 0
    },
    roseType: {
      type: [Boolean, String],
      default: false
    },
    avoidLabelOverlap: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    seriesOption() {
      return {
        type: 'pie',
        name: this.name,
        data: this.data,

        legendHoverLink: this.legendHoverLink,
        hoverAnimation: this.hoverAnimation,
        selectedMode: this.selectedMode,
        selectedOffset: this.selectedOffset,
        clockwise: this.clockwise,
        startAngle: this.startAngle,
        minAngle: this.minAngle,
        barCategoryGap: this.barCategoryGap,
        roseType: this.roseType,
        avoidLabelOverlap: this.avoidLabelOverlap,

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

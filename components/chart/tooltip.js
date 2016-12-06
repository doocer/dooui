import {optionMixin} from './mixins'

export default {
  name: 'du-chart-tooltip',
  chartOption: 'tooltip',
  mixins: [optionMixin],
  props: {
    showContent: {
      type: Boolean,
      default: true
    },
    trigger: {
      type: String,
      default: 'item'
    },
    triggerOn: {
      type: String,
      default: 'mousemove'
    },
    alwaysShowContent: {
      type: Boolean,
      default: false
    },
    showDelay: {
      type: Number,
      default: 0
    },
    hideDelay: {
      type: Number,
      default: 100
    },
    enterable: {
      type: Boolean,
      default: false
    },
    position: {
      type: [String, Array, Function]
    },
    confine: {
      type: Boolean,
      default: false
    },
    transitionDuration: {
      type: Number,
      default: 0.4
    },
    formatter: {
      type: [String, Function]
    },
    backgroundColor: {
      type: String,
      default: 'rgba(50,50,50,0.7)'
    },
    borderColor: {
      type: String,
      default: '#333'
    },
    borderWidth: {
      type: Number,
      default: 0
    },
    padding: {
      type: Number,
      default: 5
    }
  },
  computed: {
    chartOption() {
      return {
        show: true,
        showContent: this.showContent,
        trigger: this.trigger,
        triggerOn: this.triggerOn,
        alwaysShowContent: this.alwaysShowContent,
        showDelay: this.showDelay,
        hideDelay: this.hideDelay,
        enterable: this.enterable,
        position: this.position,
        confine: this.confine,
        transitionDuration: this.transitionDuration,
        formatter: this.formatter,
        backgroundColor: this.backgroundColor,
        borderColor: this.borderColor,
        borderWidth: this.borderWidth,
        padding: this.padding,
      }
    }
  }
}

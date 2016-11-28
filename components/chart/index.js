import Chart from './chart'
import {xAxis, yAxis} from './axis'
import Line from './line'
import Tooltip from './tooltip'


function install(Vue) {
  Vue.component(Chart.name, Chart)
  Vue.component(xAxis.name, xAxis)
  Vue.component(yAxis.name, yAxis)
  Vue.component(Tooltip.name, Tooltip)
  Vue.component(Line.name, Line)
}

export default {install}

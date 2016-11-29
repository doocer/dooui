import Chart from './chart'
import {xAxis, yAxis} from './axis'
import Tooltip from './tooltip'
import Line from './line'
import Bar from './bar'
import Pie from './pie'


function install(Vue) {
  Vue.component(Chart.name, Chart)
  Vue.component(xAxis.name, xAxis)
  Vue.component(yAxis.name, yAxis)
  Vue.component(Tooltip.name, Tooltip)
  Vue.component(Line.name, Line)
  Vue.component(Bar.name, Bar)
  Vue.component(Pie.name, Pie)
}

export default {install}

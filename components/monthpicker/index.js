import MonthPicker from './MonthPicker.vue'
import MonthCalendar from './MonthCalendar.vue'
import MonthPanel from './MonthPanel.vue'
import MonthTable from './MonthTable.vue'

function install(Vue) {
  Vue.component(MonthPicker.name, MonthPicker)
  Vue.component(MonthCalendar.name, MonthCalendar)
  Vue.component(MonthPanel.name, MonthPanel)
  Vue.component(MonthTable.name, MonthTable)
}

export default {MonthCalendar, MonthPanel, MonthTable, install}

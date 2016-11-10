<template>
<table class="du-month-table">
  <tr v-for="cols in rows">
    <td v-for="col in cols" :class="{'Active': month == col.value}">
      <a role="button" v-text="col.label"
        @click.prevent="selectMonth(col.value)">
      </a>
    </td>
  </tr>
</table>
</template>

<script>
const MONTHS = [
  'Jan', 'Feb', 'Mar',
  'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep',
  'Oct', 'Nov', 'Dec',
]
export default {
  name: 'du-month-table',
  props: {
    months: {
      type: Array,
      default: () => MONTHS
    },
    month: {
      type: Number,
      required: true
    }
  },
  computed: {
    rows() {
      return [
        genRows(0, 3, this.months),
        genRows(3, 6, this.months),
        genRows(6, 9, this.months),
        genRows(9, 12, this.months),
      ]
    }
  },
  methods: {
    selectMonth(value) {
      this.$emit('month-change', value)
    },
    changeMonth(delta) {
      var value = this.current + delta
      if (value < 1) {
        this.$emit('year-delta', -1)
        value = 12 + value
      } else if (value > 12) {
        this.$emit('year-delta', +1)
        value = 12 - value
      }
      this.selectMonth(value)
    },
    up() {
      this.changeMonth(-3)
    },
    down() {
      this.changeMonth(+3)
    },
    left() {
      this.changeMonth(-1)
    },
    right() {
      this.changeMonth(+1)
    }
  }
}

function genRows(start, end, months) {
  var rows = []
  while (start < end) {
    rows.push({value: start + 1, label: months[start]})
    start += 1
  }
  return rows
}
</script>

<template>
<table class="du-month-table">
  <tr v-for="cols in rows">
    <td v-for="col in cols" :class="{'Current': current == col.value}">
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
  props: {
    months: {
      type: Array,
      default: () => MONTHS
    },
    current: {
      type: Number,
      default: () => {
        var d = new Date()
        return d.getMonth() + 1
      }
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
      this.current = value
      this.$emit('select', value)
    },
    changeMonth(delta) {
      var value = this.current + delta
      if (value < 1) {
        this.$emit('year-change', -1)
        value = 12 + value
      } else if (value > 12) {
        this.$emit('year-change', +1)
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

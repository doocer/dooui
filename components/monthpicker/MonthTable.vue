<template>
<table class="du-month-table" role="grid">
  <tr v-for="cols in rows">
    <td role="gridcell" v-for="col in cols"
      @click.prevent="select(col.value)"
      :title="col.label" :class="{'Active': current == col.value}">
      <a role="button" v-text="col.label"></a>
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
      default: () =>{
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
  watch: {
    month(m) {
      this.current = m
    },
    current(m) {
      this.$emit('change', m)
    }
  },
  data() {
    return {
      current: this.month
    }
  },
  methods: {
    select(value) {
      this.current = value
      this.$emit('select')
    },
    keypress(e) {
      var deltaMap = {
        37: -1,  // left
        38: -3,  // up
        39: +1,  // right
        40: +3  // down
      }
      var delta = deltaMap[e.keyCode]
      var value = this.current + delta
      if (value < 1) {
        this.$emit('year-delta', -1)
        value = 12 + value
      } else if (value > 12) {
        this.$emit('year-delta', +1)
        value = value - 12
      }
      this.current = value
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

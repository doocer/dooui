<template>
<table class="du-month-table" role="grid">
  <tr v-for="cols in rows">
    <td role="gridcell" v-for="col in cols"
      @click.prevent="select(col.value)"
      :title="col.long" :class="{'Active': current == col.value}">
      <a role="button" v-text="col.short"></a>
    </td>
  </tr>
</table>
</template>

<script>
const YEAR = 2016

export default {
  name: 'du-month-table',
  props: {
    locale: {
      type: String,
      default: () => {
        return navigator.language || 'en'
      }
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
        genRows(0, 3, this.locale),
        genRows(3, 6, this.locale),
        genRows(6, 9, this.locale),
        genRows(9, 12, this.locale)
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
        40: +3,  // down
        13: 0    // enter
      }
      var delta = deltaMap[e.keyCode]
      if (!delta) {
        if (delta === 0) {
          this.$emit('select')
        }
        return
      }
      e.preventDefault()
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

function genRows(start, end, locale) {
  var rows = []
  while (start < end) {
    rows.push(genRow(start, locale))
    start += 1
  }
  return rows
}

function genRow(month, locale) {
  var date = new Date(YEAR, month)
  var short = date.toLocaleString(locale, {month: 'short'})
  var long = date.toLocaleString(locale, {month: 'long'})
  return {value: month + 1, short, long}
}
</script>

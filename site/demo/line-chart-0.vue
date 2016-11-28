<template>
<div>
<du-chart>
  <du-chart-x-axis :data="['Mon','Tue','Wen','Thu','Fri','Sat','Sun']">
  </du-chart-x-axis>
  <du-chart-y-axis formatter="{value} °C"></du-chart-y-axis>
  <du-chart-tooltip trigger="axis"></du-chart-tooltip>
  <du-chart-line name="High" :data="data" :area="area"></du-chart-line>
</du-chart>
<button class="du-button" @click="data=genData()">Change</button>
<button class="du-button" @click="area=true">Area</button>
</div>
</template>

<script>
export default {
  data() {
    return {data: [11, 11, 15, 13, 12, 13, 10], area: false}
  },
  methods: {
    genData() {
      var numbers = []
      var count = 7
      while (count > 0) {
        count -= 1
        numbers.push(parseInt(Math.random() * 40, 10))
      }
      return numbers
    }
  }
}
</script>

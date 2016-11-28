<template>
<div>
<du-chart>
  <du-chart-x-axis :boundaryGap="true" :data="['Mon','Tue','Wen','Thu','Fri','Sat','Sun']">
  </du-chart-x-axis>
  <du-chart-tooltip></du-chart-tooltip>
  <du-chart-bar name="High" :data="data">
  </du-chart-bar>
</du-chart>
<button class="du-button" @click="data=genData()">Change</button>
</div>
</template>

<script>
export default {
  data() {
    return {data: [11, 11, 15, 13, 12, 13, 10]}
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

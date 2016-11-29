<template>
<du-chart>
  <du-chart-tooltip></du-chart-tooltip>
  <du-chart-pie name="Score" :data="data">
  </du-chart-pie>
</du-chart>
</template>

<script>
export default {
  data() {
    return {data: [
      {name: 'Math', value: 90},
      {name: 'Art', value: 60},
      {name: 'Physics', value: 82},
      {name: 'Sports', value: 20},
      {name: 'English', value: 36},
    ]}
  }
}
</script>

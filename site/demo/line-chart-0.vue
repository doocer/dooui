<template>
<du-chart>
  <du-chart-x-axis :data="['Mon','Tue','Wen','Thu','Fri','Sat','Sun']">
  </du-chart-x-axis>
  <du-chart-y-axis formatter="{value} °C"></du-chart-y-axis>
  <du-chart-tooltip trigger="axis"></du-chart-tooltip>
  <du-chart-line name="High" :data="[11, 11, 15, 13, 12, 13, 10]">
  </du-chart-line>
</du-chart>
</template>

<template>
<div class="v-home">
  <div class="row">
    <div class="col-6">
      <du-card>A</du-card>
    </div>
    <div class="col-6">
      <du-select :optgroups="optgroups"></du-select>
    </div>
  </div>
  <div class="row">
    <div class="col-6">
      <du-select :options="options" placeholder="Select"></du-select>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      options: [
        {label: 'Japan'},
        {label: 'Korea', disabled: true},
        {label: 'China'}
      ],
      optgroups: [
        {
          label: 'Asia',
          options: [
            {label: 'Japan'},
            {label: 'Korea', disabled: true},
            {label: 'China'}
          ]
        },
        {
          label: 'Europe',
          options: [
            {label: 'UK'},
            {label: 'German'}
          ]
        }
      ]
    }
  }
}
</script>

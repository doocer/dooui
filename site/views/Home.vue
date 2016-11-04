<template>
<div class="v-home">
  <div class="row">
    <div class="col-6">
      <du-card>A</du-card>
    </div>
    <div class="col-6">
      <du-select :optgroups="optgroups" search></du-select>
    </div>
  </div>
  <div class="row">
    <div class="col-6">
      <du-select :options="options" placeholder="Select" v-model="choice"></du-select>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      choice: {label: 'Finland'},
      options: [
        {label: 'Japan'},
        {label: 'Korea', disabled: true},
        {label: 'China'},
        {label: 'US'},
        {label: 'Sigapore'},
        {label: 'France'},
        {label: 'German'},
        {label: 'Finland'},
        {label: 'India'},
        {label: 'Thai'},
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

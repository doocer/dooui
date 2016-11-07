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
      choice: {value: 'Japan'},
      options: [
        {value: 'Japan'},
        {value: 'Korea', disabled: true},
        {value: 'China'},
        {value: 'US'},
        {value: 'Sigapore'},
        {value: 'France'},
        {value: 'German'},
        {value: 'Finland'},
        {value: 'India'},
        {value: 'Thai'},
      ],
      optgroups: [
        {
          label: 'Asia',
          options: [
            {value: 'Japan'},
            {value: 'Korea', disabled: true},
            {value: 'China'}
          ]
        },
        {
          label: 'Europe',
          options: [
            {value: 'UK'},
            {value: 'German'}
          ]
        }
      ]
    }
  }
}
</script>

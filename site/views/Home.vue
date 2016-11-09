<template>
<div class="v-home">
  <div class="row">
    <div class="col-6">
      <du-card>A</du-card>
      <du-select filter>
        <du-option :value="item.value" :disabled="item.disabled"
          v-for="item in options">
        </du-option>
      </du-select>
    </div>
    <div class="col-6">
      <du-select v-model="choice">
        <du-option :value="item.value" :disabled="item.disabled"
          v-for="item in options">
        </du-option>
      </du-select>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      choice: 'German',
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

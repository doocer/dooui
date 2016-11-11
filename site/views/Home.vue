<template>
<div class="v-home">
  <div class="row">
    <div class="col-6">
      <div style="padding: 20px">
        <du-month-picker v-model="ym" placeholder="Select" :format="format" locale="zh"></du-month-picker>
        <du-select filter>
          <du-option :value="item.value" :disabled="item.disabled"
            v-for="item in options">
          </du-option>
        </du-select>
      </div>
    </div>
    <div class="col-6">
      <du-select v-model="choice">
        <du-option :value="item.value" :disabled="item.disabled"
          v-for="item in options">
        </du-option>
      </du-select>
    </div>
  </div>
  <div class="row">
    <div class="col-12">
      <du-select v-model="choice" filter>
        <du-optgroup :label="group.label" v-for="group in optgroups">
          <du-option :value="item.value" :disabled="item.disabled"
            v-for="item in group.options">
          </du-option>
        </du-optgroup>
      </du-select>
    </div>
  </div>
</div>
</template>

<script>
export default {
  methods: {
    format(y, m) {
      return y + '.' + m
    }
  },
  data() {
    return {
      show: true,
      ym: '',
      choice: 'German',
      options: [
        {value: 'Japan'},
        {value: 'Korea', disabled: true},
        {value: 'China'},
        {value: 'US'},
        {value: 'Sigapore of Sigapore of Sigapore'},
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

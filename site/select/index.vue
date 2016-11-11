<template>
<div class="view-select">
  <du-select v-model="choice" filter>
    <du-option :value="item.value" :disabled="item.disabled"
      v-for="item in options">
    </du-option>
  </du-select>
  <input v-model="choice">
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
        {value: 'Sigapore of Sigapore of Sigapore'},
        {value: 'France'},
        {value: 'German'},
        {value: 'Finland'},
        {value: 'India'},
        {value: 'Thai'},
      ],
    }
  }
}
</script>

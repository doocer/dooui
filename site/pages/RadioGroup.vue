<template>
<div class="view-radio-group content">
  <du-radio-group name="lang" :options="options" v-model="lang">
  </du-radio-group>
</div>
</template>

<script>
const options = [
  {value: 'en', label: 'English'},
  {value: 'zh', label: 'Chinese'},
  {value: 'ja', label: 'Japanese'},
]
export default {
  data() {
    return {options, lang: 'en'}
  }
}
</script>

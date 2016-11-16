<template>
<div>
<du-checkbox label="One" v-model="checked"></du-checkbox>
<du-checkbox label="Two" v-model="checked"></du-checkbox>
<du-checkbox label="Three" v-model="checked" disabled></du-checkbox>
<du-checkbox label="" disabled checked></du-checkbox>
<p>Checked: {{checked}}</p>
</div>
</template>

<script>
export default {
  data() {
    return {checked: []}
  }
}
</script>

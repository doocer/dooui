<template>
<div>
<label class="du-checkbox">
  <input type="checkbox" value="One" v-model="checked">One
</label>
<label class="du-checkbox">
  <input type="checkbox" value="Two" v-model="checked">Two
</label>
<label class="du-checkbox">
  <input type="checkbox" value="Three" disabled v-model="checked">Three
</label>
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

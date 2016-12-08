<template>
<div>
<label class="du-radio">
  <input type="radio" value="One" v-model="picked">One
</label>
<label class="du-radio">
  <input type="radio" value="Two" v-model="picked">Two
</label>
<label class="du-radio Disabled">
  <input type="radio" value="Three" disabled v-model="picked">Three
</label>
<p>Picked: {{picked}}</p>
</div>
</template>

<script>
export default {
  data() {
    return {picked: ''}
  }
}
</script>

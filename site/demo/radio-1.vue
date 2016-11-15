<template>
<div>
<du-radio label="One" v-model="picked"></du-radio>
<du-radio label="Two" v-model="picked"></du-radio>
<du-radio label="Three" v-model="picked" disabled></du-radio>
<p>Picked: {{picked}}</p>
</div>
</template>

<script>
export default {
  data() {
    return {picked: 'hello'}
  }
}
</script>

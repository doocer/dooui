<template>
<div>
  <du-switch v-model="on"></du-switch>
  <du-switch disabled v-model="on"></du-switch>
</div>
</template>

<script>
export default {
  data() {
    return {on: false}
  }
}
</script>

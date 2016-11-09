<template>
<span class="du-selected-item" v-text="label"></span>
</template>

<script>
export default {
  props: {
    item: Object
  },
  computed: {
    label() {
      return this.item.label || this.item.value || ''
    }
  }
}
</script>

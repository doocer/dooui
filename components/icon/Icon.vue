<template>
<i class="du-icon fa" :class="'fa-' + name" :aria-hidden="hidden" :aria-label="label"></i>
</template>

<script>
export default {
  name: 'du-icon',
  props: {
    name: {
      type: String,
      required: true
    },
    label: {
      type: String,
      default: ''
    }
  },
  computed: {
    hidden() {
      return !this.label
    }
  }
}
</script>

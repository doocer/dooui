<template>
<i class="du-icon" :class="classes" :aria-hidden="hidden" :aria-label="label"></i>
</template>

<script>
export default {
  name: 'du-icon',
  props: {
    use: {
      type: String,
      default: 'fa'
    },
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
    classes() {
      return [this.use, this.use + '-' + this.name]
    },
    hidden() {
      return !this.label
    }
  }
}
</script>

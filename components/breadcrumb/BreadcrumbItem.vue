<template>
<span class="du-breadcrumb_item">
  <slot></slot>
  <span class="du-breadcrumb_sep" v-text="separator" aria-hidden="true">
  </span>
</span>
</template>

<script>
export default {
  name: 'du-breadcrumb-item',
  computed: {
    separator() {
      return this.$parent.separator
    }
  }
}
</script>

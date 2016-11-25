<template>
<div class="du-breadcrumb">
  <slot></slot>
</div>
</template>

<script>
export default {
  name: 'du-breadcrumb',
  props: {
    separator: {
      type: String,
      default: '/'
    }
  }
}
</script>

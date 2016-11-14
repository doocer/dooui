<template>
<button class="du-button" :type="type" :disabled="disabled">
  <i class="du-icon" :class="icon" aria-hidden="true" v-if="icon"></i>
  <slot></slot>
</button>
</template>

<script>
export default {
  name: 'du-button',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'button'
    },
    icon: String,
  }
}
</script>

<style src="./style.css"></style>

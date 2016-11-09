<template>
<div class="du-row">
  <slot></slot>
</div>
</template>

<script>
export default {
  name: 'du-row',
  props: {
    gutter: Number
  },
  data() {
    return {
      cols: []
    }
  }
}
</script>

<style src="./style.css"></style>

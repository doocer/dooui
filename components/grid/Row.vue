<template>
<div class="du-row" :style="style">
  <slot></slot>
</div>
</template>

<script>
export default {
  name: 'du-row',
  props: {
    gap: Number,
    gutter: Number,
  },
  computed: {
    style() {
      var style = {}, margin
      if (this.gutter) {
        margin = -this.gutter / 2 + 'px'
        style['margin-left'] = margin
        style['margin-right'] = margin
      }
      return style
    }
  },
  data() {
    return {
      cols: []
    }
  }
}
</script>

<style src="./style.css"></style>

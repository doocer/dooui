<template>
<div class="du-col" :class="'du-col-'+span" :style="style">
  <slot></slot>
</div>
</template>

<script>
export default {
  name: 'du-col',
  props: {
    span: {
      type: Number,
      required: true
    }
  },
  computed: {
    style() {
      var style = {}
      var gutter = this.$parent.gutter
      if (gutter) {
        gutter = gutter / 2 + 'px'
        style['padding-left'] = gutter
        style['padding-right'] = gutter
      }
      var gap = this.$parent.gap
      if (gap) {
        gap = gap / 2 + 'px'
        style['padding-top'] = gap
        style['padding-bottom'] = gap
      }
      return style
    },
  },
  created() {
    this.$parent.cols.push(this)
  },
}
</script>

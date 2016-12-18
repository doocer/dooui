<template>
<div class="du-pagination">
  <slot></slot>
</div>
</template>

<script>
export default {
  name: 'du-pagination',
  props: {
    total: {
      type: Number,
      required: true
    },
    perpage: {
      type: Number,
      default: 10
    },
    page: {
      type: Number,
      default: 1
    },
  },
  computed: {
    pagesCount() {
      return parseInt((this.total - 1) / this.perpage, 10) + 1
    },
    pages() {
      var count = parseInt((this.total - 1) / this.perpage, 10) + 1
      var i = 0, last = 0
      var rv = []
      while (i <= count) {
        if (
          i <= this.leftEdge ||
          (
            i > this.current - this.leftCurrent - 1 &&
            i < this.current + this.rightCurrent
          ) ||
          i > count - this.right_edge
        ) {
          rv.push(i)
          last = i
        }
      }
      return rv
    }
  },
}
</script>

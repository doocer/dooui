<template>
<div class="du-pagination">
</div>
</template>

<script>
export default {
  props: {
    total: {
      type: Number,
      required: true
    },
    leftEdge: {
      type: Number,
      default: 1
    },
    leftCurrent: {
      type: Number,
      default: 2
    },
    rightEdge: {
      type: Number,
      default: 1
    },
    rightCurrent: {
      type: Number,
      default: 4
    },
    perpage: {
      type: Number,
      required: true,
    },
    current: {
      type: Number,
      required: true,
    },
  },
  computed: {
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

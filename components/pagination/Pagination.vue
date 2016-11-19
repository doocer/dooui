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
      var i = 0
      var rv = []
      while (i <= count) {
        rv.push(i)
      }
      return rv
    }
  }
}
</script>

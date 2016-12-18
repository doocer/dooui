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
  data() {
    return {
      current: this.page
    }
  },
  computed: {
    pagesCount() {
      return parseInt((this.total - 1) / this.perpage, 10) + 1
    },
  },
  methods: {
    select(num) {
      if (num && num !== this.current) {
        this.current = num
        this.$emit('change', num)
      }
    }
  }
}
</script>

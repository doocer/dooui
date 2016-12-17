<template>
<ul class="du-pagination_pager">
  <li v-if="prev" :class="{'Disabled': !prevNum}">
    <a class="du-arrow Left" @click="select(prevNum)"></a>
  </li>
  <li v-if="next" :class="{'Disabled': !nextNum}">
    <a class="du-arrow Right" @click="select(nextNum)"></a>
  </li>
</ul>
</template>

<script>
export default {
  name: 'du-pagination-pager',
  props: {
    prev: {
      type: Boolean,
      default: false
    },
    next: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      current: this.$parent.value
    }
  },
  computed: {
    prevNum() {
      return this.current - 1
    },
    nextNum() {
      if (this.current < this.$parent.pagesCount) {
        return this.current + 1
      }
    },
  },
  methods: {
    select(num) {
      if (!num) return
      this.current = num
      this.$parent.$emit('change', num)
      this.$parent.$emit('input', num)
    }
  }
}
</script>

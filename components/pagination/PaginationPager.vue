<template>
<ul class="du-pagination_pager">
  <li v-if="prev" :class="{'Disabled': !prevNum}">
    <a class="du-arrow Left" @click="select(prevNum)"></a>
  </li>
  <li :class="{'Current': current==1}"><a @click="select(1)">1</a></li>
  <li v-show="leftEdge"><a @click="selectLeft">…</a></li>
  <li v-for="p in pages" :class="{'Current': p==current}">
    <a @click="select(p)" v-text="p"></a>
  </li>
  <li v-show="rightEdge"><a @click="selectRight">…</a></li>
  <li :class="{'Current': current==pagesCount}"><a @click="select(pagesCount)" v-text="pagesCount"></a></li>
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
    },
    edge: {
      type: Number,
      default: 4
    }
  },
  computed: {
    current() {
      return this.$parent.current
    },
    pagesCount() {
      return this.$parent.pagesCount
    },
    prevNum() {
      return this.current - 1
    },
    nextNum() {
      if (this.current < this.pagesCount) {
        return this.current + 1
      }
    },
    leftEdge() {
      return this.pagesCount > 10 && this.current > this.edge
    },
    rightEdge() {
      const limit = this.pagesCount - this.edge
      return this.pagesCount > 10 && this.current < limit
    },
    pages() {
      var rv = []
      var i = this.current
      var left = 2, right = this.pagesCount - 1

      if (this.leftEdge && !this.rightEdge) {
        left = Math.max(3, this.pagesCount - 2 * this.edge + 2)
      } else if (!this.leftEdge && this.rightEdge) {
        right = Math.min(2 * this.edge - 1, this.pagesCount)
      } else if (this.leftEdge && this.rightEdge) {
        left = i - (this.edge - 2)
        right = i + (this.edge - 2)
      }
      for (var i = left; i <= right; i++) {
        rv.push(i)
      }
      return rv
    }
  },
  methods: {
    select(num) {
      this.$parent.select(num)
    },
    selectLeft() {
      this.select(this.current - this.edge)
    },
    selectRight() {
      this.select(this.current + this.edge)
    }
  }
}
</script>

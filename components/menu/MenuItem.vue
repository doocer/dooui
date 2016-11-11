<template>
<router-link class="du-menu_item" tag="li" active-class="Active" :to="to">
  <a>
    <i class="du-icon" :class="icon" aria-hidden="true" v-if="icon"></i>
    <span class="du-menu_text"><slot></slot></span>
  </a>
</router-link>
</template>

<script>
export default {
  name: 'du-menu-item',
  props: {
    icon: String,
    to: {
      type: [String, Object],
      required: true
    }
  },
  computed: {
    active() {
      var target = this.$router.match(this.to)
      return target.path === this.$route.path
    }
  },
  created() {
    if (this.$parent.items) {
      this.$parent.items.push(this)
    }
  },
  beforeDestroy() {
    if (this.$parent.items) {
      var index = this.$parent.items.indexOf(this)
      this.$parent.items.splice(index, 1)
    }
  }
}
</script>

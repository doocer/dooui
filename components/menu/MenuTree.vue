<template>
<li class="du-menu_tree" :class="{'Active': active, 'Open': open}">
  <span class="du-menu_title" @click.prevent="toggleOpen">
    <i class="du-icon" :class="icon" aria-hidden="true" v-if="icon"></i>
    <span class="du-menu_text"><slot name="title"></slot></span>
    <i class="du-menu_angle"></i>
  </span>
  <ul class="du-menu_group">
    <slot></slot>
  </ul>
</li>
</template>

<script>
export default {
  name: 'du-menu-tree',
  props: {
    icon: String,
  },
  data() {
    return {
      active: false,
      open: false,
    }
  },
  methods: {
    toggleOpen() {
      this.open = !this.open
    },
    hasActive() {
      return Boolean(this.$el.querySelector('.Active'))
    }
  },
  watch: {
    "$route.path": function() {
      this.$nextTick(() => {
        this.active = this.hasActive()
      })
    }
  },
  mounted() {
    if (this.hasActive()) {
      this.active = true
      this.open = true
    }
  }
}
</script>

<template>
<li class="du-menu_tree" :class="{'Active': active}">
  <span class="du-menu_title" @click.prevent="toggleOpen">
    <i class="du-icon" :class="icon" v-if="icon" aria-hidden="true"></i>
    <span class="du-menu_text"><slot name="title"></slot></span>
  </span>
  <transition>
    <ul class="du-menu_group" v-show="open">
      <slot></slot>
    </ul>
  </transition>
</li>
</template>

<script>
export default {
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
    }
  },
  mounted() {
    if (this.$el.querySelector('.Active')) {
      this.active = true
      this.open = true
    }
  }
}
</script>

<template>
<li class="du-menu_tree" :class="{'Active': active, 'Open': open}">
  <span class="du-menu_title" @click.prevent="open = !open">
    <i class="du-icon" :class="icon" aria-hidden="true" v-if="icon"></i>
    <span class="du-menu_text"><slot name="title"></slot></span>
    <i class="du-arrow"></i>
  </span>
  <ul class="du-menu_group" v-show="open">
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
      items: [],
      open: false,
    }
  },
  computed: {
    active() {
      return Boolean(this.items.filter(o => o.active).length)
    }
  },
  mounted() {
    this.open = this.active
  }
}
</script>

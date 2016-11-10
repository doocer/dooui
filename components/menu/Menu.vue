<template>
<ul class="du-menu">
  <li class="du-menu_head" v-if="title" v-text="title"></li>
  <slot></slot>
</ul>
</template>

<script>
export default {
  name: 'du-menu',
  props: {
    title: String
  }
}
</script>

<style src="./style.css"></style>

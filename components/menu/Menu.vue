<template>
<ul class="du-menu">
  <li class="du-menu_head" v-if="title" v-text="title"></li>
  <slot></slot>
</ul>
</template>

<script>
export default {
  props: {
    title: String
  }
}
</script>

<style>
.du-menu {
  list-style-type: none;
  margin: 0;
  padding: 0;
  white-space: nowrap;
  overflow: hidden;
}
.du-menu_head {
  padding: 10px 25px 10px 18px;
  box-sizing: border-box;
  font-size: 12px;
}
</style>

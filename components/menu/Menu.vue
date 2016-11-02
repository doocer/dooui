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
.du-menu,
.du-menu_group {
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
  font-weight: 400;
  background-color: var(--menu-head-bg);
  color: var(--menu-head-color);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
.du-menu li > a,
.du-menu li > span {
  display: block;
  color: var(--menu-text-color);
  text-decoration: none;
}
.du-menu > li > a,
.du-menu > li > span {
  font-size: 14px;
  padding: 12px 5px 12px 15px;
  border-left: 3px solid transparent;
  cursor: pointer;
}
.du-menu .du-icon {
  margin-right: 4px;
  font-size: inherit;
}
.du-menu_group li {
  padding-left: 15px;
  background-color: var(--menu-group-bg);
}
.du-menu_group > li > a {
  font-size: 14px;
  padding: 6px;
  color: var(--menu-group-color);
}
.du-menu > li > a:hover,
.du-menu > li > span:hover {
  background-color: var(--menu-hover-bg);
  border-color: var(--menu-border-color);
}
.du-menu > li.Active > a,
.du-menu > li.Active > span {
  color: var(--menu-active-color);
  background-color: var(--menu-active-bg);
  border-color: var(--menu-border-color);
}
.du-menu li a:hover,
.du-menu li a:hover,
.du-menu_group li.Active a {
  color: var(--menu-active-color);
}
.Collapse .du-menu_head,
.Collapse .du-menu_text {
  display: none;
}
</style>

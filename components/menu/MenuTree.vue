<template>
<li class="du-menu_tree">
  <transition class="du-menu_title">
    <slot name="title"></slot>
  </transition>
  <transition class="du-menu_items">
    <ul class="du-menu">
      <slot></slot>
    </ul>
  </transition>
</li>
</template>

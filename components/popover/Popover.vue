<template>
<div style="display:none">
  <div class="du-popover" :class="altPlacement" :style="style"
    v-show="visible" ref="pop">
    <div class="du-popover_inner">
      <div class="du-popover_title">
        <slot name="title">{{title}}</slot>
      </div>
      <div class="du-popover_content">
        <slot name="content">{{content}}</slot>
      </div>
    </div>
    <span class="du-popover_arrow"></span>
  </div>
</div>
</template>

<script>
import connectMixin from '../connect/mixin'
export default {
  name: 'du-popover',
  gap: 4,
  mixins: [connectMixin],
  props: {
    title: {
      type: String
    },
    content: {
      type: String
    }
  }
}
</script>

<style>
.du-popover {
  position: absolute;
  min-width: 110px;
}
.du-popover_inner {
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
  background-color: var(--color-white);
  border-radius: 3px;
}
.du-popover_title {
  padding: 0 16px;
  line-height: 2;
}
.du-popover_content {
  padding: 8px 16px;
}
</style>

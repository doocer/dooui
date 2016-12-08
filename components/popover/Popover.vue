<template>
<div class="du-popover" v-show="visible">
  <div class="du-popover_title">
    <slot name="title">{{title}}</slot>
  </div>
  <div class="du-popover_content">
    <slot>{{content}}</slot>
  </div>
</div>
</template>

<script>
import connectMixin from '../connect/mixin'
export default {
  name: 'du-popover',
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

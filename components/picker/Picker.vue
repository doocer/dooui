<template>
<div class="du-picker" v-out:click="toggleOff"
  :class="{'Active': active}">
  <slot></slot>
  <div class="du-picker_overlay" ref="overlay" :style="style">
    <slot name="overlay"></slot>
  </div>
</div>
</template>

<script>
import out from 'vue-document-event'
export default {
  name: 'du-picker',
  directives: {out},
  data() {
    return {active: false, style: {}}
  },
  methods: {
    toggleOff() {
      this.active = false
    },
    toggle() {
      this.active = !this.active
      if (this.active) {
        this.resetStyle()
      }
    },
    resetStyle() {
      var rect = this.$el.getBoundingClientRect()
      var vh = document.documentElement.clientHeight
      var eh = this.$refs.overlay.clientHeight
      if (vh - rect.bottom < eh && rect.top > eh) {
        this.style = {
          bottom: rect.height + 'px',
          'transform-origin': 'bottom'
        }
      } else {
        this.style = {'transform-origin': 'top'}
      }
    },
  }
}
</script>

<style>
.du-picker {
  position: relative;
  display: inline-block;
}
.du-picker_overlay {
  position: absolute;
  left: 0;
  right: 0;
  opacity: 0;
  transform: scaleY(0);
  transition: all 0.15s ease;
  z-index: 1000;
}
.du-picker.Active .du-picker_overlay {
  opacity: 1;
  transform: scaleY(1);
}
</style>

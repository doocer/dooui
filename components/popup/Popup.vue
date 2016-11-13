<template>
<div class="du-popup" v-out:click="toggleOff"
  :class="{'Active': active}">
  <slot></slot>
  <div class="du-popup_overlay" ref="overlay" :style="style">
    <slot name="overlay"></slot>
  </div>
</div>
</template>

<script>
import out from 'vue-document-event'
export default {
  name: 'du-popup',
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
.du-popup {
  position: relative;
  display: inline-block;
}
.du-popup_overlay {
  position: absolute;
  left: 0;
  right: 0;
  opacity: 0;
  transform: scaleY(0);
  transition: all 0.15s ease;
  z-index: 1000;
}
.du-popup.Active .du-popup_overlay {
  opacity: 1;
  transform: scaleY(1);
}
</style>

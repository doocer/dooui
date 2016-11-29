<template>
<transition name="dialog">
<div class="du-dialog"
  v-show="visible" @click.self="close">
  <div class="du-dialog_mask" v-if="mask" @click.self="close"></div>
  <div class="du-dialog_content" :style="style">
    <div class="du-dialog_head">
      <div class="du-dialog_title">
        <slot name="title">{{title}}</slot>
      </div>
      <span class="du-dialog_close" @click="close"></span>
    </div>
    <div class="du-dialog_body">
      <slot></slot>
    </div>
    <div class="du-dialog_foot">
      <slot name="foot">
        <button class="du-button Line Red" v-text="cancelText"
          v-if="cancelText" @click="clickCancel"></button>
        <button class="du-button Blue" v-text="confirmText"
          @click="clickConfirm"></button>
      </slot>
    </div>
  </div>
</div>
</transition>
</template>

<script>
export default {
  name: 'du-dialog',
  props: {
    mask: {
      type: Boolean,
      default: true
    },
    top: {
      type: String,
      default: '15%'
    },
    width: {
      type: String,
      default: '50%'
    },
    title: {
      type: String,
      default: ''
    },
    confirmText: {
      type: String,
      default: 'OK'
    },
    cancelText: {
      type: String,
      default: 'Cancel'
    }
  },
  data() {
    return {
      visible: true
    }
  },
  computed: {
    style() {
      return {
        top: this.top,
        width: this.width,
      }
    }
  },
  methods: {
    open() {
      this.visible = true
    },
    close() {
      this.visible = false
    },
    clickConfirm() {
      this.$emit('confirm', this)
    },
    clickCancel() {
      this.$emit('cancel', this)
      this.visible = false
    }
  }
}
</script>

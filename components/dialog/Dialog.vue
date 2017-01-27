<template>
<transition name="dialog">
<div class="du-dialog" v-show="visible">
  <div class="du-dialog_mask" v-if="mask" @click.self="close"></div>
  <div class="du-dialog_content" :style="style">
    <div class="du-dialog_head">
      <div class="du-dialog_title">
        <slot name="title">{{title}}</slot>
      </div>
      <span class="du-dialog_close" @click="close"></span>
    </div>
    <div class="du-dialog_body">
    </div>
    <div class="du-dialog_foot">
      <slot name="foot">
        <button class="du-button Line" v-text="cancelText"
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
const CONFIG = {
  visible: false,
  mask: true,
  top: '15%',
  width: '50%',
  title: '',
  content: '',
  confirmText: null,
  onConfirm: null,
  cancelText: null,
  onCancel: null,
}
export default {
  name: 'du-dialog',
  data() {
    return CONFIG
  },
  computed: {
    style() {
      return {
        top: this.top,
        width: this.width,
      }
    },
  },
  methods: {
    show({title, content, confirmText, onConfirm, cancelText, onCancel, mask=true}) {
      this.mask = mask
      this.title = title

      if (typeof content === 'object' && content.render) {
        this.content = null
        this.$options.components['content'] = content
      } else {
        this.content = content
      }
      this.confirmText = confirmText
      this.onConfirm = onConfirm
      this.cancelText = cancelText
      this.onCancel = onCancel

      // TODO: next tick
      this.visible = true
    },
    close() {
      this.visible = false
    },
    clickConfirm() {
      if (!this.onConfirm) {
        return this.visible = false
      }
      const resp = this.onConfirm()
      if (!resp) {
        return
      }
      if (resp === true) {
        return this.visible = false
      }
      resp.then((data) => {
        this.visible = !data
      })
    },
    clickCancel() {
      this.visible = false
      if (this.onCancel) {
        this.onCancel()
      }
    }
  }
}
</script>

<style src="./dialog.css"></style>

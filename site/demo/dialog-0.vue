<template>
<div>
  <button class="du-button" @click="open">Show Dialog</button>
  <du-dialog class="Blue" title="A Dialog" ref="dialog">
    <p>Here is the content of the dialog.</p>
  </du-dialog>
</div>
</template>

<script>
export default {
  methods: {
    open() {
      this.$refs.dialog.open()
    }
  }
}
</script>

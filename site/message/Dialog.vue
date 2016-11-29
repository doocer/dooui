<template>
<div class="view-dialog content">
  <demo file="dialog-0.vue">
    <h2>Dialog</h2>
  </demo>
  <doc-attrs name="du-dialog" :descriptions="attrDocs"></doc-attrs>
</div>
</template>

<script>
const attrDocs = [
  ['mask', 'transparent black mask below dialog'],
  ['top', 'top offset of the dialog'],
  ['width', 'dialog box width'],
  ['title', 'title of the dialog'],
  ['confirmText', 'text for the confirm button'],
  ['cancelText', 'text for the cancle button'],
]

export default {
  data() {
    return {
      attrDocs: attrDocs,
    }
  }
}
</script>

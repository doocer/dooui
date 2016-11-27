<template>
<div class="view-radio content">
  <demo file="radio-0.vue">Radio</demo>
  <demo file="radio-1.vue">Radio</demo>
  <doc :descriptions="docs" name="du-radio"></doc>
</div>
</template>

<script>
const docs = [
  ['name', 'The <code>name</code> attribute of the <code>&lt;input&gt;</code> tag.'],
  ['label', ''],
  ['value', ''],
  ['disabled', ''],
]
export default {
  data() {
    return {docs: docs}
  }
}
</script>

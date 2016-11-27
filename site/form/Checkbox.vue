<template>
<div class="view-checkbox content">
  <demo file="checkbox-0.vue">
    <h2>Native Checkbox</h2>
    <p>This is a light weight css only solution for Chrome and Safari. Pseudo class for <code>&lt;input&gt;</code> only works on Chrome and Safari.</p>
  </demo>
  <demo file="checkbox-1.vue">
    <h2>Checkbox Component</h2>
    <p>A compatible <code>&lt;du-checkbox&gt;</code> for all browsers.</p>
  </demo>
  <doc :descriptions="docs" name="du-checkbox"></doc>
</div>
</template>

<script>
const docs = [
  ['name', 'The <code>name</code> attribute of the <code>&lt;input&gt;</code> tag.'],
  ['label', ''],
  ['value', ''],
  ['disabled', ''],
  ['checked', ''],
]
export default {
  data() {
    return {docs: docs}
  }
}
</script>

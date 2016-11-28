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
  <doc-attrs :descriptions="docs" name="du-checkbox">
    <div class="du-box_foot">
      Fill <code>$slot</code> with different descriptions: <code>&lt;du-checkbox&gt;</code>Not label property value<code>&lt;/du-checkbox&gt;</code>.
    </div>
  </doc-attrs>
</div>
</template>

<script>
const docs = [
  ['name'],
  ['label', ''],
  ['value'],
  ['disabled'],
  ['checked', ''],
]
export default {
  data() {
    return {docs: docs}
  }
}
</script>

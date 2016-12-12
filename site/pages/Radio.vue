<template>
<div class="view-radio content">
  <demo file="radio-0.vue">
    <h2>Native Radio</h2>
    <p>This is a light weight css only solution with <code>.du-radio</code> class. Pseudo class for <code>&lt;input&gt;</code> only works on Chrome and Safari.</p>
  </demo>
  <demo file="radio-1.vue">
    <h2>Radio Component</h2>
    <p>A compatible <code>&lt;du-radio&gt;</code> for all browsers.</p>
  </demo>
  <doc-attrs :attrs="attrDocs" name="du-radio">
    <div class="du-box_foot">
      Fill <code>$slot</code> with different descriptions: <code>&lt;du-radio&gt;</code>Not label property value<code>&lt;/du-radio&gt;</code>.
    </div>
  </doc-attrs>
</div>
</template>

<script>
const attrDocs = [
  ['name', 'The <code>name</code> attribute of the <code>&lt;input&gt;</code> tag.'],
  ['label', ''],
  ['value', ''],
  ['disabled', ''],
]
export default {
  data() {
    return {attrDocs}
  }
}
</script>

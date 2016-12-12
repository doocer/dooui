<template>
<div class="view-radio content">
  <demo file="switch-0.vue">
    <h2><code>&lt;du-switch&gt;</code></h2>
  </demo>
  <doc-attrs name="du-switch" :attrs="attrDocs"></doc-attrs>
</div>
</template>

<script>
const attrDocs = [
  ['name'],
  ['value'],
  ['disabled']
]
export default {
  data() {
    return {attrDocs}
  }
}
</script>

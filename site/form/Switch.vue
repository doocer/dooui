<template>
<div class="view-radio content">
  <demo file="switch-0.vue">
    <h2><code>&lt;du-switch&gt;</code></h2>
  </demo>
  <doc-attrs name="du-switch" :descriptions="docs"></doc-attrs>
</div>
</template>

<script>
const docs = [
  ['name'],
  ['value'],
  ['disabled']
]
export default {
  data() {
    return {docs: docs}
  }
}
</script>

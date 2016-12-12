<template>
<div class="view-tab content">
  <demo file="tab-0.vue">
    <h2>Tab</h2>
  </demo>
  <doc-attrs name="du-tab" :attrs="tabAttrs"></doc-attrs>
</div>
</template>

<script>
const tabAttrs = [
  ['position', 'Tabs position']
]
export default {
  data() {
    return {tabAttrs}
  }
}
</script>

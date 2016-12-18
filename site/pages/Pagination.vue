<template>
<div class="view-pagination content">
  <demo file="pagination-0.vue">
    <h2>Simple Pagination</h2>
    <p>Create a simple pagination with <code>&lt;du-pagination&gt;</code> &amp; <code>&lt;du-pagination-pager&gt;</code>.</p>
  </demo>
  <demo file="pagination-1.vue">
    <h2>Pagination Properties</h2>
    <p>More properties for <code>&lt;du-pagination&gt;</code> &amp; <code>&lt;du-pagination-pager&gt;</code>. Component will emit <code>@change</code>.</p>
  </demo>
  <demo file="pagination-2.vue">
    <h2>Pagination Goto</h2>
    <p>Add a goto component <code>&lt;du-pagination-goto&gt;</code>.</p>
  </demo>
  <doc-attrs :attrs="rootAttrs" name="du-pagination">
    <div class="du-box_foot">
      Fill <code>$slot</code> with children components.
    </div>
  </doc-attrs>
  <doc-events name="du-pagination" :events="rootEvents"></doc-events>
  <doc-attrs :attrs="pagerAttrs" name="du-pagination-pager">
  </doc-attrs>
  <doc-attrs :attrs="gotoAttrs" name="du-pagination-goto">
    <div class="du-box_foot">
      You can also fill <code>$slot</code> with label content.
    </div>
  </doc-attrs>
</div>
</template>

<script>
const rootAttrs = [
  ['total', 'Count of total items'],
  ['perpage', 'Count of items per page'],
  ['page', 'Current page number'],
]
const rootEvents = [
  ['change', 'page number is selected', 'number'],
]
const pagerAttrs = [
  ['prev', 'Show prev arrow'],
  ['next', 'Show next arrow'],
  ['edge', 'Edge count of current page'],
]
const gotoAttrs = [
  ['label', 'Description of goto label']
]
export default {
  data() {
    return {rootAttrs, rootEvents, pagerAttrs, gotoAttrs}
  }
}
</script>

<style>
.view-pagination .du-pagination + .du-pagination {
  margin-top: 18px;
}
</style>

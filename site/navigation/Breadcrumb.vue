<template>
<div class="view-breadcrumb content">
  <demo file="breadcrumb-0.vue">
    <h2>Breadcrumb</h2>
    <p><code>&lt;du-breadcrumb&gt;</code> and its child <code>&lt;du-breadcrumb-item&gt;</code>.</p>
  </demo>
  <demo file="breadcrumb-1.vue">
    <h2>Separator</h2>
    <p><code>&lt;du-breadcrumb&gt;</code> has one prop: <code>separator</code>.</p>
  </demo>
  <doc-attrs name="du-breadcrumb" :descriptions="breadcrumbDocs"></doc-attrs>
  <du-box class="Blue">
    <h2 slot="head"><code>&lt;du-breadcrumb-item&gt;</code></h2>
    <p>If <code>$slot</code> part is a link, it will be highlighted.</p>
  </du-box>
</div>
</template>

<script>
export default {
  data() {
    return {
      breadcrumbDocs: [
        ['separator', 'separator between each breadcrumb item']
      ]
    }
  }
}
</script>

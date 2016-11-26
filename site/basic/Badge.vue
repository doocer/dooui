<template>
<div class="view-badge content">
  <demo file="badge-0.vue">
    <h2>Badges</h2>
    <p>A badge is described with class <code>du-badge</code>. Badges can be colorized.</p>
  </demo>
  <demo class="mixed-badges" file="badge-1.vue">
    <h2>Button Badges</h2>
    <p>Badges can be located in buttons. Use <code>&lt;sup&gt;</code> tag to locate badges to the right top of buttons.</p>
  </demo>
</div>
</template>

<style>
.mixed-badges .du-button + .du-button {
  margin-left: 20px;
}
</style>

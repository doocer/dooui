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
  <div class="du-box Blue">
    <h2 class="du-box_head"><code>&lt;du-checkbox&gt;</code></h2>
    <table class="component-props">
      <thead>
        <tr>
          <th>Property</th>
          <th>Type</th>
          <th>Description</th>
          <th>Default</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>name</td>
          <td>String</td>
          <td>The <code>name</code> attribute of the <code>&lt;input&gt;</code> tag.</td>
          <td>—</td>
        </tr>
        <tr>
          <td>label</td>
          <td>String</td>
          <td></td>
          <td>""</td>
        </tr>
        <tr>
          <td>value</td>
          <td>Array/String</td>
          <td></td>
          <td>—</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>Boolean</td>
          <td></td>
          <td>false</td>
        </tr>
        <tr>
          <td>checked</td>
          <td>Boolean</td>
          <td></td>
          <td>false</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
</template>

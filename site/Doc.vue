<template>
<div class="du-box doc Blue">
  <h2 class="du-box_head"><code>&lt;{{name}}&gt;</code></h2>
  <table>
    <thead>
      <tr>
        <th>Property</th>
        <th>Type</th>
        <th>Description</th>
        <th>Default</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="line in descriptions">
        <td>{{line[0]}}<span class="doc-require" v-if="isRequired(line[0])">*</span></td>
        <td v-text="typeName(line[0])"></td>
        <td v-html="line[1]"></td>
        <td v-text="defaultValue(line[0])"></td>
      </tr>
    </tbody>
  </table>
</div>
</template>

<script>
import Vue from 'vue'
export default {
  props: {
    name: String,
    descriptions: Array,
  },
  computed: {
    props() {
      const VM = Vue.component(this.name)
      return VM.options.props
    }
  },
  methods: {
    isRequired(key) {
      var item = this.props[key]
      return item.required
    },
    typeName(key) {
      var item = this.props[key]
      if (Array.isArray(item.type)) {
        return item.type.map(t => t.name).join('/')
      }
      return item.type.name
    },
    defaultValue(key) {
      var item = this.props[key]
      if (item.default === undefined) {
        return '—'
      }
      if (item.default === "") {
        return '""'
      }
      return item.default.toString()
    }
  }
}
</script>

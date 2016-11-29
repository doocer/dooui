<template>
<div class="du-box doc Yellow">
  <h2 class="du-box_head"><code>&lt;{{name}}&gt;</code> Events</h2>
  <table>
    <thead>
      <tr>
        <th>Event</th>
        <th>Description</th>
        <th>Callback</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="line in events">
        <td>{{line[0]}}</td>
        <td v-html="line[1]"></td>
        <td v-text="line[2]"></td>
      </tr>
    </tbody>
  </table>
  <slot></slot>
</div>
</template>

<script>
export default {
  props: {
    name: String,
    events: Array,
  },
  computed: {
    props() {
      const VM = Vue.component(this.name)
      return VM.options.props
    }
  },
}
</script>

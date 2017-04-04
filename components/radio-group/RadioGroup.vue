<template>
<div class="du-radio-group">
  <label v-for="o in options" :key="o.value">
    <input type="radio" v-model="_value"
        :name="name" :value="o.value" :disabled="o.disabled">
    <span v-text="o.label"></span>
  </label>
</div>
</template>

<script>
export default {
  name: 'du-radio-group',
  props: {
    options: Array,
    name: {
      type: String,
      required: true
    },
    value: String,
  },
  computed: {
    _value: {
      get() {
        return this.value
      },
      set(v) {
        this.$emit('input', v)
      }
    },
  }
}
</script>

<style src="./style.css"></style>

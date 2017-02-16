<template>
<label class="du-switch" :class="{'Checked': checked, 'Disabled': disabled}">
  <input type="checkbox" v-model="checked" :name="name" :disabled="disabled">
  <span class="du-switch_handle"></span>
</label>
</template>

<script>
export default {
  name: 'du-switch',
  props: {
    name: String,
    value: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {checked: false}
  },
  watch: {
    value: {
      immediate: true,
      handler(v) {
        this.checked = v
      }
    },
    checked(v) {
      this.$emit('input', v)
    }
  }
}
</script>

<style src="./style.css"></style>

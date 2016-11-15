<template>
<label class="du-checkbox" :class="{'Checked': checked, 'Disabled': disabled}">
  <span class="du-checkbox_box">
    <input type="checkbox" v-model="checked" :disabled="disabled">
  </span>
  <slot>{{label}}</slot>
</label>
</template>

<script>
export default {
  name: 'du-checkbox',
  props: {
    value: {
      type: [Boolean, Array]
    },
    label: {
      type: String,
      default: ''
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
        if (Array.isArray(v)) {
          this.checked = v.indexOf(this.label) !== -1
        } else {
          this.checked = v
        }
      }
    },
    checked(v) {
      var rv
      if (Array.isArray(this.value)) {
        if (v) {
          rv = this.value.concat(this.label)
        } else {
          rv = this.value.filter(d => d !== this.label)
        }
      } else {
        rv = v
      }
      this.$emit('input', rv)
    }
  }
}
</script>

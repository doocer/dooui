<template>
<label class="du-checkbox" :class="{'Checked': isCheck, 'Disabled': disabled}">
  <span class="du-checkbox_box">
    <input type="checkbox" v-model="isCheck" :disabled="disabled">
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
    },
    checked: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {isCheck: this.checked}
  },
  watch: {
    value: {
      immediate: true,
      handler(v) {
        var isCheck
        if (Array.isArray(v)) {
          isCheck = v.indexOf(this.label) !== -1
        } else {
          isCheck = v || this.checked
        }
        this.isCheck = isCheck
      }
    },
    isCheck(v) {
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

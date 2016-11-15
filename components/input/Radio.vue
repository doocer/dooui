<template>
<label class="du-radio" :class="{'Checked': checked, 'Disabled': disabled}">
  <span class="du-radio_box">
    <input type="radio" v-model="_value"
      :name="name" :value="label" :disabled="disabled">
  </span>
  <slot>{{label}}</slot>
</label>
</template>

<script>
export default {
  name: 'du-radio',
  props: {
    name: String,
    value: String,
    label: {
      type: String,
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false
    }
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
    checked() {
      return this._value == this.label
    }
  }
}
</script>

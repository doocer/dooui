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

<style>
.du-switch {
  position: relative;
  display: inline-block;
  height: 24px;
  width: 42px;
  border-radius: 24px;
  box-sizing: border-box;
  background: var(--color-gray);
  border: solid 2px var(--color-gray);
  cursor: pointer;
  vertical-align: middle;
  pointer-events: auto;
  transition: all 0.15s ease;
}
.du-switch input {
  position: absolute;
  height: 0;
  width: 0;
  opacity: 0;
}
.du-switch.Checked {
  background: var(--color-blue);
  border-color: var(--color-blue);
}
.du-switch.Disabled {
  cursor: not-allowed;
  background: var(--color-lightgray);
  border-color: var(--color-lightgray);
}
.du-switch .du-switch_handle {
  position: absolute;
  left: 0;
  top: 0;
  display: inline-block;
  background: var(--color-white);
  border-radius: 100%;
  width: 20px;
  height: 20px;
  z-index: 99;
  transition: transform 0.3s ease;
}
.du-switch.Checked .du-switch_handle {
  transform: translate3d(18px, 0, 0);
}
</style>

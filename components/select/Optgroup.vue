<template>
<li class="du-optgroup" :class="{'Disabled': disabled}" role="group">
  <strong v-text="label" v-if="label"></strong>
  <ul><slot></slot></ul>
</li>
</template>

<script>
export default {
  name: 'du-optgroup',
  optgroup: true,
  props: {
    label: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

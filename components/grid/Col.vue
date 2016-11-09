<template>
<div class="du-col">
</div>
</template>

<script>
export default {
  name: 'du-col',
  props: {
    span: {
      type: Number,
      required: true
    }
  },
  created() {
    this.$parent.cols.push(this)
  },
}
</script>

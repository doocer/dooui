<template>
<div class="du-progress">
  <div class="du-progress_bar" role="progressbar"
    :aria-valuenow="value" aria-valuemin="0" aria-valuemax="100"
    :style="{width: value+'%'}"></div>
</div>
</template>

<script>
export default {
  name: 'du-progress',
  props: {
    value: {
      type: Number,
      required: true
    }
  },
}
</script>

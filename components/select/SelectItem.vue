<template>
<span class="du-select_item" v-text="item.label"></span>
</template>

<script>
export default {
  name: 'du-select-item',
  props: {
    item: Object,
  }
}
</script>

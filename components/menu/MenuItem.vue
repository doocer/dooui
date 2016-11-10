<template>
<router-link class="du-menu_item" tag="li" active-class="Active" :to="to">
  <a>
    <du-icon :name="icon" v-if="icon"></du-icon>
    <span class="du-menu_text"><slot></slot></span>
  </a>
</router-link>
</template>

<script>
export default {
  name: 'du-menu-item',
  props: {
    icon: String,
    to: {
      type: [String, Object],
      required: true
    }
  }
}
</script>

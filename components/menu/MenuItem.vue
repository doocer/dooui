<template>
<router-link class="du-menu_item" tag="li" active-class="Active"
  :to="path" exact>
  <a>
    <i class="du-icon" :class="icon" v-if="icon" aria-hidden="true"></i>
    <span class="du-menu_text"><slot></slot></span>
  </a>
</router-link>
</template>

<script>
export default {
  props: {
    icon: String,
    path: {
      required: true
    }
  }
}
</script>

<template>
<div class="du-tab">
  <div class="du-tab_bar" role="tablist">
    <div class="du-tab_navs">
      <div class="du-tab_tab" role="tab" v-for="item in items"
        :aria-selected="item.selected" @click="select(item)" ref="tabs">
        <div class="du-tab_inner" v-text="item.title"></div>
      </div>
    </div>
  </div>
  <div class="du-tab_content">
    <slot></slot>
  </div>
</div>
</template>

<script>
export default {
  name: 'du-tab',
  data() {
    return {
      active: 0,
      items: [],
    }
  },
  methods: {
    select(tab) {
      this.active = tab
    }
  },
  mounted() {
    this.active = this.items[0]
  }
}
</script>

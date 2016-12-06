<template>
<div id="app" class="du-root" :class="{'Collapse': collapse}">
  <div class="du-layout-main">
    <header class="du-layout-head">
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/">Home</router-link>
        <router-link to="/">Home</router-link>
      </nav>
    </header>
    <router-view class="du-layout-content"></router-view>
  </div>
  <aside class="du-layout-side Dark">
    <router-link to="/" class="du-layout-logo">
      <span>Doocer</span>
    </router-link>
    <side-nav></side-nav>
    <div>
      <du-switch></du-switch>
    </div>
  </aside>
</div>
</template>

<script>
import SideNav from './SideNav.vue'
export default {
  components: {SideNav},
  data () {
    return {
      collapse: false
    }
  }
}
</script>

<style src="../components/default-theme.css"></style>
<style src="./highlight.css"></style>
<style src="./style.css"></style>

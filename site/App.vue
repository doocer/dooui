<template>
<div id="app" class="dooui" :class="{'Collapse': collapse}">
  <div class="du-layout-main">
    <header class="du-layout-head">
      <nav class="du-layout-nav">
        <router-link to="/">Home</router-link>
        <router-link to="/">Home</router-link>
        <a href="https://github.com/lepture" target="_blank">GitHub</a>
      </nav>
    </header>
    <router-view class="du-layout-content"></router-view>
  </div>
  <aside class="du-layout-side" :class="{'Dark': dark}">
    <router-link to="/" class="du-layout-logo">
      <span>Doocer</span>
    </router-link>
    <side-nav :dark="dark"></side-nav>
    <div class="du-layout-bottom">
      <p>Created by <a href="http://lepture.com">Hsiaoming Yang</a></p>
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
      dark: true,
      collapse: false
    }
  }
}
</script>

<style src="../components/default-theme.css"></style>
<style src="./highlight.css"></style>
<style src="./style.css"></style>

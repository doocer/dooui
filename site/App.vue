<template>
<div id="app" class="du-root">
  <header class="du-layout-head">
    Dashboard
  </header>
  <aside class="du-layout-side">
    <a class="du-layout-logo">Dash</a>
    <div class="du-scroll">
      <du-menu title="Navigation">
        <du-menu-item>Dashboard 1</du-menu-item>
        <du-menu-item>Dashboard 2</du-menu-item>
        <du-menu-item>Dashboard 3</du-menu-item>
        <du-menu-item>Dashboard 3</du-menu-item>
        <du-menu-item>Dashboard 3</du-menu-item>
        <du-menu-item>Dashboard 3</du-menu-item>
        <du-menu-item>Dashboard 3</du-menu-item>
        <du-menu-item>Dashboard 3</du-menu-item>
        <du-menu-item>Dashboard 3</du-menu-item>
        <du-menu-item>Dashboard 3</du-menu-item>
        <du-menu-item>Dashboard 3</du-menu-item>
        <du-menu-item>Dashboard 3</du-menu-item>
        <du-menu-item>Dashboard 3</du-menu-item>
        <du-menu-item>Dashboard 3</du-menu-item>
        <du-menu-item>Dashboard 3</du-menu-item>
        <du-menu-item>Dashboard 3</du-menu-item>
        <du-menu-item>Dashboard 3</du-menu-item>
        <du-menu-item>Dashboard 3</du-menu-item>
        <du-menu-item>Dashboard 3</du-menu-item>
        <du-menu-item>Dashboard 3</du-menu-item>
        <du-menu-item>Dashboard 3</du-menu-item>
        <du-menu-item>Dashboard 3</du-menu-item>
        <du-menu-item>Dashboard 3</du-menu-item>
        <du-menu-item>Dashboard 3</du-menu-item>
        <du-menu-item>Dashboard 3</du-menu-item>
        <du-menu-item>Dashboard 3</du-menu-item>
      </du-menu>
    </div>
  </aside>
  <div class="du-layout-main">
    <router-view class="du-layout-content"></router-view>
  </div>
</div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style src="../components/default-theme.css"></style>
<style>
.du-scroll li {
}
</style>

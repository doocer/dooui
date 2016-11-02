<template>
<div id="app" class="du-root">
  <header class="du-layout-head">
    <router-link to="/" class="du-layout-logo">
      <span>Dashboard</span>
    </router-link>
    Dashboard
  </header>
  <aside class="du-layout-side">
    <div class="du-scroll">
      <du-menu title="Navigation">
        <du-menu-item path="/dashboard" icon="fa fa-tachometer">Dashboard 1</du-menu-item>
        <du-menu-tree>
          <span slot="title">Dashboard 2</span>
          <du-menu-item path="create">Hi</du-menu-item>
          <du-menu-item path="hi">Hi 2</du-menu-item>
        </du-menu-tree>
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

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
        <du-menu-item to="/dashboard" icon="fa fa-tachometer">Dashboard 1</du-menu-item>
        <du-menu-tree icon="fa fa-database">
          <span slot="title">Basic</span>
          <du-menu-item to="/grid/">Grid</du-menu-item>
        </du-menu-tree>
        <du-menu-tree icon="fa fa-database">
          <span slot="title">Form Control</span>
          <du-menu-item to="/select/">Select</du-menu-item>
          <du-menu-item to="/month-picker/">Month Picker</du-menu-item>
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

<template>
<div id="app" class="du-root">
  <header class="du-layout-head">
    <router-link to="/" class="du-layout-logo">
      <span>Doocer</span>
    </router-link>
    Dashboard
  </header>
  <aside class="du-layout-side">
    <div class="du-scroll">
      <du-menu title="Navigation">
        <du-menu-item icon="fa fa-television" to="/">Overview</du-menu-item>
        <du-menu-tree icon="fa fa-th-large">
          <span slot="title">Basic</span>
          <du-menu-item icon="fa fa-circle-o" to="/grid/">Grid</du-menu-item>
          <du-menu-item icon="fa fa-circle-o" to="/colors/">Colors</du-menu-item>
        </du-menu-tree>
        <du-menu-tree icon="fa fa-check-square-o">
          <span slot="title">Form</span>
          <du-menu-item icon="fa fa-circle-o" to="/select/">Select</du-menu-item>
        </du-menu-tree>
        <du-menu-tree icon="fa fa-calendar">
          <span slot="title">Time</span>
          <du-menu-item icon="fa fa-circle-o" to="/month-picker/">Month Picker</du-menu-item>
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
<style src="./style.css"></style>

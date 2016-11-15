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
      <du-menu title="Dashboard">
        <du-menu-item icon="fa fa-home" to="/">Home</du-menu-item>
        <du-menu-item icon="fa fa-graduation-cap" to="/design/">Design</du-menu-item>
      </du-menu>
      <du-menu title="Documentation">
        <du-menu-item icon="fa fa-television" to="/guide/">Guide</du-menu-item>
        <du-menu-tree icon="fa fa-th-large">
          <span slot="title">Basic</span>
          <du-menu-item to="/grid/">Grid</du-menu-item>
          <du-menu-item to="/colors/">Colors</du-menu-item>
          <du-menu-item to="/badge/">Badges</du-menu-item>
        </du-menu-tree>
        <du-menu-tree icon="fa fa-bell-o">
          <span slot="title">Message</span>
          <du-menu-item to="/dialog/">Dialog</du-menu-item>
          <du-menu-item to="/message/">Message</du-menu-item>
        </du-menu-tree>
        <du-menu-tree icon="fa fa-location-arrow">
          <span slot="title">Navigation</span>
          <du-menu-item to="/breadcrumb/">Breadcrumb</du-menu-item>
          <du-menu-item to="/navigation/">Navigation</du-menu-item>
          <du-menu-item to="/pagination/">Pagination</du-menu-item>
          <du-menu-item to="/step/">Step</du-menu-item>
        </du-menu-tree>
        <du-menu-tree icon="fa fa-check-square-o">
          <span slot="title">Form</span>
          <du-menu-item to="/button/">Button</du-menu-item>
          <du-menu-item to="/input/">Input</du-menu-item>
          <du-menu-item to="/radio/">Radio</du-menu-item>
          <du-menu-item to="/checkbox/">Checkbox</du-menu-item>
          <du-menu-item to="/slider/">Slider</du-menu-item>
          <du-menu-item to="/select/">Select</du-menu-item>
          <du-menu-item to="/autocomplete/">Autocomplete</du-menu-item>
        </du-menu-tree>
        <du-menu-tree icon="fa fa-calendar">
          <span slot="title">Time</span>
          <du-menu-item icon="fa fa-circle-o" to="/monthpicker/">Month Picker</du-menu-item>
        </du-menu-tree>
        <du-menu-tree icon="fa fa-pie-chart">
          <span slot="title">Chart</span>
          <du-menu-item to="/line-chart/">Line</du-menu-item>
          <du-menu-item to="/area-chart/">Area</du-menu-item>
          <du-menu-item to="/bar-chart/">Bar</du-menu-item>
          <du-menu-item to="/pie-chart/">Pie</du-menu-item>
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
<style src="./highlight.css"></style>
<style src="./style.css"></style>

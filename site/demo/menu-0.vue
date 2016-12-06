<template>
<du-menu class="Light" title="Dashboard">
  <du-menu-item icon="fa fa-home" to="/">Home</du-menu-item>
  <du-menu-tree icon="fa fa-bell-o">
    <span slot="title">Message</span>
    <du-menu-item to="/dialog/">Dialog</du-menu-item>
    <du-menu-item to="/message/">Message</du-menu-item>
  </du-menu-tree>
  <du-menu-tree icon="fa fa-location-arrow">
    <span slot="title">Navigation</span>
    <du-menu-item to="/breadcrumb/">Breadcrumb</du-menu-item>
    <du-menu-item to="/menu/">Menu</du-menu-item>
  </du-menu-tree>
</du-menu>
</template>

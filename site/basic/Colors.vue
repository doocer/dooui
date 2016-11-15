<template>
<div class="view-colors content">
  <du-box class="Blue">
    <div slot="head">Main Colors</div>
    <du-row :gutter="10">
      <du-col :span="3">
        <div class="color-block" style="background:#03A9F4">Blue<em>#03A9F4</em></div>
        <div class="color-block" style="background:#0EA0E2">Dark Blue<em>#0EA0E2</em></div>
      </du-col>
      <du-col :span="3">
        <div class="color-block" style="background:#49C784">Green<em>#49C784</em></div>
        <div class="color-block" style="background:#42B983">Dark Green<em>#42B983</em></div>
      </du-col>
      <du-col :span="3">
        <div class="color-block" style="background:#F7BA2A">Yellow<em>#F7BA2A</em></div>
        <div class="color-block" style="background:#F1B52A">Dark Yellow<em>#F1B52A</em></div>
      </du-col>
      <du-col :span="3">
        <div class="color-block" style="background:#FF612F">Red<em>#FF612F</em></div>
        <div class="color-block" style="background:#F55826">Dark Red<em>#F55826</em></div>
      </du-col>
    </du-row>
  </du-box>
  <du-box>
    <div slot="head">Grayscale</div>
  </du-box>
</div>
</template>

<style>
.color-block {
  display: block;
  padding: 15px 20px;
  box-sizing: border-box;
  color: white;
  font-size: 14px;
  font-weight: 400;
  white-space: nowrap;
}
.color-block:first-of-type {
  border-radius: 5px 5px 0 0;
}
.color-block:last-of-type {
  border-radius: 0 0 5px 5px;
}
.color-block em {
  font-size: 13px;
  display: block;
  font-style: normal;
  padding-top: 4px;
  opacity: 0.8;
}
</style>

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
    <du-row :gutter="10" :gap="10">
      <du-col :span="3">
        <div class="color-block" style="background:#36495D">Dark<em>#36495D</em></div>
      </du-col>
      <du-col :span="3">
        <div class="color-block" style="background:#5E6D80">Dimgray<em>#5E6D80</em></div>
      </du-col>
      <du-col :span="3">
        <div class="color-block" style="background:#8492A6">Gray<em>#8492A6</em></div>
      </du-col>
      <du-col :span="3">
        <div class="color-block" style="background:#C0CCDA">Silver<em>#C0CCDA</em></div>
      </du-col>
    </du-row>
    <du-row class="White" :gutter="10" :gap="10">
      <du-col :span="3">
        <div class="color-block" style="background:#D3DCE6">Lightgray<em>#D3DCE6</em></div>
      </du-col>
      <du-col :span="3">
        <div class="color-block" style="background:#F9FAFC">Milk<em>#F9FAFC</em></div>
      </du-col>
      <du-col :span="3">
        <div class="color-block" style="border-color:#D3DCE6">White<em>#FFFFFF</em></div>
      </du-col>
    </du-row>
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
  border: 1px solid transparent;
}
.White .color-block {
  color: var(--text-plain-color);
}
.color-block:first-of-type {
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
.color-block:last-of-type {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}
.color-block em {
  font-size: 13px;
  display: block;
  font-style: normal;
  padding-top: 4px;
  opacity: 0.8;
}
</style>

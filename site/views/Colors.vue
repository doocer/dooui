<template>
<div class="view-colors wrap">
  <div class="content">
    <h1>Colors</h1>
    <p>Colors for default theme.</p>

    <h2>Primary Colors</h2>
    <du-row :gutter="10">
      <du-col :span="3">
        <div class="color-block" style="background:#03A9F4">Blue<em>#03A9F4</em></div>
      </du-col>
      <du-col :span="3">
        <div class="color-block" style="background:#13CE66">Green<em>#13CE66</em></div>
      </du-col>
      <du-col :span="3">
        <div class="color-block" style="background:#F7BA2A">Yellow<em>#F7BA2A</em></div>
      </du-col>
      <du-col :span="3">
        <div class="color-block" style="background:#FF5722">Red<em>#FF5722</em></div>
      </du-col>
    </du-row>
  </div>
</div>
</template>

<style>
.view-colors .content {
  padding: 20px;
  background: white;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
}
.color-block {
  display: block;
  padding: 20px;
  box-sizing: border-box;
  color: white;
  font-size: 15px;
  font-weight: 400;
  border-radius: 5px;
}
.color-block em {
  font-size: 13px;
  display: block;
  font-style: normal;
  padding-top: 4px;
  opacity: 0.8;
}
</style>

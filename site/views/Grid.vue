<template>
<div class="view-grid">
  <section>
    <du-row>
      <du-col :span="4">
        <div class="grid-box">span=4</div>
      </du-col>
      <du-col :span="4">
        <div class="grid-box">span=4</div>
      </du-col>
      <du-col :span="4">
        <div class="grid-box">span=4</div>
      </du-col>
      <du-col :span="4">
        <div class="grid-box">span=4</div>
      </du-col>
      <du-col :span="4">
        <div class="grid-box">span=4</div>
      </du-col>
    </du-row>
  </section>
  <section>
    <h2>gutter &amp; gap</h2>
    <du-row :gutter="8" :gap="8">
      <du-col :span="4">
        <div class="grid-box">span=4</div>
      </du-col>
      <du-col :span="4">
        <div class="grid-box">span=4</div>
      </du-col>
      <du-col :span="4">
        <div class="grid-box">span=4</div>
      </du-col>
      <du-col :span="4">
        <div class="grid-box">span=4</div>
      </du-col>
      <du-col :span="4">
        <div class="grid-box">span=4</div>
      </du-col>
    </du-row>
  </section>
</div>
</template>

<style>
.view-grid {
  padding: 10px;
}
.view-grid section {
  padding: 20px 15px;
}
.view-grid .grid-box {
  width: 100%;
  height: 30px;
  line-height: 30px;
  color: white;
  text-align: center;
  background-color: var(--color-blue);
}
.view-grid .du-col:nth-child(2n) .grid-box {
  opacity: 0.8;
}
</style>

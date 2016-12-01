<template>
<div>
<du-progress :value="percent"></du-progress>
<br>
<du-progress class="Striped" :value="percent"></du-progress>
<br>
<du-progress class="Striped Animate" :value="percent"></du-progress>
<br>
<button class="du-button" @click="change">Change</button>
</div>
</template>

<script>
export default {
  data() {
    return {percent: 20}
  },
  methods: {
    change() {
      this.percent = parseInt(Math.random() * 100, 10)
    }
  }
}
</script>

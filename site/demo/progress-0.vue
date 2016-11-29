<template>
<div>
<du-progress :value="progress"></du-progress>
<br>
<du-progress class="Striped" :value="progress"></du-progress>
<br>
<button class="du-button" @click="change">Change</button>
</div>
</template>

<script>
export default {
  data() {
    return {progress: 20}
  },
  methods: {
    change() {
      this.progress = parseInt(Math.random() * 100, 10)
    }
  }
}
</script>

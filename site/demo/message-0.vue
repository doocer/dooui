<template>
<div>
<button class="du-button Line Blue" @click="info">Info</button>
<button class="du-button Line Green" @click="success">Success</button>
<button class="du-button Line Yellow" @click="warn">Warn</button>
<button class="du-button Line Red" @click="error">Error</button>
</div>
</template>

<script>
export default {
  methods: {
    info() {
      this.$message('This is an info message')
    },
    success() {
      this.$message('This is an info message', 'success')
    },
    warn() {
      this.$message('This is an info message', 'warn')
    },
    error() {
      this.$message('This is an info message', 'error')
    },
  }
}
</script>

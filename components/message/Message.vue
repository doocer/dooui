<template>
<transition-group id="du-message-wrap" name="message" tag="div" aria-live="assertive">
  <div class="du-message" :class="msg.type" v-for="msg in messages" :key="msg.id">
    <span class="du-message_text" v-text="msg.text"></span>
  </div>
</transition-group>
</template>

<script>
const TYPES = {
  info: 'Info',
  success: 'Success',
  warn: 'Warn',
  warning: 'Warn',
  error: 'Error',
}
export default {
  data() {
    return {
      messages: [],
      count: 0,
    }
  },
  methods: {
    flash(text, type, duration) {
      this.count += 1
      var id = this.count
      this.messages.push({id, text, type: TYPES[type]})
      setTimeout(() => {
        this.clear(id)
      }, duration)
      return id
    },
    clear(id) {
      this.messages = this.messages.filter(item => {
        return item.id != id
      })
    }
  }
}
</script>

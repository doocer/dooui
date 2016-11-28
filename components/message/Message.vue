<template>
<transition-group id="du-message-wrap" name="message" tag="div" aria-live="assertive">
  <div class="du-message" :class="cap(msg.type)" v-for="msg in messages" :key="msg.id" v-text="msg.text">
  </div>
</transition-group>
</template>

<script>
export default {
  data() {
    return {
      messages: [],
      count: 0,
    }
  },
  methods: {
    cap(name) {
      return name.charAt(0).toUpperCase() + name.slice(1)
    },
    flash(text, type, duration) {
      this.count += 1
      var id = this.count
      this.messages.push({id, text, type})
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

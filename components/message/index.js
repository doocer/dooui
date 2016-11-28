import MessageComponent from './Message.vue'

function install(Vue) {
  const Message = Vue.extend(MessageComponent)
  const instance = new Message()
  instance.$mount()
  document.body.appendChild(instance.$el)

  var options = {
    duration: 4500
  }

  function message(text, type, duration) {
    type = type || 'info'
    duration = duration || options.duration
    return instance.flash(text, type, duration)
  }

  message.config = function(conf) {
    Object.keys(conf).forEach(k => {
      options[k] = conf[k]
    })
  }

  message.info = function(text, duration) {
    return message(text, 'info', duration)
  }
  message.success = function(text, duration) {
    return message(text, 'success', duration)
  }
  message.warning = message.warn = function(text, duration) {
    return message(text, 'warn', duration)
  }
  message.error = function(text, duration) {
    return message(text, 'error', duration)
  }

  Vue.mixin({
    beforeCreate() {
      this.$message = message
    }
  })
}

export default {install}

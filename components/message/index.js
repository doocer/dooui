import MessageComponent from './Message.vue'

function install(Vue) {
  const Message = Vue.extend(MessageComponent)
  const instance = new Message()
  instance.$mount()
  var mounted = false
  var options = {
    top: 24,
    duration: 2.5
  }

  function message(text, type, duration) {
    if (!mounted) {
      document.body.appendChild(instance.$el)
      mounted = true
    }
    type = type || 'info'
    duration = duration || options.duration
    return instance.flash(text, type, duration, options.top + 'px')
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
  message.clear = function(id) {
    return instance.clear(id)
  }

  Vue.mixin({
    beforeCreate() {
      this.$message = message
    }
  })
}

export default {install}

import MessageComponent from './Message.vue'

let mounted = false
let instance = null
const options = {
  top: 24,
  duration: 4
}


function message(text, type, duration) {
  if (!instance) {
    throw new Error("Vue.use(Message) is required")
  }

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
  if (!instance) {
    return null
  }
  return instance.clear(id)
}

message.install = function(Vue) {
  const Message = Vue.extend(MessageComponent)
  instance = new Message()
  instance.$mount()
  Vue.mixin({
    beforeCreate() {
      this.$message = message
    }
  })
}

export default message

import MessageComponent from './Message.vue'

function install(Vue) {
  const Message = Vue.extend(MessageComponent)
  const instance = new Message()
  instance.$mount()
  document.body.appendChild(instance.$el)

  Vue.mixin({
    beforeCreate() {
      this.$message = instance.flash
    }
  })
}

export default {install}

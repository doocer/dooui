const connect = {
  bind(el, binding, vnode) {
    vnode.context.$nextTick(() => {
      const comp = vnode.context.$refs[binding.arg]
      comp && comp.connect(el, vnode)
    })
  }
}

function install(Vue) {
  Vue.directive('connect', connect)
}

export default {install}

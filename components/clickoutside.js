// copy from element-ui

const nodeList = []
const ctx = '@CLICK_OUTSIDE@'

document.addEventListener('click', e => {
  nodeList.forEach(node => node[ctx].documentHandler(e))
})

export default {
  bind(el, binding, vnode) {
    const id = nodeList.push(el) - 1
    const vctx = vnode.context
    const documentHandler = function(e) {
      if (!vctx || el.contains(e.target) ||
        (vctx.popperElm && vctx.popperElm.contains(e.target))
      ) {
        return
      }

      if (binding.expression) {
        el[ctx].methodName &&
        vctx[el[ctx].methodName] &&
        vctx[el[ctx].methodName]()
      } else {
        el[ctx].bindingFn &&
        el[ctx].bindingFn()
      }
    }
    el[ctx] = {
      id,
      documentHandler,
      methodName: binding.expression,
      bindingFn: binding.value
    }
  },

  update(el, binding) {
    el[ctx].methodName = binding.expression
    el[ctx].bindingFn = binding.value
  },

  unbind(el) {
    let len = nodeList.length

    for (let i = 0; i < len; i++) {
      if (nodeList[i][ctx].id === el[ctx].id) {
        nodeList.splice(i, 1)
        break
      }
    }
  }
}

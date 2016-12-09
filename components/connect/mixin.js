var Z_INDEX = 1000
var ID_COUNT = 0
var VM_MAP = {}

listen(document, 'click', (e) => {
  Object.keys(VM_MAP).forEach(ident => {
    var vm = VM_MAP[ident]
    if (vm.$refs.pop.contains(e.target) || vm.refEl.contains(e.target)) {
      return
    }
    vm.visible = false
  })
})

export default {
  gap: 0,
  props: {
    placement: {
      type: String,
      default: 'top'
    },
    trigger: {
      type: String,
      default: 'click'
    }
  },
  data() {
    return {
      _id: ID_COUNT++,
      _inserted: false,
      altPlacement: this.placement,
      refEl: null,
      visible: false,
      style: {},
      zIndex: Z_INDEX
    }
  },
  methods: {
    updatePosition() {
      const body = document.body
      const doc = document.documentElement
      const vh = doc.clientHeight
      const vw = doc.clientWidth

      const refRect = this.refEl.getBoundingClientRect()
      const top = refRect.top + (window.pageYOffset || body.scrollTop)
      const left = refRect.left + (window.pageXOffset || body.scrollLeft)
      const right = left + refRect.width
      const bottom = top + refRect.height

      const popRect = this.$refs.pop.getBoundingClientRect()

      var placement = this.placement.toLowerCase()
      const gap = this.$options.gap

      const vStyle = (placement) => {
        var rv = {}
        if (/left$/.test(placement)) {
          rv.left = left
        } else if (/right$/.test(placement)) {
          rv.left = right - refRect.width
        } else {
          rv.left = left - (popRect.width - refRect.width) / 2
        }
        rv.left += 'px'
        if (/^top/.test(placement)) {
          rv.top = top - popRect.height - gap
        } else {
          rv.top = bottom + gap
        }
        rv.top += 'px'
        this.style = rv
      }
      const hStyle = (placement) => {
        var rv = {}
        if (/top$/.test(placement)) {
          rv.top = top
        } else if (/bottom$/.test(placement)) {
          rv.top = top + refRect.height - popRect.height
        } else {
          rv.top = top + (refRect.height - popRect.height) / 2
        }
        rv.top += 'px'
        if (/^left/.test(placement)) {
          rv.left = left - popRect.width - gap
        } else {
          rv.left = right + gap
        }
        rv.left += 'px'
        this.style = rv
      }

      if (/^top/.test(placement)) {
        if (
          refRect.top < (popRect.height + gap) &&
          (vh - refRect.bottom) >= (popRect.height + gap)
        ) {
          placement = placement.replace(/^top/, 'bottom')
        }
        vStyle(placement)
      } else if (/^bottom/.test(placement)) {
        if (
          (vh - refRect.bottom) < (popRect.height + gap) &&
          refRect.top >= (popRect.height + gap)
        ) {
          placement = placement.replace(/^bottom/, 'top')
        }
        vStyle(placement)
      } else if (/^left/.test(placement)) {
        if (
          refRect.left < (popRect.width + gap) &&
          (vw - refRect.right) >= (popRect.width + gap)
        ) {
          placement = placement.replace(/^left/, 'right')
        }
        hStyle(placement)
      } else if (/^right/.test(placement)) {
        if (
          (vw - refRect.right) < (popRect.width + gap) &&
          refRect.left >= (popRect.width + gap)
        ) {
          placement = placement.replace(/^right/, 'left')
        }
        hStyle(placement)
      }
      this.altPlacement = placement
    },
    show() {
      if (!this._inserted) {
        document.body.appendChild(this.$refs.pop)
        this._inserted = true
      }
      Z_INDEX += 1
      this.zIndex = Z_INDEX
      this.visible = true
      if (this.refEl) {
        this.$nextTick(this.updatePosition)
      }
    },
    hide() {
      this.visible = false
    },
    toggle() {
      if (this.visible) {
        this.hide()
      } else {
        this.show()
      }
    },
    delayHide() {
      setTimeout(() => {
        this.hide()
      }, 200)
    },
    connect(el, vnode) {
      this.refEl = el
      VM_MAP[this._id] = this
      if (this.trigger === 'click') {
        listen(el, 'click', this.toggle)
      }
    },
  },
  beforeDestroy() {
    if (this.$refs.pop && this.$refs.pop.parentNode === document.body) {
      document.body.removeChild(this.$refs.pop)
    }
  },
  destroyed() {
    delete VM_MAP[this._id]
    if (this.refEl) {
      unlisten(this.refEl, 'click', this.toggle)
    }
  }
}

function listen(el, event, handler) {
  if (el.addEventListener) {
    el.addEventListener(event, handler)
  } else if (el.attachEvent) {
    el.attachEvent('on' + event, handler)
  }
}

function unlisten(el, event, handler) {
  if (el.removeEventListener) {
    el.removeEventListener(event, handler)
  } else if (el.detachEvent) {
    el.detachEvent('on' + event, handler)
  }
}

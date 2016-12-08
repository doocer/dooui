var Z_INDEX = 1000
import out from 'vue-document-event'

export default {
  directives: {out},
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
      refEl: null,
      visible: false,
      position: {},
      zIndex: Z_INDEX
    }
  },
  computed: {
    style() {
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
      const right = body.clientWidth - refRect.right

      const elRect = this.$el.getBoundingClientRect()
      const viewTop = refRect.top >= elRect.height
      const viewBottom = (vh - refRect.bottom) >= elRect.height
      const viewLeft = refRect.left >= elRect.width
      const viewRight = (vw - refRect.right) >= elRect.width
    },
    show() {
      if (this.refEl) {
        this.updatePosition()
      }
      Z_INDEX += 1
      this.zIndex = Z_INDEX
      this.visible = 'true'
    },
    hide() {
      this.visible = false
    },
    delayHide() {
      setTimeout(() => {
        this.hide()
      }, 200)
    },
    connect(el, vnode) {
      this.refEl = el
      var vm = this
      if (this.trigger === 'click') {
        listen(el, 'click', this.show)
      }
    },
  },
  destroyed() {
    if (this.refEl) {
      unlisten(this.refEl, 'click', this.show)
    }
  },
  mounted() {
    // document.body.appendChild(this.$el)
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

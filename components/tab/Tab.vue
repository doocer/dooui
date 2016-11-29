<template>
<div class="du-tab">
  <div class="du-tab_bar" role="tablist">
    <div class="du-tab_scroll">
      <div class="du-tab_navs">
        <div class="du-tab_cursor" :style="cursorStyle"></div>
        <div class="du-tab_tab" role="tab" v-for="item in items"
          :aria-selected="item.selected" @click="select(item)" ref="tabs">
          <div class="du-tab_inner" v-text="item.title"></div>
        </div>
      </div>
    </div>
  </div>
  <div class="du-tab_content" :style="contentStyle">
    <slot></slot>
  </div>
</div>
</template>

<script>
export default {
  name: 'du-tab',
  props: {
    position: {
      type: String,
      default: 'top'
    },
  },
  data() {
    return {
      active: 0,
      items: [],
      cursorStyle: null,
    }
  },
  computed: {
    contentStyle() {
      var offset = this.activeIndex * 100 + '%'
      return {
        transform: 'translate3d(-' + offset + ',0,0)'
      }
    },
    activeIndex() {
      return this.items.indexOf(this.active)
    }
  },
  watch: {
    active() {
      this.$nextTick(() => {
        this.cursorStyle = this.getCursorStyle()
      })
    }
  },
  methods: {
    select(tab) {
      this.active = tab
    },
    getCursorStyle() {
      const tabs = this.$refs.tabs
      var width = 0, offset = 0
      for (var i = 0; i < tabs.length; i++) {
        var el = tabs[i]
        if (i === this.activeIndex) {
          width = el.clientWidth
          break
        } else {
          offset += el.clientWidth
        }
      }
      return {
        width: width + 'px',
        transform: 'translate3d(' + offset + 'px,0,0)',
      }
    }
  },
  mounted() {
    this.active = this.items[0]
  }
}
</script>

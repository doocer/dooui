<template>
<section class="du-box demo" :class="{Open: show}">
  <div class="du-box_head"><slot></slot></div>
  <div class="demo_show">
    <component :is="name"></component>
  </div>
  <div class="demo_source"
    :style="{height: height}">
    <div class="demo_code" ref="code">
      <pre><code class="hljs" v-html="code"></code></pre>
      <div class="demo_explain">
        <slot name="explain"></slot>
      </div>
    </div>
  </div>
  <div class="du-box_foot demo_control" role="button"
    @click="toggle">
    <span v-show="show">Hide Code</span>
    <span v-show="!show">Show Code</span>
  </div>
</section>
</template>

<script>
const sources = require('./demo/vue.json')
var components = {}
Object.keys(sources).forEach(k => {
  var name = k.replace(/\.vue$/, '')
  components[name] = require('./demo/' + k)
})

export default {
  props: {
    file: {
      type: String,
      required: true
    }
  },
  components: components,
  data() {
    return {
      height: 0,
      show: false,
    }
  },
  computed: {
    name() {
      return this.file.replace(/\.vue$/, '')
    },
    code() {
      return sources[this.file]
    }
  },
  methods: {
    toggle() {
      this.show = !this.show
      if (this.show) {
        this.height = this.$refs.code.clientHeight + 'px'
      } else {
        this.height = 0
      }
    }
  }
}
</script>

<style>
.demo {
  margin-bottom: 20px;
}
.demo_show {
  padding: 20px;
}
.demo_source {
  overflow: hidden;
  transition: all .15s ease;
  border-top: 1px solid transparent;
}
.demo.Open .demo_source {
  border-color: var(--color-border);
}
.demo_control {
  text-align: center;
  cursor: pointer;
}
.demo_source pre {
  margin: 0;
  padding: 0;
}
.demo_source .hljs {
  padding: 20px;
}
.demo_code {
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}
</style>

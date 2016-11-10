<template>
<span class="du-select"
  :class="{'Active': active, 'Input': canInput, 'Inputing': query}"
  v-don:click="toggleOff" @keydown="keypress">
  <div class="du-select_box Multiple" v-if="multiple">
  </div>
  <div class="du-select_box Single" v-else>
    <component class="du-select_value" v-if="selectedOptions.length"
      :is="component" :item="selectedOptions[0]">
    </component>
    <span class="du-select_placeholder" v-text="placeholder" v-else>
    </span>
    <i class="du-select_arrow" aria-hidden="true"></i>
    <input class="du-select_input" type="text" :readonly="!canInput"
      @click="toggle" v-model="query" ref="input">
  </div>
  <span class="du-select_dropdown" :aria-expanded="active">
    <ul class="du-select_options" role="tree" ref="tree">
      <slot></slot>
      <li class="du-select_empty" v-if="!visibleOptions.length">
        <span v-text="emptyText"></span>
      </li>
    </ul>
  </span>
</span>
</template>

<script>
import don from 'vue-document-event'
import SelectedItem from './SelectedItem.vue'

export default {
  name: 'du-select',
  select: true,
  directives: {don},
  components: {'du-selected-item': SelectedItem},
  props: {
    component: {
      type: String,
      default: 'du-selected-item'
    },
    placeholder: {
      type: String,
      default: 'Select'
    },
    value: {},
    multiple: {
      type: Boolean,
      default: false
    },
    remote: Function,
    filter: {
      type: [Boolean, Function],
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false
    },
    emptyText: {
      type: String,
      default: 'empty'
    }
  },
  data() {
    return {
      query: '',
      active: false,
      selected: [],
      options: [],
      hoverOption: null,
    }
  },
  computed: {
    canInput() {
      return this.remote || this.filter
    },
    visibleOptions() {
      if (!this.query || this.remote) {
        return this.options
      }
      if (typeof this.filter === 'function') {
        return this.filter(this.options, this.query)
      }
      return filterOptions(this.options, this.query)
    },
    selectedOptions() {
      return this.options.filter(
        o => this.selected.indexOf(o.value) !== -1
      )
    },
  },
  watch: {
    query(q) {
      this.remote && this.remote(q)
    },
    value(v) {
      if (this.multiple) {
        this.selected = v
      } else {
        this.selected = [v]
      }
    },
  },
  methods: {
    selectOption(option) {
      if (this.multiple) {
        this.selected.push(option.value)
        this.$emit('input', this.selected)
      } else {
        this.selected = [option.value]
        this.$emit('input', option.value)
        this.toggleOff()
      }
    },
    toggle() {
      this.active = !this.active
      if (this.active) {
        this.toggleOn()
      } else {
        this.toggleOff()
      }
    },
    toggleOff() {
      this.active = false
      this.$refs.input.blur()
      this.hoverOption = null
    },
    toggleOn() {
      this.query = ''
      this.active = true
      this.$refs.input.focus()
      if (this.selectedOptions.length) {
        this.ensureVisible(this.selectedOptions[0].$el)
      }
    },
    keypress(e) {
      var code = e.keyCode
      if (!this.active) {
        e.preventDefault()
        // space, enter
        if ([32, 13].indexOf(code) !== -1) {
          this.toggleOn()
        }
        return
      }
      if (code === 27) {  // esc
        e.preventDefault()
        this.toggleOff()
        return
      }
      var option = null
      if (code == 38) {  // up
        e.preventDefault()
        option = this.prevOption()
      } else if (code == 40) {  // down
        e.preventDefault()
        option = this.nextOption()
      }
      if (option) {
        this.hoverOption = option
        this.ensureVisible(option.$el)
      }
      if (code == 13 && this.hoverOption) {  // enter
        this.selectOption(this.hoverOption)
      }
    },
    prevOption() {
      var index = this.visibleOptions.indexOf(this.hoverOption)
      if (index < 1) {
        return null
      }
      var prev = this.visibleOptions[index - 1]
      while (prev && prev.disabled) {
        index = index - 1
        prev = this.visibleOptions[index]
      }
      return prev
    },
    nextOption() {
      var index = this.visibleOptions.indexOf(this.hoverOption)
      if (index > this.visibleOptions.length - 2) {
        return null
      }
      var next = this.visibleOptions[index + 1]
      while (next && next.disabled) {
        index = index + 1
        next = this.visibleOptions[index]
      }
      return next
    },
    ensureVisible(el) {
      var tree = this.$refs.tree
      var offsetTop = el.offsetTop
      var height = tree.clientHeight - el.clientHeight
      var delta = offsetTop - tree.scrollTop
      if (delta < 0) {
        tree.scrollTop = offsetTop
      } else if (delta > height) {
        tree.scrollTop = offsetTop - height
      }
    },
  }
}

function lower(text) {
  return text.toString().toLowerCase()
}
function filterOptions(options, query) {
  query = lower(query)
  return options.filter(o => {
    if (lower(o.value).indexOf(query) !== -1) {
      return true
    }
    return o.label && lower(o.label).indexOf(query) !== -1
  })
}
</script>

<style src="./style.css"></style>

<template>
<span class="du-select" :class="{'Active': active, 'Bottom': bottom}"
  v-don:click="toggleOff" v-don:scroll="resetPosition"
  @keydown="handleKey">
  <span class="du-select_selection" @click.prevent="toggleActive" tabindex="0">
    <span class="du-select_combox">
      <component :is="component" :item="selected" v-if="selected">
      </component>
      <span class="du-select_placeholder" v-text="placeholder" v-else>
      </span>
    </span>
    <i class="du-select_arrow" aria-hidden="true" v-if="!multiple"></i>
  </span>

  <span class="du-select_dropdown" :aria-expanded="active">
    <span class="du-select_search" v-if="search">
      <input autocomplete="off" autocorrect="off" autocapitalize="off"
      spellcheck="false" role="text-box" tabindex="-1" v-model="query"
      ref="search">
    </span>
    <ul class="du-select_results" role="tree" ref="tree"
      @click="select" @mouseover="focus">
      <li class="du-select_optgroup" role="group" v-for="g in results">
        <strong v-text="g.label" v-if="g.label"></strong>
        <ul>
          <li class="du-select_option" role="treeitem"
            :class="{
              'Disabled': o.disabled,
              'Focused': isMatch(focused, o)
            }"
            :aria-selected="isMatch(selected, o)"
            :data-value="o.value"
            v-for="o in g.options">
            <component :is="component" :item="o"></component>
          </li>
        </ul>
      </li>
    </ul>
  </span>
</span>
</template>

<script>
import don from 'vue-document-event'
import SelectItem from './SelectItem.vue'

export default {
  name: 'du-select',
  directives: {don},
  components: {
    'du-select-item': SelectItem,
  },
  props: {
    placeholder: {
      String,
      default: 'Select'
    },
    value: Object,
    multiple: {
      type: Boolean,
      default: false
    },
    options: {
      type: Array,
      default: () => []
    },
    optgroups: {
      type: Array,
      default: () => []
    },
    component: {
      type: String,
      default: 'du-select-item'
    },
    search: {
      type: [Boolean, Function],
      default: false,
    },
  },
  mounted() {
    this.resetPosition()
  },
  computed: {
    results() {
      var optgroups = this.cloneGroups()
      if (!this.query || this.search !== true) {
        return optgroups
      }
      return _filterSearch(optgroups, this.query)
    }
  },
  data() {
    return {
      selected: null,
      focused: null,
      active: false,
      bottom: false,
      query: '',
    }
  },
  watch: {
    results(data) {
      if (data.length) {
        var selected = null
        if (this.value) {
          selected = _getDefaultValue(data, this.value.value)
        } else if (!this.placeholder) {
          selected = _getDefaultValue(data)
        }
        this.selected = selected
        if (selected) {
          this.focused = selected
        } else {
          this.focused = _getDefaultValue(data)
        }
      }
    },
    query(q) {
      if (q && typeof this.search === 'function') {
        return this.search(q)
      }
    }
  },
  methods: {
    cloneGroups() {
      var optgroups = this.optgroups
      if (!optgroups.length) {
        optgroups = [{options: this.options}]
      }
      return _cloneGroups(optgroups)
    },
    resetPosition() {
      var rect = this.$el.getBoundingClientRect()
      this.bottom = rect.top / document.body.clientHeight > 0.5
    },
    toggleOff() {
      this.active = false
    },
    toggleActive() {
      this.active = !this.active
      if (this.active) {
        this.query = ''
        if (this.selected) {
          this.focused = this.selected
        }
        if (this.$refs.search) {
          this.$refs.search.focus()
        }
        this.ensureVisible(this.focused)
      }
    },
    select(item) {
      item = this.getEventItem(item)
      if (item && !item.disabled) {
        this.selected = item
        this.$emit('input', item)
        this.toggleOff()
      }
    },
    focus(item) {
      item = this.getEventItem(item)
      if (item && !item.disabled) {
        this.focused = item
      }
    },
    isMatch(item, choice) {
      if (!item) {
        return false
      }
      return item.value === choice.value
    },
    handleKey(e) {
      var code = e.keyCode
      if (!this.active) {
        e.preventDefault()
        // space, enter
        if ([32, 13].indexOf(code) !== -1) {
          this.toggleActive()
        }
        return
      }
      if (code === 27) {  // esc
        e.preventDefault()
        this.toggleOff()
        return
      }
      var item = null
      if (code == 38) {  // up
        e.preventDefault()
        item = this.getPrevItem()
      } else if (code == 40) {
        e.preventDefault()
        item = this.getNextItem()
      }
      if (item) {  // down
        this.focused = item
        this.ensureVisible(item)
      }
      if (code == 13) {  // enter
        this.select(this.focused)
      }
    },
    getPrevItem() {
      var prev = null
      _iterOptions(this.results, (option) => {
        if (!option.disabled) {
          if (this.focused.value == option.value) {
            return true
          }
          prev = option
        }
      })
      return prev
    },
    getNextItem() {
      var found = false, next = null
      _iterOptions(this.results, (option) => {
        if (!option.disabled) {
          if (found) {
            next = option
            return true
          }
          found = this.focused.value == option.value
        }
      })
      return next
    },
    getEventItem(e) {
      if (!e.target && e.value !== undefined) {
        return e
      }
      var value = _getTargetValue(e.target, this.$refs.tree)
      if (value) {
        return _getDefaultValue(this.cloneGroups(), value)
      }
      return null
    },
    getItemElement(item) {
      if (!item) {
        return null
      }
      var sel = 'li[data-value="' + item.value + '"]'
      return this.$el.querySelector(sel)
    },
    ensureVisible(item) {
      var el = this.getItemElement(item)
      if (!el) {
        return
      }
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

function _getTargetValue(target, parent) {
  while (target && target != parent && !target.hasAttribute('data-value')) {
    target = target.parentNode
  }
  if (target) {
    return target.getAttribute('data-value')
  }
  return null
}

function _getDefaultValue(optgroups, value) {
  var rv = null
  _iterOptions(optgroups, function(option) {
    if (!option.disabled) {
      if (value === undefined || value == option.value) {
        rv = option
        return true
      }
    }
  })
  return rv
}

function _filterSearch(optgroups, query) {
  query = query.toLowerCase()
  return optgroups.filter(g => {
    var options = g.options.filter(o => {
      var value = o.value.toLowerCase()
      if (value.indexOf(query) !== -1) {
        return true
      }
      var label = o.label.toLowerCase()
      return label.indexOf(query) !== -1
    })
    if (!options.length) {
      return false
    }
    g.options = options
    return true
  })
}

function _cloneGroups(optgroups) {
  return optgroups.map(g => {
    g = Object.assign({}, g)
    g.options = g.options.map(o => {
      o = Object.assign({}, o)
      if (!o.label) {
        o.label = o.value
      }
      return o
    })
    return g
  })
}

function _iterOptions(optgroups, fn) {
  var options = []
  for (var i = 0; i < optgroups.length; i++) {
    options = optgroups[i].options
    for (var j = 0; j < options.length; j++) {
      if (fn(options[j])) {
        return
      }
    }
  }
}
</script>

<style>
.du-select {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  width: 100%;
  text-align: left;
}
.du-select_selection {
  position: relative;
  display: block;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #aaa;
  border-radius: 3px;
  line-height: 30px;
  height: 30px;
  padding: 0 30px 0 10px;
  background-color: white;
  user-select: none;
  cursor: default;
}
.du-select_combox {
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.du-select_placeholder {
  opacity: 0.65;
}
.du-select_arrow {
  position: absolute;
  top: 50%;
  margin-top: -2px;
  right: 10px;
  transition: transform 0.1s ease;
}
.du-select_arrow:after {
  display: block;
  content: '';
  width: 0;
  height: 0;
  border-style: solid;
  border-color: #aaa transparent transparent transparent;
  border-width: 5px 4px 0 4px;
}
.du-select_dropdown {
  position: absolute;
  left: 0;
  right: 0;
  background-color: white;
  border-color: #aaa;
  border-width: 1px;
  border-style: solid;
  border-top-width: 0;
  border-radius: 0 0 3px 3px;
  transform-origin: top;
  transform: scaleY(0);
  transition: transform 0.1s ease;
  z-index: 1000;
}
.du-select_dropdown ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.du-select_search {
  display: block;
  padding: 5px 10px;
}
.du-select_search input {
  width: 100%;
  box-sizing: border-box;
  font-size: 14px;
  padding: 4px 8px;
  color: #666;
  border: 1px solid #ccc;
  border-radius: 3px;
  outline: none;
}
.du-select_results {
  position: relative;
  max-height: 320px;
  overflow-y: auto;
}
.du-select_optgroup {
  pointer-events: none;
}
.du-select_optgroup strong {
  display: block;
  padding: 6px;
}
.du-select_option {
  display: block;
  padding: 6px 10px;
  cursor: pointer;
  pointer-events: auto;
}
.du-select_option[aria-selected] {
  background-color: rgba(0, 0, 0, 0.06);
}
.du-select_option.Disabled {
  opacity: 0.6;
  cursor: not-allowed;
  background-color: transparent;
  pointer-events: none;
}
.du-select_option.Focused {
  color: white;
  background-color: #5897fb;
}
.du-select_option > * {
  pointer-events: none;
}
.du-select_optgroup .du-select_option {
  padding-left: 12px;
}
.du-select.Active .du-select_arrow {
  transform: rotate(180deg);
}
.du-select.Active .du-select_selection {
  border-radius: 3px 3px 0 0;
  outline: none;
}
.du-select.Active .du-select_dropdown {
  transform: scaleY(1);
}
.du-select.Bottom .du-select_dropdown {
  transform-origin: bottom;
  bottom: 30px;
  border-top-width: 1px;
  border-bottom-width: 0;
  border-radius: 3px 3px 0 0;
}
.du-select.Bottom.Active .du-select_selection {
  border-radius: 0 0 3px 3px;
}
</style>

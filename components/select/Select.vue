<template>
<span class="du-select" :class="{'Active': active, 'Selected': selected}"
  v-clickoutside="toggleOff" @keydown="handleKey">
  <span class="du-select_selection" @click.prevent="toggleActive">
    <span class="du-select_selected">
      <input readonly :placeholder="placeholder">
      <component :is="component" :item="selected" v-if="selected">
      </component>
    </span>
    <i class="du-select_arrow" aria-hidden="true"></i>
  </span>

  <span class="du-select_dropdown" :aria-expanded="active">
    <span class="du-select_search" v-if="search">
      <input v-model="query">
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
import clickoutside from 'du-clickoutside'
import SelectItem from './SelectItem.vue'

export default {
  name: 'du-select',
  directives: {clickoutside},
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
      type: Boolean,
      default: false,
    },
  },
  computed: {
    results() {
      var optgroups = this.cloneGroups()
      if (!this.query || !this.search) {
        return optgroups
      }
      var rv = _filterSearch(optgroups, this.query)
      return rv
    }
  },
  data() {
    return {
      selected: null,
      focused: null,
      active: false,
      query: '',
    }
  },
  mounted() {
    var selected = null
    var optgroups = this.cloneGroups()
    if (this.value) {
      selected = _getDefaultValue(optgroups, this.value.value)
    } else if (!this.placeholder) {
      selected = _getDefaultValue(optgroups)
    }
    this.selected = selected
    if (selected) {
      this.focused = selected
    } else {
      this.focused = _getDefaultValue(optgroups)
    }
  },
  watch: {
    query(q) {
      if (!this.results.length) {
        return
      }
      var option = this.selected || this.focused
      if (q) {
        option = _getDefaultValue(this.results, option.value)
          || _getDefaultValue(this.results)
      }
      this.focused = option
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
    toggleOff() {
      this.active = false
    },
    toggleActive() {
      this.active = !this.active
      if (!this.__input) {
        var sel = 'input'
        if (this.search) {
          sel = '.du-select_search input'
        }
        this.__input = this.$el.querySelector(sel)
      }
      if (this.active) {
        this.query = ''
        if (this.selected) {
          this.focused = this.selected
        }
        this.__input.focus()
      }
      this.ensureVisible(this.focused)
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
      var item = null
      if (e.keyCode == 38) {
        // item = this.getAvailableItem(-1)
      } else if (e.keyCode == 40) {
        // item = this.getAvailableItem(1)
      }
      if (item) {
        this.focused = item
        this.ensureVisible(item)
      }
      if (e.keyCode == 13) {
        // press enter
        this.select(this.focused)
      }
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
  var options = []
  for (var i = 0; i < optgroups.length; i++) {
    options = optgroups[i].options
    for (var j = 0; j < options.length; j++) {
      if (options[j].disabled) {
        continue
      }
      if (value === undefined || value == options[j].value) {
        return options[j]
      }
    }
  }
  return null
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
</script>

<style>
.du-select {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  width: 100%;
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
.du-select_selected {
  display: block;
}
.du-select_selection input {
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  width: 100%;
  height: 28px;
  padding: 0 30px 0 10px;
  box-sizing: border-box;
  background-color: transparent;
  font-size: inherit;
  font-family: inherit;
  line-height: 1;
  border: 0 none;
  outline: none;
}
.du-select_arrow {
  position: absolute;
  top: 12px;
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
  border: 1px solid #aaa;
  border-top: none;
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
}
.du-select.Active .du-select_dropdown {
  transform: scaleY(1);
}
.du-select.Selected .du-select_selection input {
  opacity: 0;
}
</style>

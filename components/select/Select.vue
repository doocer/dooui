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
    <ul class="du-select_results" role="tree" ref="tree">
      <li class="du-select_optgroup" role="group" v-for="g in results">
        <strong v-text="g.label" v-if="g.label"></strong>
        <ul>
          <li class="du-select_option" :class="{'Disabled': o.disabled}"
            role="treeitem" :aria-selected="isSelected(o)"
            @click.prevent="select(o)" v-for="o in g.options">
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
      type: [Function, Boolean],
      default: false,
    },
  },
  computed: {
    results() {
      var results = this.optgroups
      if (!results.length) {
        results = [{options: this.options}]
      }
      if (!this.query) {
        return results
      }
      var searchFn = this.search
      if (typeof searchFn === 'boolean') {
        searchFn = filterSearch
      }
      var rv = []
      results.forEach(item => {
        var options = item.options.filter(option => {
          return searchFn(option, this.query)
        })
        if (options.length) {
          rv.push({label: item.label, options})
        }
      })
      return rv
    }
  },
  data() {
    var selected = null
    if (this.value) {
      selected = this.value
    } else if (!this.placeholder) {
      if (this.optgroups.length) {
        var first = this.optgroups[0]
        if (first.options) {
          selected = getFirstOption(first.options)
        }
      } else if (this.options.length) {
        selected = getFirstOption(this.options)
      }
      if (selected) {
        this.$emit('input', selected)
      }
    }
    return {
      selected,
      active: false,
      query: '',
    }
  },
  methods: {
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
        this.__input.focus()
      }
      this.ensureVisible(this.$el.querySelector('li[aria-selected]'))
    },
    select(item) {
      if (!item.disabled) {
        this.selected = item
        this.$emit('input', item)
        this.toggleOff()
      }
    },
    isSelected(item) {
      if (!this.selected) {
        return false
      }
      return item.label == this.selected.label
    },
    handleKey(e) {
      // TODO
      if (e.keyCode == 38) {
        // up
      } else if (e.keyCode == 40) {
        // down
      }
    },
    ensureVisible(el) {
      if (!el) {
        return
      }
      this.$refs.tree.scrollTop = el.offsetTop - 30
    },
  }
}

function getFirstOption(options) {
  for (var i = 0; i < options.length; i++) {
    if (!options[i].disabled) {
      return options[i]
    }
  }
}

function filterSearch(option, query) {
  var label = option.label.toLowerCase()
  query = query.toLowerCase()
  return label.indexOf(query) !== -1
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
  max-height: 320px;
  overflow-y: auto;
}
.du-select_optgroup strong {
  display: block;
  padding: 6px;
}
.du-select_option {
  display: block;
  padding: 6px 10px;
  cursor: pointer;
}
.du-select_option[aria-selected] {
  background-color: rgba(0, 0, 0, 0.04);
}
.du-select_option:hover {
  background-color: rgba(0, 0, 0, 0.06);
}
.du-select_option.Disabled {
  opacity: 0.6;
  cursor: not-allowed;
  background-color: transparent;
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

<template>
<span class="du-select" :class="{'Active': active}"
  v-clickoutside="toggleOff">
  <span class="du-select_selection" @click.prevent="toggleActive">
    <span class="du-select_selected">
      <component :is="component" :item="selected" v-if="selected">
      </component>
      <span class="du-select_placeholder" v-text="placeholder" v-else></span>
    </span>
    <i class="du-select_arrow" aria-hidden="true"></i>
  </span>

  <span class="du-select_dropdown">
    <ul class="du-select_results">
      <li class="du-select_optgroup" v-for="g in optgroups">
        <strong v-text="g.label"></strong>
        <ul>
          <li class="du-select_option" :class="{'Disabled': o.disabled}"
            @click.prevent="select(o)" v-for="o in g.options">
            <component :is="component" :item="o"></component>
          </li>
        </ul>
      </li>
      <li class="du-select_option" :class="{'Disabled': o.disabled}"
        @click.prevent="select(o)" v-for="o in options">
        <component :is="component" :item="o"></component>
      </li>
    </ul>
  </span>
</span>
</template>

<script>
export default {
  name: 'du-select',
  props: {
    placeholder: String,
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
    }
  },
  data() {
    var selected = null
    if (!this.placeholder) {
      if (this.optgroups.length) {
        var first = this.optgroups[0]
        if (first.options) {
          selected = getFirstOption(first.options)
        }
      } else if (this.options.length) {
        selected = getFirstOption(this.options)
      }
    }
    return {
      selected,
      active: false,
    }
  },
  methods: {
    toggleOff() {
      this.active = false
    },
    select(item) {
      if (!item.disabled) {
        this.selected = item
        this.toggleOff()
      }
    },
    toggleActive() {
      this.active = !this.active
    }
  }
}

function getFirstOption(options) {
  for (var i = 0; i < options.length; i++) {
    if (!options[i].disabled) {
      return options[i]
    }
  }
}
</script>

<style>
.du-select {
  position: relative;
  display: inline-block;
  width: 100%;
}
.du-select_placeholder {
  opacity: 0.8;
}
.du-select_selection {
  position: relative;
  display: block;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #aaa;
  border-radius: 4px;
  line-height: 30px;
  padding: 0 30px 0 10px;
  background-color: white;
  user-select: none;
  cursor: default;
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
  border-radius: 0 0 4px 4px;
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
.du-select_optgroup strong {
  display: block;
  padding: 6px;
}
.du-select_option {
  display: block;
  padding: 6px 10px;
  cursor: pointer;
}
.du-select_option.Disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
.du-select_optgroup .du-select_option {
  padding-left: 12px;
}
.du-select.Active .du-select_arrow {
  transform: rotate(180deg);
}
.du-select.Active .du-select_selection {
  border-radius: 4px 4px 0 0;
}
.du-select.Active .du-select_dropdown {
  transform: scaleY(1);
}
</style>

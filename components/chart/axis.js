
const NAME_LOCATIONS = ['start', 'middle', 'end']
const TYPES = ['category', 'value', 'time', 'log']

function choiceValidate(choices) {
  return function(value) {
    return choices.indexOf(value) !== -1
  }
}

const nameLocation = {
  type: String,
  default: 'end',
  validator: choiceValidate(NAME_LOCATIONS)
}


const xAxis = {
  props: {
    gridIndex: Number,
    offset: Number,
    type: String,
    nameLocation: nameLocation,
  }
}

const props = {
  position: String,
  offset: Number,
  type: String,
  name: String,
}

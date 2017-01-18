var path = require('path')
var mixin = require('./mixin.config')

module.exports = {
  devtool: '#source-map',
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/dist/',
    filename: '[name].js'
  },
  module: {
    rules: mixin.moduleRules,
  },
  resolve: {
    modules: [
      'node_modules'
    ],
  }
}

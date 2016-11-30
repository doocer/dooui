var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin")
var mixin = require('./mixin.config')
var config = require('./webpack.base')

mixin.addExtractPlugin()

config.entry = {
  dooui: [
    './components/default-theme.css',
    './components/index.js',
  ]
}
config.output.library = 'dooui'
config.output.libraryTarget = 'commonjs-module'
config.externals = {
  echarts: 'echarts',
  'vue-document-event': 'vue-document-event',
}

// http://vue-loader.vuejs.org/en/workflow/production.html
config.plugins = (config.plugins || []).concat([
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"production"'
    }
  }),
  new webpack.optimize.UglifyJsPlugin({
    mangle: false,
    beautify: true
  }),
  new webpack.LoaderOptionsPlugin({
    minimize: false
  }),
  new ExtractTextPlugin("[name].css")
])

module.exports = config

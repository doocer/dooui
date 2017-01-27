const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const mixin = require('./mixin.config')
const config = require('./webpack.base')

mixin.addExtractPlugin()

const name = process.env.COMPONENT

config.entry = {}
config.entry[name] = [
  './components/css/variables.css',
  `./components/${name}/index.js`,
]

config.output = {
  path: `./components/${name}/dist`,
  filename: '[name].js',
  library: name,
  libraryTarget: 'commonjs-module'
}

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

var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin")
var mixin = require('./mixin.config')
var config = require('./webpack.base')

mixin.addExtractPlugin()

config.entry = {
  site: ['./site/main.js']
}

config.plugins = (config.plugins || []).concat([
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"production"'
    }
  }),
  new webpack.optimize.UglifyJsPlugin(),
  new webpack.LoaderOptionsPlugin({
    minimize: false
  }),
  new ExtractTextPlugin("[name].css")
])

module.exports = config

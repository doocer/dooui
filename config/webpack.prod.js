var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin")
var vueOptions = require('./vue-loader.config')
var config = require('./webpack.base')

vueOptions.loaders = {
  css: ExtractTextPlugin.extract({
    loader: 'css-loader',
    fallbackLoader: 'vue-style-loader'
  })
}


// http://vue-loader.vuejs.org/en/workflow/production.html
config.plugins = (config.plugins || []).concat([
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"production"'
    }
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  }),
  new webpack.LoaderOptionsPlugin({
    minimize: true
  }),
  new webpack.optimize.CommonsChunkPlugin({name: 'dooui', filename: 'dooui.js'}),
  new ExtractTextPlugin("[name].css")
])

module.exports = config

var webpack = require('webpack')
var config = require('./webpack.base')

config.devServer = {
  historyApiFallback: true,
  noInfo: true
}
config.performance = {
  hints: false
}
config.devtool = '#eval-source-map'

config.entry = {
  site: ['./site/main.js']
}

config.resolve.alias = {
  'vue$': 'vue/dist/vue'
}

config.plugins = (config.plugins || []).concat([
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"development"'
    }
  }),
])

module.exports = config

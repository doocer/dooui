var config = require('./webpack.base')

config.devServer = {
  historyApiFallback: true,
  noInfo: true
}
config.devtool = '#eval-source-map'

module.exports = config

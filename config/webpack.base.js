var path = require('path')
var vueOptions = require('./vue-loader.config')

module.exports = {
  devtool: '#source-map',
  entry: {
    dooui: ['./components/index.js'],
    site: ['./site/main.js']
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/dist/',
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueOptions
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    modules: [
      'node_modules'
    ],
    alias: {
      'vue$': 'vue/dist/vue'
    }
  }
}

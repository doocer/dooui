var vueOptions = {
  postcss: [
    require('autoprefixer')({
      browsers: ['last 3 versions']
    })
  ]
}

var cssRule = {
  test: /\.css$/,
  loader: 'css-loader'
}


var moduleRules = [
  {
    test: /\.vue$/,
    loader: 'vue-loader',
    options: vueOptions
  },
  {
    test: /\.js$/,
    loader: 'buble-loader',
    exclude: /node_modules/,
    options: {
      objectAssign: 'Object.assign'
    }
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
  },
  cssRule,
]
exports.moduleRules = moduleRules

function addExtractPlugin() {
  var ExtractTextPlugin = require("extract-text-webpack-plugin")
  var extractLoader = ExtractTextPlugin.extract({
    loader: 'css-loader',
    fallbackLoader: 'vue-style-loader'
  })

  vueOptions.loaders = {css: extractLoader}
  cssRule.loader = extractLoader
}
exports.addExtractPlugin = addExtractPlugin

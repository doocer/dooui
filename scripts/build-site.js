const fs = require('fs')
const crypto = require('crypto')
const autoprefixer = require('autoprefixer')
const postcss = require('postcss')
const customProperties = require('postcss-custom-properties')
const cssnano = require('cssnano')

var content = fs.readFileSync('index.html', 'utf8')

function md5(data) {
  var hasher = crypto.createHash('md5')
  return hasher.update(data).digest('hex')
}

var cssData = fs.readFileSync('dist/site.css', 'utf8')
var jsData = fs.readFileSync('dist/site.js', 'utf8')

var cssMD5 = md5(cssData)
var jsMD5 = md5(jsData)

content = content.replace(
  '<!-- css -->',
  '<link rel="stylesheet" href="site.css?v=' + cssMD5 + '">'
)

content = content.replace(
  '/dist/site.js',
  'site.js?v=' + jsMD5
)

fs.writeFileSync('public/index.html', content)
fs.writeFileSync('public/site.js', jsData)

postcss([autoprefixer(), customProperties(), cssnano()])
  .process(cssData)
  .then(resp => {
    fs.writeFileSync('public/site.css', resp.css)
  }
)

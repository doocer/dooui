const fs = require('fs')
const postcss = require('postcss')
const cssnano = require('cssnano')
const autoprefixer = require('autoprefixer')
const customProperties = require('postcss-custom-properties')


function transform(data) {
  return postcss([autoprefixer(), customProperties(), cssnano({zindex: false})]).process(data)
}


function processFile(src, dest) {
  const data = fs.readFileSync(src, 'utf8')
  transform(data).then(resp => {
    fs.writeFileSync(dest, resp.css)
  })
}


function processComponent(name) {
  const src = `./components/${name}/dist/style.css`
  processFile(src, src)
}

const name = process.argv[2]
if (name) {
  processComponent(name)
}


exports.transform = transform
exports.processFile = processFile

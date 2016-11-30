const fs = require('fs')
const path = require('path')
const h = require('highlight.js')
const DIR = 'site/demo'

var vue = {}

fs.readdirSync(DIR).forEach(name => {
  if (/\.vue$/.test(name)) {
    console.log('Build: ' + name)
    var content = fs.readFileSync(path.join(DIR, name), 'utf8')
    content = content.replace('<template>', '')
    content = content.replace('</template>', '').trim()
    vue[name] = h.highlight('html', content).value.trim()
  }
})

fs.writeFileSync(path.join(DIR, 'vue.json'), JSON.stringify(vue))

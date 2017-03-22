var Components = require('../components.json')
var Directives = require('../directives.json')
var fs = require('fs')
var path = require('path')
var IMPORT_TEMPLATE = 'import {{name}} from \'../packages/{{package}}\''
var OUTPUT_PATH = path.join(__dirname, '../src/components.js')
var INSTALL_COMPONENT_TEMPLATE = '  Vue.component({{name}}.name, {{name}})'
var INSTALL_DIRECTIVE_TEMPLATE = '  Vue.directive({{name}}.name, {{name}})'
var MAIN_TEMPLATE = `
/* Automatic generated by './scripts/build-entry.js' */

{{include}}

const install = function (Vue, opts = {}) {
  if (install.installed) return

{{install}}
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  version: '{{version}}',
  install,
{{list}}
}
`


var uppercamelcase = name => name.replace(/[_.\- ]+(\w|$)/g, (m, p1) => p1.toUpperCase())
var render = (tpl, model) => tpl.replace(/{{(\w+)}}/g, (m, key) => model[`${key}`])

var includeComponentTemplate = []
var installTemplate = []
var listTemplate = []

var addPacks = (packObj, TPL) => {
  var packNames = Object.keys(packObj)
  packNames.forEach(name => {
    var packName = uppercamelcase(name)
    includeComponentTemplate.push(render(IMPORT_TEMPLATE, {
      name: packName,
      package: packName
    }))
    installTemplate.push(render(TPL, {
      name: packName,
      component: name
    }))
    listTemplate.push(`  ${packName}`)
  })
}

addPacks(Components, INSTALL_COMPONENT_TEMPLATE)
addPacks(Directives, INSTALL_DIRECTIVE_TEMPLATE)

var template = render(MAIN_TEMPLATE, {
  include: includeComponentTemplate.join('\n'),
  install: installTemplate.join('\n'),
  version: process.env.VERSION || require('../package.json').version,
  list: listTemplate.join(',\n')
})

fs.writeFileSync(OUTPUT_PATH, template)
console.log('[build entry] DONE:', OUTPUT_PATH)
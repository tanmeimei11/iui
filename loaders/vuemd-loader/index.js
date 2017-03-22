import loaderUtils from 'loader-utils'
import cheerio from 'cheerio'
import MarkDownIt from 'markdown-it'

const markdown = MarkDownIt('default', {
  html: true,
  breaks: true
}).use(require('markdown-it-highlightjs'))


const renderVueTemplate = function (html) {
  var $ = cheerio.load(html, {
    decodeEntities: false,
    lowerCaseAttributeNames: false,
    lowerCaseTags: false
  })

  var output = {
    style: $.html('style'),
    script: $.html('script')
  }
  var result

  $('style').remove()
  $('script').remove()
  
  result = '<template><section>' + $.html() + '</section></template>\n' +
    output.style + '\n' +
    output.script
  return result
}

module.exports = function (content) {
  const result = markdown.render(content)
  return renderVueTemplate(result)
}



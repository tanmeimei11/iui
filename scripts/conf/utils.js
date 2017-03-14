import { join } from 'path'
import MarkDownIt from 'markdown-it'


export const assetsPath = dir => join(__dirname, '../..', dir)

export const aliasObject = Object.assign({}, {
  'iConfig': assetsPath('src/iConfig.example.js'),
  'i-ui/src': assetsPath('src'),
  'i-ui/lib': assetsPath('packages')
})

export const env = {
  remUnit: 75,
  bundleAnalyzerReport: process.env.npm_config_report,
  port: 8091,
  autoOpenBrowser: true,
  proxyTable: {

  }
}

export const markdown = MarkDownIt({
  html: true,
  breaks: true
}).use(require('markdown-it-highlightjs'))

import { join } from 'path'



export const resolvePath = dir => join(__dirname, '../..', dir)

export const aliasObject = Object.assign({}, {
  'iConfig': resolvePath('src/iConfig.js'),
  'i-ui/src': resolvePath('src'),
  'i-ui/lib': resolvePath('packages')
})

export const env = {
  remUnit: 75,
  bundleAnalyzerReport: process.env.npm_config_report,
  port: 8091,
  autoOpenBrowser: true,
  proxyTable: {

  }
}

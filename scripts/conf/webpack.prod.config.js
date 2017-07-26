import webpack from 'webpack'
import Config from 'webpack-config'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import { env, resolvePath } from './utils'
import components from '../../components.json'
import directives from '../../directives.json'

const cfg = new Config().extend({
  'scripts/conf/webpack.base.config.js': config => {
    config.entry = config.entry || {}
    Object.keys(components).forEach(key => {
      config.entry[`${key}`] = [components[`${key}`]]
    })
    Object.keys(directives).forEach(key => {
      config.entry[`${key}`] = [directives[`${key}`]]
    })
    return config
  }
}).merge({
  entry: {
    'i-ui.common': ['./src/components.js'],
    base: ['./src/scss/base.scss']
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: JSON.stringify('production'),
      DEBUG: false
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: false,
      debug: false
    }),
    new ExtractTextPlugin({ 
      filename: getPath => getPath('theme-default/[name].css').replace('i-ui.common', 'index')
    }),
    new webpack.DllPlugin({
      path: resolvePath('lib/[name].manifest.json'),
      name: '[name]'
    })
  ]
})

if (env.bundleAnalyzerReport) {
  cfg.merge({
    plugins: [new BundleAnalyzerPlugin()]
  })
}
export default cfg

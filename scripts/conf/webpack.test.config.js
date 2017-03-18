import { styleLoaders } from './vue-loader.conf'
import Config from 'webpack-config'

var webpack = require('webpack')

const cfg = new Config().extend('scripts/conf/webpack.base.config.js').merge({
  // entry: {
  //   index: ['./example/index.js'],
  //   vendor: ['vue', 'webpack-hot-middleware/client?noInfo=true']
  // },
  // use inline sourcemap for karma-sourcemap-loader
  module: {
    rules: styleLoaders()
  },
  devtool: '#inline-source-map',
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: JSON.stringify('test'),
      DEBUG: false
    })
  ]
})

// no need for app entry during tests
delete cfg.entry
// delete cfg.default
export default cfg

import webpack from 'webpack'
import Config from 'webpack-config'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import { env } from './utils'
import Components from '../../components.json'
import directives from '../../directives.json'

const cfg = new Config().extend('scripts/conf/webpack.base.config.js').merge({
  entry: Components
}).merge({
  entry: directives
}).merge({
  entry: {
    index: ['./src/components.js']
  },
  output: {
    libraryTarget: 'commonjs-module'
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
      filename: 'theme-default/[name].css'
    })
  ]
})

if (env.bundleAnalyzerReport) {
  cfg.merge({
    plugins: [new BundleAnalyzerPlugin()]
  })
}

export default cfg

import webpack from 'webpack'
import Config from 'webpack-config'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import { env, assetsPath } from './utils'
const cfg = new Config().extend('scripts/conf/webpack.dev.config.js').merge({
  output: {
    path: assetsPath('dist'),
    filename: 'assets/[name].js'
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
      filename: 'assets/[name].css'
    })
  ]
})

if (env.bundleAnalyzerReport) {
  cfg.merge({
    plugins: [new BundleAnalyzerPlugin()]
  })
}

export default cfg

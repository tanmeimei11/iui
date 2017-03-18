import webpack from 'webpack'
import Config from 'webpack-config'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import { env, resolvePath } from './utils'
const cfg = new Config().extend('scripts/conf/webpack.base.config.js').merge({
  entry: {
    index: ['./example/index.js'],
    vendor: ['vue']
  },
  output: {
    path: resolvePath('dist'),
    filename: 'js/[name].[chunkhash:7].js',
    publicPath: './'
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: `index.html`,
      template: `./example/index.html`
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor'],
      minChunks: Infinity
    }),
    new webpack.EnvironmentPlugin({
      NODE_ENV: JSON.stringify('production'),
      DEBUG: false
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: false,
      debug: false
    }),
    new ExtractTextPlugin({
      filename: 'css/[name].[contenthash:7].css'
    })
  ]
})

if (env.bundleAnalyzerReport) {
  cfg.merge({
    plugins: [new BundleAnalyzerPlugin()]
  })
}

export default cfg

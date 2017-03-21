import webpack from 'webpack'
import Config from 'webpack-config'
import HtmlWebpackPlugin from 'html-webpack-plugin'
export default new Config().extend('scripts/conf/webpack.base.config.js').merge({
  entry: {
    index: ['./example/index.js'],
    vendor: ['vue', 'webpack-hot-middleware/client?noInfo=true']
  },
  devtool: '#source-map',
  plugins: [
    new webpack.WatchIgnorePlugin([/node_modules/, 'test']),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './example/index.html'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor'],
      minChunks: Infinity
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
})

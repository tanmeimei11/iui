import webpack from 'webpack'
import Config from 'webpack-config'
import HtmlWebpackPlugin from 'html-webpack-plugin'

export default new Config().extend('scripts/conf/webpack.base.config.js').merge({
  entry: {
    index: ['./pack_example/index.js'],
    vendor: ['vue', 'webpack-hot-middleware/client']
  },
  devtool: '#source-map',
  plugins: [
    new HtmlWebpackPlugin({
      filename: `index.html`,
      template: `./pack_example/index.html`
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor'],
      minChunks: Infinity
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
})

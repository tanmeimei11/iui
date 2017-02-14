var utils = require('./utils')
const webpack = require('webpack')
const nib = require('nib')
const path = require('path')
const projectRoot = path.resolve(__dirname, '../')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const config = require('./config')
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  devtool: false,
  watch: process.env.TARGET === 'dev',
  entry: {
    app: './src/index.js'
  },
  // devtool: config.build.productionSourceMap ? '#source-map' : false,
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/dist/'
  },
  node: {
    fs: 'empty'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    fallback: [path.join(__dirname, '../node_modules')],
    modules: [
      resolve('src'),
      resolve('node_modules')
    ],
  },
  module: {
    loaders: [
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: projectRoot,
        exclude: /node_modules/
      },
      {
        test: /\.styl$/,
        loader: ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: 'css-loader!stylus-loader'  })
      }
    ]
  },
  // stylus: {
  //   use: [nib()],
  //   import: ['~nib/lib/nib/index.styl'],
  //   "include css": true
  // },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      test: /\.styl$/,
      stylus: {
        use: [nib()],
        import: ['~nib/lib/nib/index.styl'],
        "include css": true
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new ExtractTextPlugin('iui.min.css')
  ]
}

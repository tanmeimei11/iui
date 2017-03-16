import { styleLoaders, default as cssLoaders } from './vue-loader.conf'
import { aliasObject, assetsPath, markdown } from './utils'

export default {
  output: {
    path: assetsPath('lib'),
    filename: '[name].js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    modules: [
      assetsPath('src'),
      assetsPath('node_modules')
    ],
    alias: aliasObject
  },
  module: {
    rules: [{
      test: /\.(js|vue)$/,
      loader: 'eslint-loader',
      enforce: 'pre',
      include: [assetsPath('src/routers')],
      options: {
        formatter: require('eslint-friendly-formatter')
      }
    },
    {
      test: /\.vue$/,
      loader: 'vue-loader',
      options: cssLoaders

    },
    {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: [/node_modules/]
    },
    {
      test: /\.md/,
      loader: 'vue-markdown-loader',
      exclude: [/node_modules/],
      options: markdown
    },
    {
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      loader: 'url-loader',
      query: {
        limit: 10000,
        name: 'img/[name].[ext]',
        publicPath: '../'
      }
    },
    {
      test: /\.(eot|woff|ttf|eot)$/,
      loader: 'file-loader',
      query: {
        name: 'font/[name].[ext]',
        publicPath: '../'
      }
    }
    ].concat(styleLoaders())
  }
}

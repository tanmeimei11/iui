import autoprefixer from 'autoprefixer'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import { assetsPath } from './utils'

var isProduction = process.env.NODE_ENV === 'production'
const generateLoaders = loader => {
  var loaders = [{
    loader: 'css-loader',
    options: {
      minimize: isProduction,
      sourceMap: !isProduction
    }
  }]
  if (loader) {
    loaders.push({
      loader: loader + '-loader',
      options: {
        sourceMap: !isProduction,
        includePaths: [assetsPath('src')]
      }
    })
  }
  if (isProduction) {
    return ExtractTextPlugin.extract({
      use: loaders,
      fallback: 'vue-style-loader'
    })
  } else {
    return ['vue-style-loader'].concat(loaders)
  }
}

const cssLoaders = {
  loaders: {
    css: generateLoaders(),
    postcss: generateLoaders(),
    sass: generateLoaders('sass'),
    scss: generateLoaders('sass')
  },
  postcss: [
    autoprefixer({
      browsers: ['last 7 versions']
    })
  ]
}

export const styleLoaders = () => {
  var output = []
  var loaders = cssLoaders.loaders
  for (var extension in loaders) {
    var loader = loaders[extension]
    output.push({
      test: new RegExp('\\.' + extension + '$'),
      loader: loader
    })
  }
  return output
}

export default cssLoaders

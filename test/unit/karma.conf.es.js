import webpackConfig from '../../scripts/conf/webpack.test.config.js'

export default function (config) {
  config.set({
    browsers: ['PhantomJS'],
    frameworks: ['mocha', 'sinon-chai'],
    reporters: ['spec'], //, 'coverage'
    files: ['./index.js'],
    preprocessors: {
      './index.js': ['webpack', 'sourcemap'] //, 'coverage'
    },
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true
    },
    coverageReporter: {
      dir: './coverage',
      reporters: [
        { type: 'lcov', subdir: '.' },
        { type: 'text-summary' }
      ]
    }
  })
}

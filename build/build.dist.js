process.env.NODE_ENV = 'production'
const webpack = require('webpack')
const ora = require('ora')
const builds  = require('./config.dist').getAllBuilds()
const spinner = ora('building for production...')

function build (builds) {
  builds.forEach(config => {
    spinner.start()
    webpack(config, function (err, stats) {
      spinner.stop()
      if (err) throw err
      process.stdout.write(stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
      }) + '\n')
    })
  })
}

build(builds)



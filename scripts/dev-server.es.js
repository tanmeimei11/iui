import express from 'express'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import httpProxyMiddleware from 'http-proxy-middleware'
import connectHistory from 'connect-history-api-fallback'
import cfg from './conf/webpack.dev.config'
import {
  env
} from './conf/utils'

const compiler = webpack(cfg)
const port = process.env.PORT || env.port

const koaDevMiddleware = webpackDevMiddleware(compiler, {
  stats: {
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }
})
const koaHotMiddleware = webpackHotMiddleware(compiler)

const app = express()
app.use(connectHistory({
  rewrites: [{
    from: /\/admin/,
    to: '/index.html'
  }]
}))

Object.keys(env.proxyTable).forEach(function (context) {
  var options = env.proxyTable[context]
  if (typeof options === 'string') {
    options = {
      target: options
    }
  }
  app.use(httpProxyMiddleware(context, options))
})

app.use(koaDevMiddleware)
app.use(koaHotMiddleware)

app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }
  koaDevMiddleware.waitUntilValid(function () {
    console.log(`> Listening at http://localhost:${port}\n`)
  })
})

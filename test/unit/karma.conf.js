require('babel-register')({
  'presets': [
    'es2015', 'stage-2'
  ],
  'plugins': ['transform-runtime']
})

module.exports = require('./karma.conf.es.js')

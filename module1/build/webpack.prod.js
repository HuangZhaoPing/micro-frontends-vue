const common = require('./webpack.common')
const merge = require('webpack-merge')
const name = require('../package.json').name

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: `${name}/[name].js`
  }
})

const common = require('./webpack.common')
const merge = require('webpack-merge')
const name = require('../package.json').name

module.exports = merge(common, {
  mode: 'development',
  output: {
    publicPath: `/${name}/`
  },
  devtool: 'inline-source-map',
  devServer: {
    host: 'localhost',
    port: 8001,
    clientLogLevel: 'warning',
    compress: true,
    inline: true,
    hot: true,
    progress: true,
    overlay: {
      warnings: false,
      errors: true
    }
  }
})

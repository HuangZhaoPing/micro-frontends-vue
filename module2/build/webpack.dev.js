const common = require('./webpack.common')
const merge = require('webpack-merge')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    host: 'localhost',
    port: 8002,
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

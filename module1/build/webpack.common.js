const VueLoaderPlugin = require('vue-loader/lib/plugin')
const { resolve } = require('./utils')
const name = require('../package.json').name

module.exports = {
  entry: resolve('src/main.js'),
  output: {
    path: resolve('dist'),
    library: name,
    libraryTarget: 'umd',
    libraryExport: 'default'
  },
  externals: {
    vue: 'Vue',
    vuex: 'Vuex',
    'vue-router': 'VueRouter',
    app: 'app'
  },
  resolve: {
    alias: {
      '@': resolve('src'),
      '@root': resolve()
    },
    extensions: ['.js', '.json', '.jsx', '.css', '.vue']
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        exclude: /(node_modules|bower_components)/,
        use: 'vue-loader'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}

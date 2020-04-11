const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { resolve } = require('./utils')
const name = require('../package').name

module.exports = {
  entry: resolve('src/main.js'),
  output: {
    filename: `${name}/[name].js`,
    path: resolve('dist'),
    library: name,
    libraryTarget: 'umd',
    libraryExport: 'default'
  },
  externals: {
    vue: 'Vue',
    vuex: 'Vuex',
    'vue-router': 'VueRouter'
  },
  resolve: {
    alias: {
      '@': resolve('src')
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
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: resolve('public/index.html')
    }),
    new CopyWebpackPlugin([
      {
        from: resolve('public'),
        to: './',
        ignore: ['index.html']
      }
    ])
  ]
}

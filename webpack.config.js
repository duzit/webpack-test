
const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './demo.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    // filename: 'bundle.js'
    filename: 'js/[name]-[chunkhash].js'
  },
  plugins: [
    new htmlWebpackPlugin({
      template: 'index.html',
      // [hash:5] 5位 hash 值
      filename: 'index-[hash:5].html',
      title: 'webpack test'
    })
  ]

}

const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './demo.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    // filename: 'bundle.js'
    filename: 'js/[name].js', // 指定放在js文件夹中
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/i,
        use: [
          'style-loader', 
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1, // 如果在css文件中使用import，则需此设置
            }
          }, 
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: 'index.html',
      // [hash:5] 5位 hash 值
      // filename: 'index-[hash:5].html',
      filename: 'index.html',
      title: process.env.NODE_ENV === 'development' ? 'webpack dev' : 'webpack prod'
    })
  ]

}
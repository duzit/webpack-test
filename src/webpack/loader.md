## loader
---
### 示例
* 安装 loader
```
npm install --save-dev css-loader
npm install --save-dev ts-loader
```
* 配置
```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: 'css-loader'
      },
      {
        test: /\.ts$/,
        use: 'ts-loader'
      }
    ]
  }
}
```

### 使用 loader 
1. 配置： 在 webpack.config.js 文件中指定 loader
2. 内联： 在每个 import 语句中显示指定 loader
3. CLI： 在 shell 命令中指定
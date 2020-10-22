## devtool
* 控制是否生成和如何生成 source map
* 使用 SourceMapDevToolPlugin 进行更细粒度的配置
* 切勿同时使用 devtool 选项和 SourceMapDevToolPlugin/EvalSourceMapDevToolPlugin 插件
* [webpack link](https://webpack.docschina.org/configuration/devtool/#root)

### 开发环境配置
* 配置后 在 控制台 --> sources --> webpack:// --> src 源代码，可设置debug等调试
```js
module.exports = {
  configureWebpack: (config) => {
    if (env !== 'production') {
      config.devtool = 'source-map';
    }
  }
}
```
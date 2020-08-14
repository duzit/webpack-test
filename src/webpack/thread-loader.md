## thread-loader
* 把这个 loader 放置在其他 loader 之前， 放置在这个 loader 之后的 loader 就会在一个单独的 worker 池(worker pool)中运行
* 在 worker 池(worker pool)中运行的 loader 是受到限制的  
1. 这些 loader 不能产生新的文件。
2. 这些 loader 不能使用定制的 loader API（也就是说，通过插件）。
3. 这些 loader 无法获取 webpack 的选项设置。  

**请仅在耗时的 loader 上使用**  
**会在多核 CPU 的机器上为 Babel/TypeScript 转译开启**

### 实例
```js
module.exports = {
  module: {
    rules: [
      {
        test: '/\.js$/',
        include: path.resolve("src"),
        use: [
          "thread-loader",
          "expensive-loader"
        ]
      }
    ]
  }
}
```

### 预热 warmup
* 可以通过预热 worker 池(worker pool)来防止启动 worker 时的高延时。
* 这会启动池(pool)内最大数量的 worker 并把指定的模块载入 node.js 的模块缓存中。
```js
const threadLoader = require('thread-loader')

threadLoader.warmup({

}, [
  "sass-loader",
  "babel-loader",
  ...
])
```
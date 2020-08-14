## cache-loader
* 在一些性能开销较大的loader之前添加此loader，以将结果缓存到磁盘里
* 请注意，保存和读取这些缓存文件会有一些时间开销，所以请只对性能开销较大的 loader 使用此 loader。

```js
module.exports = {
  rules: [
    {
      text: '/\.ext$/',
      use: [
        "cache-loader",
        ...loaders
      ],
      include: path.resolve('src')
    }
  ]
}
```
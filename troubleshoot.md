## trouble shoot
---

### css 文件不生效
* 需要在入口文件中引入css文件，而不是在 html 中使用 link
```js
entry: './demo.js',
import './src/styles/index.css'
```

### postcss-loader 和 autoprefixer 不生效
* 在 webpack.config.js 和 postcss.config.js 配置后，还需要在 package.json 配置 browserslist
```js
"browserslist": [
  "> 1%",
  "Android >= 4.0",
  "not ie <= 8"
]
```
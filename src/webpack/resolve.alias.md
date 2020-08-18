## resolve.alias
* 创建import 或 require 别名，确认引入模块变得简单
```js
const path = require('path')
module.exports = {
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
}
// 访问src目录下的文件
import { requestApi } from '@/api'

// vue.config.js chainWebpack
module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set('@', path.resolve('src'))
  }
}

// 精准匹配 在对应键值后加 $
module.exports = {
  resolve: {
    alias: {
      xyz$: path.resolve(__dirname, 'path/to/file.js'),
    }
  }
}
import Test1 from 'xyz'; // 精确匹配，所以 path/to/file.js 被解析和导入
```

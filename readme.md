## webpack
---

### module.noParse
* RegExp function string
* 防止webpack解析与 noParse 匹配的文件，忽略的文件中不应该包含 import define require 的调用，  
  或其他引用机制，忽略大型的lib 有助于提高构建性能。
```js
module.exports = {
  module: {
    noParse: /jquery|lodash/,
  }
}
```


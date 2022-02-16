---
title: NestedObject
---

## 嵌套对象

`NestedObject` 是所有可在宿主（Synthesizer V Studio）和客户端（脚本环境）之间传递的对象的基类。其实现了一个用于索引项目内任何内容的树状结构。此外，部分UI（用户界面）元素同样通过 `NestedObject` 接口对外连接。

## 方法

### getIndexInParent

```js
getIndexInParent() → {number}
```

获取在父级对象中当前对象的索引。在 Lua 中索引从 1 开始，在 JavaScript 中索引从 0 开始。

#### 返回：

类型：数字

### getParent

```js
getParent() → {NestedObject|undefined}
```

获取父级 [嵌套对象](nested_object.md) 。如果不存在则返回 `undefined`。

#### 返回：

类型：[嵌套对象](nested_object.md) | undefined

### isMemoryManaged

```js
isMemoryManaged() → {boolean}
```

检测选中的对象是否被内存管理（即脚本环境的垃圾回收）。

<BrowserOnly fallback={<div></div>}>{() => <GitalkComponent options={{
    clientID: '2537efeef8962e53223d',
    clientSecret: 'da454b36ea826630b34f708d39992fd962726a39',
    repo: 'synthesizer-v-r2-docs',
    owner: 'linyuansup',
    admin: ['linyuansup'],
    id: decodeURI(location.pathname),
    }} />}
</BrowserOnly>

import Gitalk from 'gitalk';
import 'gitalk/dist/gitalk.css';
import GitalkComponent from 'gitalk/dist/gitalk-component';
import BrowserOnly from '@docusaurus/BrowserOnly';
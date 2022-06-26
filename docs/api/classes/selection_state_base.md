---
title: SelectionStateBase
---

## 选择状态基础接口

选择状态的基本接口。

由 [编曲区选择状态](arrangement_selection_state.md) 和 [轨道内部选择状态](track_inner_selection_state.md) 继承。

## 方法

### clearAll

```js
clearAll() → {boolean}
```

对于此选择状态支持的所有对象类型，取消选择相应的对象。 如果所选内容发生更改，则返回  `true` 。

#### 返回：

类型：布尔

### hasSelectedContent

```js
hasSelectedContent() → {boolean}
```

检查是否有任何选定内容。

#### 返回：

类型：布尔

### hasUnfinishedEdits

```js
hasUnfinishedEdits() → {boolean}
```

检查所选对象是否具有未完成的编辑。

例如，如果用户拖动了多个注释/控制点，并且尚未释放鼠标，则返回 `true` 。

#### 返回：

类型：布尔

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
---
title: GroupSelection
---

## 音符组选择

音符组选择行为的一个集合。

继承自 [`编曲区选择状态`](arrangement_selection_state.md) 和 [`轨道内部选择状态`](track_inner_selection_state.md).

## 方法

### clearGroups

```js
clearGroups() → {boolean}
```

取消选作所有的 [`音符组引用`](note_group_reference.md)。如果被选中集合改变了，则返回 true。

#### 返回：

类型：布尔

### getSelectedGroups

```js
getSelectedGroups() → {array}
```

获取被选中的 [`音符组引用`](note_group_reference.md) 数组，顺序为选择时的顺序。

#### 返回：

一个 [`音符组引用`](note_group_reference.md) 数组

类型: 数组

### hasSelectedGroups

```js
hasSelectedGroups() → {boolean}
```

检查是否有至少一个 [`音符组引用`](note_group_reference.md) 被选中了。

#### 返回：

类型：布尔

### selectGroup

```js
selectGroup(reference)
```

添加一个 [`音符组引用`](note_group_reference.md) 至选中集合中。

#### 参数

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `reference` | [音符组引用](note_group_reference.md) |  |

### unselectGroup

```js
unselectGroup(reference) → {boolean}
```

取消选择一个 [`音符组引用`](note_group_reference.md). 如果被选中集合改变了，则返回 true。

#### 参数：

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `reference` | [音符组引用](note_group_reference.md) |  |

#### 返回：

类型：布尔

<BrowserOnly fallback={<div></div>}>{() => <GitalkComponent options={{
    clientID: '2537efeef8962e53223d',
    clientSecret: 'da454b36ea826630b34f708d39992fd962726a39',
    repo: 'synthesizer-v-r2-docs',
    owner: 'linyuansup',
    admin: ['linyuansup'],
    }} />}
</BrowserOnly>

import Gitalk from 'gitalk';
import 'gitalk/dist/gitalk.css';
import GitalkComponent from 'gitalk/dist/gitalk-component';
import BrowserOnly from '@docusaurus/BrowserOnly';
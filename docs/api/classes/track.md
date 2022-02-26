---
title: Track
---

## 轨道

轨道 (Track) 是 [音符组引用](note_group_reference.md) 的集合。一个 `轨道` 也包括了 [音符组](note_group.md) ，它是音轨的主要组。音轨内的第一个 [音符组引用](note_group_reference.md) 始终指向主要组。

`轨道` 默认的声库属性由第一个 [音符组引用](note_group_reference.md) 决定（即主要组）。

## 扩展

* [嵌套对象](nested_object.md)

## 方法

```js
addGroupReference(group) → {number}
```

向该 `轨道` 添加一个 [音符组引用](note_group_reference.md) ，并返回添加组的索引。它按照起始位置对所有组进行排序。

#### 参数

| 参数名 | 类型 | 说明 |
| --- | --- | --- |
| `group` | [音符组引用](note_group_reference.md) |  |

#### 返回：

类型：数

```js
clone() → {Track}
```

深复制当前对象。

#### 返回：

类型：[轨道](track.md)

```js
getDisplayColor() → {string}
```

获得轨道的颜色（十六进制字符串）

#### 返回：

类型：字符串

```js
getDisplayOrder() → {number}
```

获取父 [工程](project.md) 中轨道的显示顺序。轨道的显示顺序可以与其储存的索引不同。在编曲区界面中显示的轨道顺序总是基于显示顺序。
#### 返回：

类型：数

```js
getDuration() → {number}
```

获取 `轨道` 的持续时间，被定义为最后一个 [音符组引用](note_group_reference.md) 结束的位置，以块 (blicks) 为单位，

#### 返回：

类型：数

```js
getGroupReference(index) → {NoteGroupReference}
```

获取第 `index` 个 [音符组引用](note_group_reference.md) 索引。第一个是主组，后跟项目库中引用了 [音符组](note_group.md)的组。这些组按起始位置升序排序。

#### 参数

| 参数名 | 类型 | 说明 |
| --- | --- | --- |
| `index` | number | |


#### 返回：

类型：[音符组引用](note_group_reference.md)

```js
getIndexInParent() → {number}
```

> 继承自：[嵌套对象 - getIndexInParent](nested_object.md)

获取当前对象在其父对象中的索引。 在 Lua 中，这个索引从 1 开始。在 JavaScript 中，这个索引从 0 开始。
#### 返回：

类型：数

```js
getName() → {string}
```

获得轨道名称。

#### 返回：

类型：字符串

```js
getNumGroups() → {number}
```

获取该 `轨道` 中的 [音符组引用](note_group_reference.md) 的数量，包括主要组。

#### 返回：

类型：数

```js
getParent() → {NestedObject|undefined}
```

> 继承自：[嵌套对象 - getParent](nested_object.md)

获取父 [嵌套对象](nested_object.md) 。如果当前对象未附加到父对象，则返回 `undefined` 。

#### 返回：

类型：[嵌套对象](nested_object.md) | `undefined`

---
```js
isBounced() → {boolean}
```

用于决定是否导出到文件，它显示在"渲染面板 - 音轨"中。

#### 返回：

类型：布尔

```js
isMemoryManaged() → {boolean}
```

> 继承自：[嵌套对象 - isMemoryManaged](nested_object.md)

检测选中的对象是否被内存管理（即脚本环境的垃圾回收）。

#### 返回：

类型：布尔

```js
removeGroupReference(index)
```

从 `音轨` 中移除第 `index` 个 [音符组引用](note_group_reference.md) 。

#### 参数

| 参数名 | 类型 | 说明 |
| --- | --- | --- |
| `index` | number |  |

---
```js
setBounced(enabled)
```

设置是否将 `轨道` 导出到文件。请参阅 [轨道 - `isBounced`](track.md)。

#### 参数

| 参数名 | 类型 | 说明 |
| --- | --- | --- |
| `enabled` | boolean | |

```js
setDisplayColor(colorStr)
```

设置 `轨道` 的显示颜色。（十六进制字符串）

#### 参数

| 参数名 | 类型 | 说明 |
| --- | --- | --- |
| `colorStr` | string |  |
---
```js
setName(name)
```

设置当前 `轨道` 的名称。

#### 参数

| 参数名 | 类型 | 说明 |
| --- | --- | --- |
| `name` | string |  |

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
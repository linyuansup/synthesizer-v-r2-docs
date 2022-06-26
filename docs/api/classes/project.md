---
title: Project
---

## 工程

可用的最大的对象，包含了 [`音轨`](track.md) 、 [`时间轴`](time_axis.md) 、[`音符组`](note_group.md) 等。

## 扩展

 * [嵌套对象](nested_object.md)

## 方法

### addNoteGroup

```js
addNoteGroup(group, suggestedIndex) → {number}
```

在 `suggestedIndex` 处插入一个[`音符组`](note_group.md) 。如果 `suggestedIndex` 没有给出，则该 [`音符组`](note_group.md) 将会被添加到末尾。其返回新增 [`音符组`](note_group.md) 的索引。

#### 参数：

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `group` | [音符组](note_group.md) |  |
| `suggestedIndex` | 数字 | 可选 |

#### 返回：

类型：数字

### addTrack

```js
addTrack(track) → {number}
```

将一个 [`音轨`](track.md) 添加到 `项目` 中。返回新增 [`音轨`](track.md) 的索引。

#### 参数：

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `track` | [轨道](track.md) |   |

#### 返回：

类型：数字

### getDuration

```js
getDuration() → {number}
```

获取该 `项目` 的持续时间（blicks），其由最长 [音轨`](track.md) 的持续时间所决定。

#### 返回：

类型：数字

### getFileName

```js
getFileName() → {string}
```

获取该工程在文件系统中的绝对路径

#### 返回：

类型：字符串

### getIndexInParent

```js
getIndexInParent() → {number}
```

>继承自：[嵌套对象 - getIndexInParent](nested_object.md)

获取在父级对象中当前对象的索引。在 Lua 中索引从 1 开始，在 JavaScript 中索引从 0 开始。

### getNoteGroup

```js
getNoteGroup(id) → {NoteGroup|undefined}
```

如果 `id` 为一个数字，则获取该项目库中的第 `id` 个 [`音符组`](note_group.md) 。

如果 `id` 为一个字符串，则在该项目库中寻找 UUID 为 `id` 的 [`音符组`](note_group.md) ；如果这样的 [`音符组`](note_group.md) 不存在，则返回 `undefined` 。

#### 参数：

| 参数名 | 类型             | 描述 |
| :--- | :--------------- | :--- |
| `id` | 数字 \| 字符串 |      |

#### 返回：

类型：[音符组](note_group.md) | **undefined**

### getNumNoteGroupsInLibrary

```js
getNumNoteGroupsInLibrary() → {number}
```

获取该 [`音符组`](note_group.md) 在项目的音符组库中的编号。

该函数不会统计主音符组，并且与 [`音符组引用`](note_group_reference.md) 的编号无关。

#### 返回：

类型：数字

### getNumTracks

```js
getNumTracks() → {number}
```

获取音轨数量。

#### 返回：

类型：数字

### getParent

```js
getParent() → {NestedObject|undefined}
```

>继承自：[嵌套对象 - getParent](nested_object.md)

获取父级 [嵌套对象](nested_object.md) 。如果不存在则返回 `undefined`。

#### 返回：

类型：[嵌套对象](nested_object.md) | **undefined**

### getTimeAxis

```js
getTimeAxis() → {TimeAxis}
```

获取当前 `项目` 的 [`时间轴`](time_axis.md) 对象。

#### 返回：

类型： [`时间轴`](time_axis.md)

### getTrack

```js
getTrack(index) → {Track}
```

获取第 `index` 个 [`音轨`](track.md) 。索引（index）是基于存储顺序而非显示顺序。

#### 参数：

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `index` | 数字 |  |

#### 返回：

类型：[轨道](track.md)

### isMemoryManaged

```js
isMemoryManaged() → {boolean}
```

>继承自：[嵌套对象 - isMemoryManaged](nested_object.md)

检测选中的对象是否被内存管理（即脚本环境的垃圾回收）。

#### 返回：

类型：布尔

### newUndoRecord

```js
newUndoRecord()
```

为当前 `项目` 新增一个撤销记录。也就是说，当用户按下 `Ctrl + Z` 或 `Ctrl + Y` 时，在最后一条撤销记录之后的所有编辑都会一起被撤销 / 重做。

在脚本开始执行时，新的撤销记录会自动添加到当前打开的项目中。

### removeNoteGroup

```js
removeNoteGroup(index)
```

从项目音符组库中移除第 `index` 个 [`音符组`](note_group.md) 。其也会移除所有引用了该 [`音符组`](note_group.md) 的 [`音符组引用`](note_group_reference.md) 。

#### 参数：

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `index` | 数字 |  |

### removeTrack

```js
removeTrack(index)
```

从该 `项目` 中移除第 `index` 个 [`音轨`](track.md) 。

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `index` | 数字 |  |

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
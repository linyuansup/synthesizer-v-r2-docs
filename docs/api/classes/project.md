---
title: Project
---

## 工程

可用的最大的对象，包含了 [`Track（音轨）`](track.md) 、 [`TimeAxis（时间轴）`](https://resource.dreamtonics.com/scripting/TimeAxis.html) 、[`音符组`](note_group.md) 等。

### 扩展

- [嵌套对象](nested_object.md)

### 方法

#### addNoteGroup(group, suggestedIndex) → {number}

在 `suggestedIndex` 处插入一个[`音符组`](note_group.md) 。如果 `suggestedIndex` 没有给出，则该 [`音符组`](note_group.md) 将会被添加到末尾。其返回新增 [`音符组`](note_group.md) 的索引。

##### 参数：

| 参数名             | 类型                                                         | 描述     |
| :--------------- | :----------------------------------------------------------- | :------- |
| `group`          | [NoteGroup](note_group.md) |          |
| `suggestedIndex` | number                                                       | （可选） |

##### 返回：

类型	number

#### addTrack(track) → {number}

将一个 [`Track（音轨）`](track.md) 添加到 `Project（项目）` 中。返回新增 [`Track（音轨）`](track.md) 的索引。

##### 参数：

| 参数名    | 类型                                                         | 描述 |
| :------ | :----------------------------------------------------------- | :--- |
| `track` | [轨道](track.md) |      |

##### 返回：

类型	number

#### getDuration() → {number}

获取该 `Project（项目）` 的持续时间（blicks），其由最长 [`Track（音轨）`](track.md) 的持续时间所决定。

##### 返回：

类型	number

#### getFileName() → {string}

获取该工程在文件系统中的绝对路径

##### 返回：

类型	string

#### getIndexInParent() → {number}

> 继承自：[NestedObject#getIndexInParent](nested_object.md#getIndexInParent)

获取当前对象在其父对象中的索引。对 Lua，该索引值从1开始。对JavaScript，该索引值从0开始。

##### 返回：

类型	number

#### getNoteGroup(id) → {[NoteGroup](note_group.md)|undefined}

如果 `id` 为一个数字，则获取该项目库中的第 `id` 个 [`音符组`](note_group.md) 。

如果 `id` 为一个字符串，则在该项目库中寻找 UUID 为 `id` 的[`音符组`](note_group.md) ；如果这样的 [`音符组`](note_group.md) 不存在，则返回 `undefined` 。

##### 参数：

| 参数名 | 类型             | 描述 |
| :--- | :--------------- | :--- |
| `id` | number \| string |      |

##### 返回：

类型	[NoteGroup](note_group.md) | undefined

#### getNumNoteGroupsInLibrary() → {number}

获取该 [`音符组`](note_group.md) 在项目的音符组库中的编号。

该函数不会统计主音符组，并且与 [`音符组引用`](note_group_reference.md) 的编号无关。

##### 返回：

类型	number

#### getNumTracks() → {number}

获取音轨数量。

##### 返回：

类型	number

#### getParent() → {[嵌套对象](nested_object.md)|undefined}

> 继承自：[NestedObject#getParent](nested_object.md#getParent)

获取父 [`NestedObject`](nested_object.md) 。如果当前对象未连接到一个父对象，则返回 `undefined` 。

##### 返回：

类型	[嵌套对象](nested_object.md) | undefined

#### getTimeAxis() → {[TimeAxis](https://resource.dreamtonics.com/scripting/TimeAxis.html)}

获取当前 `Project（项目）` 的 [`TimeAxis（时间轴）`](https://resource.dreamtonics.com/scripting/TimeAxis.html) 对象。

##### 返回：

类型	 [`TimeAxis`](https://resource.dreamtonics.com/scripting/TimeAxis.html) 

#### getTrack(index) → {[轨道](track.md)}

获取第 `index` 个 [`Track（音轨）`](track.md) 。索引（index）是基于存储顺序而非显示顺序。

##### 参数：

| 参数名    | 类型   | 描述 |
| :------ | :----- | :--- |
| `index` | number |      |

##### 返回：

类型	[轨道](track.md)

#### isMemoryManaged() → {boolean}

> 继承自：[NestedObject#isMemoryManaged](nested_object.md#isMemoryManaged)

检查当前对象是否被内存管理（即垃圾是否被脚本环境所收集）。

##### 返回：

类型	布尔

#### newUndoRecord()

为当前 `Project（项目）` 新增一个撤销记录。也就是说，当用户按下 `Ctrl + Z` 或 `Ctrl + Y` 时，在最后一条撤销记录之后的所有编辑都会一起被撤销/重做。

在脚本开始执行时，新的撤销记录会自动添加到当前打开的项目中。

#### removeNoteGroup(index)

从项目音符组库中移除第 `index` 个 [`音符组`](note_group.md) 。其也会移除所有引用了该 [`音符组`](note_group.md) 的 [`音符组引用`](note_group_reference.md) 。

##### 参数：

| 参数名    | 类型   | 描述 |
| :------ | :----- | :--- |
| `index` | number |      |

#### removeTrack(index)

从该 `Project（项目）` 中移除第 `index` 个 [`Track（音轨）`](track.md) 。

| 参数名    | 类型   | 描述 |
| :------ | :----- | :--- |
| `index` | number |      |

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
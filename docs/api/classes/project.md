---
title: Project
---

## 工程

可用的最大的对象，包含了 [`Track（音轨）`](https://resource.dreamtonics.com/scripting/Track.html) 、 [`TimeAxis（时间轴）`](https://resource.dreamtonics.com/scripting/TimeAxis.html) 、[`NoteGroup（音符组）`](https://resource.dreamtonics.com/scripting/NoteGroup.html) 等。

### 扩展

- [NestedObject](https://resource.dreamtonics.com/scripting/NestedObject.html)

### 方法

#### addNoteGroup(group, suggestedIndex) → {number}

在 `suggestedIndex` 处插入一个[`NoteGroup（音符组）`](https://resource.dreamtonics.com/scripting/NoteGroup.html) 。如果 `suggestedIndex` 没有给出，则该 [`NoteGroup（音符组）`](https://resource.dreamtonics.com/scripting/NoteGroup.html) 将会被添加到末尾。其返回新增 [`NoteGroup（音符组）`](https://resource.dreamtonics.com/scripting/NoteGroup.html) 的索引。

##### 参数：

| 参数名             | 类型                                                         | 描述     |
| :--------------- | :----------------------------------------------------------- | :------- |
| `group`          | [NoteGroup](https://resource.dreamtonics.com/scripting/NoteGroup.html) |          |
| `suggestedIndex` | number                                                       | （可选） |

##### 返回值：

类型	number

#### addTrack(track) → {number}

将一个 [`Track（音轨）`](https://resource.dreamtonics.com/scripting/Track.html) 添加到 `Project（项目）` 中。返回新增 [`Track（音轨）`](https://resource.dreamtonics.com/scripting/Track.html) 的索引。

##### 参数：

| 参数名    | 类型                                                         | 描述 |
| :------ | :----------------------------------------------------------- | :--- |
| `track` | [Track](https://resource.dreamtonics.com/scripting/Track.html) |      |

##### 返回值：

类型	number

#### getDuration() → {number}

获取该 `Project（项目）` 的持续时间（blicks），其由最长 [`Track（音轨）`](https://resource.dreamtonics.com/scripting/Track.html) 的持续时间所决定。

##### 返回值：

类型	number

#### getFileName() → {string}

获取该工程在文件系统中的绝对路径

##### 返回值：

类型	string

#### getIndexInParent() → {number}

> 继承自：[NestedObject#getIndexInParent](https://resource.dreamtonics.com/scripting/NestedObject.html#getIndexInParent)

获取当前对象在其父对象中的索引。对 Lua，该索引值从1开始。对JavaScript，该索引值从0开始。

##### 返回值：

类型	number

#### getNoteGroup(id) → {[NoteGroup](https://resource.dreamtonics.com/scripting/NoteGroup.html)|undefined}

如果 `id` 为一个数字，则获取该项目库中的第 `id` 个 [`NoteGroup（音符组）`](https://resource.dreamtonics.com/scripting/NoteGroup.html) 。

如果 `id` 为一个字符串，则在该项目库中寻找 UUID 为 `id` 的[`NoteGroup（音符组）`](https://resource.dreamtonics.com/scripting/NoteGroup.html) ；如果这样的 [`NoteGroup（音符组）`](https://resource.dreamtonics.com/scripting/NoteGroup.html) 不存在，则返回 `undefined` 。

##### 参数：

| 参数名 | 类型             | 描述 |
| :--- | :--------------- | :--- |
| `id` | number \| string |      |

##### 返回值：

类型	[NoteGroup](https://resource.dreamtonics.com/scripting/NoteGroup.html) | undefined

#### getNumNoteGroupsInLibrary() → {number}

获取该 [`NoteGroup（音符组）`](https://resource.dreamtonics.com/scripting/NoteGroup.html) 在项目的音符组库中的编号。

该函数不会统计主音符组，并且与 [`NoteGroupReference（音符组引用）`](https://resource.dreamtonics.com/scripting/NoteGroupReference.html) 的编号无关。

##### 返回值：

类型	number

#### getNumTracks() → {number}

获取音轨数量。

##### 返回值：

类型	number

#### getParent() → {[NestedObject](https://resource.dreamtonics.com/scripting/NestedObject.html)|undefined}

> 继承自：[NestedObject#getParent](https://resource.dreamtonics.com/scripting/NestedObject.html#getParent)

获取父 [`NestedObject`](https://resource.dreamtonics.com/scripting/NestedObject.html) 。如果当前对象未连接到一个父对象，则返回 `undefined` 。

##### 返回值：

类型	[NestedObject](https://resource.dreamtonics.com/scripting/NestedObject.html) | undefined

#### getTimeAxis() → {[TimeAxis](https://resource.dreamtonics.com/scripting/TimeAxis.html)}

获取当前 `Project（项目）` 的 [`TimeAxis（时间轴）`](https://resource.dreamtonics.com/scripting/TimeAxis.html) 对象。

##### 返回值：

类型	 [`TimeAxis`](https://resource.dreamtonics.com/scripting/TimeAxis.html) 

#### getTrack(index) → {[Track](https://resource.dreamtonics.com/scripting/Track.html)}

获取第 `index` 个 [`Track（音轨）`](https://resource.dreamtonics.com/scripting/Track.html) 。索引（index）是基于存储顺序而非显示顺序。

##### 参数：

| 参数名    | 类型   | 描述 |
| :------ | :----- | :--- |
| `index` | number |      |

##### 返回值：

类型	[Track](https://resource.dreamtonics.com/scripting/Track.html)

#### isMemoryManaged() → {boolean}

> 继承自：[NestedObject#isMemoryManaged](https://resource.dreamtonics.com/scripting/NestedObject.html#isMemoryManaged)

检查当前对象是否被内存管理（即垃圾是否被脚本环境所收集）。

##### 返回值：

类型	布尔

#### newUndoRecord()

为当前 `Project（项目）` 新增一个撤销记录。也就是说，当用户按下 `Ctrl + Z` 或 `Ctrl + Y` 时，在最后一条撤销记录之后的所有编辑都会一起被撤销/重做。

在脚本开始执行时，新的撤销记录会自动添加到当前打开的项目中。

#### removeNoteGroup(index)

从项目音符组库中移除第 `index` 个 [`NoteGroup（音符组）`](https://resource.dreamtonics.com/scripting/NoteGroup.html) 。其也会移除所有引用了该 [`NoteGroup（音符组）`](https://resource.dreamtonics.com/scripting/NoteGroup.html) 的 [`NoteGroupReference（音符组引用）`](https://resource.dreamtonics.com/scripting/NoteGroupReference.html) 。

##### 参数：

| 参数名    | 类型   | 描述 |
| :------ | :----- | :--- |
| `index` | number |      |

#### removeTrack(index)

从该 `Project（项目）` 中移除第 `index` 个 [`Track（音轨）`](https://resource.dreamtonics.com/scripting/Track.html) 。

| 参数名    | 类型   | 描述 |
| :------ | :----- | :--- |
| `index` | number |      |

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
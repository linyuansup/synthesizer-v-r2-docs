---
title: NoteGroup
---

## 音符组

一组便于重复使用的成组的音符及其参数。

要将 `音符组` 放入到一个 [`轨道`](track.md) 中，其首先必须被封装到一个为其提供环境（如声音、语言、时间和音高偏移）的 [`音符组引用`](note_group_reference.md) 中。

## 扩展

 * [嵌套对象](nested_object.md)

## 方法

### addNote

```js
addNote(note) → {number}
```

将一个音符加入 `音符组` 内并返回被加入音符的索引。这些音符会按照起始位置升序排序。

#### 参数：

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `音符` | [音符](note.md) |      |

#### 返回：

类型：数字

### clone

```js
clone() → {NoteGroup}
```

对当前对象的一个深复制。

#### 返回：

类型：[音符组](note_group.md)

### getIndexInParent

```js
getIndexInParent() → {number}
```

>继承自：[嵌套对象 - getIndexInParent](nested_object.md)

获取在父级对象中当前对象的索引。在 Lua 中索引从 1 开始，在 JavaScript 中索引从 0 开始。

#### 返回：

类型：数字

### getName

```js
getName() → {string}
```

获取该 `音符组` 的用户指定参数名。

#### 返回：

类型：字符串

### getNote()

```js
getNote(index) → {Note}
```

获取索引位置位于 `index` 的音符。这些音符会按照起始位置排序。

#### 参数：

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `index` | number |  |

#### 返回：

类型：[音符](note.md)

### getNumNotes

```js
getNumNotes() → {number}
```

获取该 `音符组` 内的音符数量。

#### 返回：

类型：数字

### getParameter

```js
getParameter(type) → {Automation}
```

获取 `type` 参数的 [`自动化`](automation.md) 对象。其不区分大小写。

 `type` 应当为 [`自动化 - getDefinition`](automation.md) 中的表格里 `typeName` 一列所示的字符串之一。

#### 参数：

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `type` | 字符串 |  |

#### 返回：

类型：[自动化](automation.md)

### getParent

```js
getParent() → {NestedObject|undefined}
```

>继承自：[嵌套对象 - getParent](nested_object.md)

获取父级 [嵌套对象](nested_object.md) 。如果不存在则返回 `undefined`。

#### 返回：

类型：[嵌套对象](nested_object.md) | **undefined**

### getUUID

```js
getUUID() → {string}
```

获取 UUID（Universally Unique Identifier，即通用唯一识别码）。与参数名不同，一个 UUID 在整个项目中都是唯一的，而且可以用来将一个 [`音符组引用`](note_group_reference.md) 和一个 `音符组` 关联起来。

一个 UUID 差不多长这样："ab85d637-d80b-4628-9c27-007ea74029af"。

#### 返回：

类型：字符串

### isMemoryManaged

```js
isMemoryManaged() → {boolean}
```

>继承自：[嵌套对象 - isMemoryManaged](nested_object.md)

检测选中的对象是否被内存管理（即脚本环境的垃圾回收）。

#### 返回：

类型：布尔

### removeNote

```js
removeNote(index)
```

移除索引位于 `index` 的音符。

#### 参数：

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `index` | 数字 |  |

### setName

```js
setName(name)
```

设置该 `音符组` 的名称。

#### 参数：

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `name` | 字符串 |  |

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
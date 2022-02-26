---
title: NoteGroupReference
---

## 音符组引用

对于 [`音符组`](note_group.md) 的一个引用，其中包括一些可选的时间、音高偏移和声音 / 数据库属性。其将一个 [`音符组`](note_group.md) 放置于一个语言环境中，以完成文字到发音音素的转换。

一个 `音符组引用` 将始终被置于一个 [`轨道`](track.md) 中。一个 [`音符组`](note_group.md) 可能会被多个 `音符组引用` 所引用。

## 扩展

 * [嵌套对象](nested_object.md)

## 方法

### clone

```js
clone() → {NoteGroupReference}
```

对当前对象进行深拷贝。

注意：由于 `音符组引用` 和并没有“拥有”与之对应的 [`音符组`](note_group.md) ，因此上述过程并不会复制对应的 [`音符组`](note_group.md) 。

#### 返回：

类型：[音符组引用](note_group_reference.md)

### getDuration

```js
getDuration() → {number}
```

该 `音符组引用` 的持续时间（blicks），等价于 `getEnd() - getOnset()` 。

#### 返回：

类型：数字

### getEnd

```js
getEnd() → {number}
```

获取其结束位置（blicks），即对应 [`音符组`](note_group.md) 的最后一个音符的结束时间再加上时间偏移量。

如果该 `音符组引用` 拥有一个音频文件（[`音符组引用 - isInstrumental`](note_group_reference.md)）， `getEnd()` 将会返回该音频的结束时间（blicks）加上时间偏移量。但如果这个 `音符组引用` 并没有被置于一个 [`项目`](project.md) 中，就会没有足够的信息来确定该音频在音乐时间单位上的长度（译者注：推测这里的意思应该是缺少 bpm 数值），而 `getEnd()` 将假定持续时间为零。

#### 返回：

类型：数字

### getIndexInParent

```js
getIndexInParent() → {number}
```

>继承自：[嵌套对象 - getIndexInParent](nested_object.md)

获取在父级对象中当前对象的索引。在 Lua 中索引从 1 开始，在 JavaScript 中索引从 0 开始。

#### 返回：

类型：数字

### getOnset

```js
getOnset() → {number}
```

获取当前音符的起始位置 (blicks)，即对应 [`音符组`](note_group.md) 的首个音符的起始时间再加上时间偏移量。

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

### getPitchOffset

```js
getPitchOffset() → {number}
```

获取应用于目标 [`音符组`](note_group.md) 中所有音符的音高偏移量（半音）。

#### 返回：

类型：数字

### getTarget

```js
getTarget() → {NoteGroup}
```

获取对应的 [`音符组`](note_group.md) 。

#### 返回：

类型：[音符组](note_group.md)

### getTimeOffset

```js
getTimeOffset() → {number}
```

获取应用于目标 [`音符组`](note_group.md) 中所有音符的时间偏移量（blicks）。

#### 返回：

类型：数字

### getVoice

```js
getVoice() → {object}
```

获取一个包含有当前音符组默认声音属性的对象，类似于 [`音符 - getAttributes`](note.md)。

该对象含有以下属性。

- `tF0Left`: `数字` 音高变化 - 时长 - 左（秒）
- `tF0Right`: `数字` 音高变化 - 时长 - 右（秒）
- `dF0Left`: `数字` 音高变化 - 深度 - 左（半音）
- `dF0Right`: `数字` 音高变化 - 深度 - 右（半音）
- `tF0VbrStart`: `数字` 颤音 - 开始（秒）
- `tF0VbrLeft`: `数字` 颤音 - 左（秒）
- `tF0VbrRight`: `数字` 颤音 - 右（秒）
- `dF0Vbr`: `数字` 颤音 - 深度（半音）
- `fF0Vbr`: `数字` 颤音 - 频率（Hz）
- `paramLoudness`: `数字` 参数 - 响度（dB，分贝）
- `paramTension`: `数字` 参数 - 张力
- `paramBreathiness`: `数字` 参数 - 气声
- `paramGender`: `数字` 参数 - 性别

#### 返回：

类型：object

### isInstrumental

```js
isInstrumental() → {boolean}
```

该 `音符组引用` 是否引用的是一个外部音频文件。如果是，就一定不能引用一个 [`音符组`](note_group.md) 。

#### 返回：

类型：布尔

### isMain

```js
isMain() → {boolean}
```

当前 `音符组引用` 是否是其父 [`音轨`](track.md) 的主音符组。

#### 返回：

类型：布尔

### isMemoryManaged

```js
isMemoryManaged() → {boolean}
```

>继承自：[嵌套对象 - isMemoryManaged](nested_object.md)

检测选中的对象是否被内存管理（即脚本环境的垃圾回收）。

#### 返回：

类型：布尔

### setPitchOffset

```js
setPitchOffset(pitchOffset)
```

将音高偏移设置为 `pitchOffset` （半音）。

#### 参数：

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `pitchOffset` | number |  |

### setTarget

```js
setTarget(group)
```

设定对应目标 [`音符组`](note_group.md) 。

注意其一旦被设置，作为目标的音符组就不可再被修改了。

#### 参数：

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `group` | [音符组](note_group.md) |  |

### setVoice(attributes)

```js
setVoice(attributes)
```

依照属性对象（其定义见 [`音符组引用 - getVoice`](note_group_reference.md) ）设置声音属性。属性对象不需要是完整的，只有给出的属性才会被更新（见 [`音符 - setAttributes`](note.md)）。

#### 参数：

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `attributes` | object |  |

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
---
title: NoteGroupReference
---

## 音符组引用

对于 [`NoteGroup（音符组）`](https://resource.dreamtonics.com/scripting/NoteGroup.html) 的一个引用，其中包括一些可选的时间、音高偏移和声音/数据库属性。其将一个 [`NoteGroup（音符组）`](https://resource.dreamtonics.com/scripting/NoteGroup.html) 放置于一个语言环境中，以完成文字到发音音素的转换。

一个 `NoteGroupReference（音符组引用）` 将始终被置于一个 [`Track（轨道）`](https://resource.dreamtonics.com/scripting/Track.html) 中。一个 [`NoteGroup（音符组）`](https://resource.dreamtonics.com/scripting/NoteGroup.html) 可能会被多个 `NoteGroupReference（音符组引用）` 所引用。

### 扩展

- [NestedObject](https://resource.dreamtonics.com/scripting/NestedObject.html)

### 方法

#### clone() → {[NoteGroupReference](https://resource.dreamtonics.com/scripting/NoteGroupReference.html)}

对当前对象的一个深复制。

注意：由于 `NoteGroupReference（音符组引用）` 和并没有“拥有”与之对应的 [`NoteGroup（音符组）`](https://resource.dreamtonics.com/scripting/NoteGroup.html) ，因此上述过程并不会复制对应的 [`NoteGroup（音符组）`](https://resource.dreamtonics.com/scripting/NoteGroup.html) 。

##### 返回值：

类型	[NoteGroupReference](https://resource.dreamtonics.com/scripting/NoteGroupReference.html)

#### getDuration() → {number}

该 `NoteGroupReference（音符组引用）` 的持续时间（blicks）。

等价于 `getEnd() - getOnset()` 。

##### 返回值：

类型	number

#### getEnd() → {number}

获取其结束位置（blicks），即对应 [`NoteGroup（音符组）`](https://resource.dreamtonics.com/scripting/NoteGroup.html) 的最后一个音符的结束时间再加上时间偏移量。

如果该 `NoteGroupReference（音符组引用）` 拥有一个音频文件（[`NoteGroupReference#isInstrumental`](https://resource.dreamtonics.com/scripting/NoteGroupReference.html#isInstrumental)）， `getEnd()` 将会返回该音频的结束时间（blicks）加上时间偏移量。但如果这个 `NoteGroupReference（音符组引用）` 并没有被置于一个 [`Project（项目）`](https://resource.dreamtonics.com/scripting/Project.html) 中，就会没有足够的信息来确定该音频在音乐时间单位上的长度（译者注：推测这里的意思应该是缺少bpm数值），而 `getEnd()` 将假定持续时间为零。

##### 返回值：

类型	number

#### getIndexInParent() → {number}

> 继承自：[NestedObject#getIndexInParent](https://resource.dreamtonics.com/scripting/NestedObject.html#getIndexInParent)

获取当前对象在其父对象中的索引。对 Lua，该索引值从1开始。对JavaScript，该索引值从0开始。

##### 返回值：

类型	number

#### getOnset() → {number}

获取当前音符的起始位置(blicks），即对应 [`NoteGroup（音符组）`](https://resource.dreamtonics.com/scripting/NoteGroup.html) 的首个音符的起始时间再加上时间偏移量。

##### 返回值：

类型	number

#### getParent() → {[NestedObject](https://resource.dreamtonics.com/scripting/NestedObject.html)|undefined}

> 继承自：[NestedObject#getParent](https://resource.dreamtonics.com/scripting/NestedObject.html#getParent)

获取父 [`NestedObject`](https://resource.dreamtonics.com/scripting/NestedObject.html) 。如果当前对象未连接到一个父对象，则返回 `undefined` 。

##### 返回值：

类型	[NestedObject](https://resource.dreamtonics.com/scripting/NestedObject.html) | undefined

#### getPitchOffset() → {number}

获取应用于目标 [`NoteGroup`](https://resource.dreamtonics.com/scripting/NoteGroup.html) 中所有音符的音高偏移量（半音）。

##### 返回值：

类型	number

#### getTarget() → {[NoteGroup](https://resource.dreamtonics.com/scripting/NoteGroup.html)}

获取对应的 [`NoteGroup（音符组）`](https://resource.dreamtonics.com/scripting/NoteGroup.html) 。

##### 返回值：

类型	[NoteGroup](https://resource.dreamtonics.com/scripting/NoteGroup.html)

#### getTimeOffset() → {number}

获取应用于目标 [`NoteGroup（音符组）`](https://resource.dreamtonics.com/scripting/NoteGroup.html) 中所有音符的时间偏移量（blicks）。

##### 返回值：

类型	number

#### getVoice() → {object}

获取一个包含有当前音符组默认声音属性的对象，类似于 [`Note#getAttributes`](https://resource.dreamtonics.com/scripting/Note.html#getAttributes)。

该对象含有以下属性。

- `tF0Left`: `number` 音高变化 - 时长 - 左（秒）
- `tF0Right`: `number` 音高变化 - 时长 - 右（秒）
- `dF0Left`: `number` 音高变化 - 深度 - 左（半音）
- `dF0Right`: `number` 音高变化 - 深度 - 右（半音）
- `tF0VbrStart`: `number` 颤音 - 开始（秒）
- `tF0VbrLeft`: `number` 颤音 - 左（秒）
- `tF0VbrRight`: `number` 颤音 - 右（秒）
- `dF0Vbr`: `number` 颤音 - 深度（半音）
- `fF0Vbr`: `number` 颤音 - 频率（Hz）
- `paramLoudness`: `number` 参数 - 响度（dB，分贝）
- `paramTension`: `number` 参数 - 张力
- `paramBreathiness`: `number` 参数 - 气声
- `paramGender`: `number` 参数 - 性别

##### 返回值：

类型	object

#### isInstrumental() → {boolean}

该 `NoteGroupReference（音符组引用）` 是否引用的是一个外部音频文件。如果是，就一定不能引用一个 [`NoteGroup（音符组）`](https://resource.dreamtonics.com/scripting/NoteGroup.html) 。

##### 返回值：

类型	布尔

#### isMain() → {boolean}

当前 `NoteGroupReference（音符组引用）` 是否是其父 [`Track（音轨）`](https://resource.dreamtonics.com/scripting/Track.html) 的主音符组。

##### 返回值：

类型	布尔

#### isMemoryManaged() → {boolean}

> 继承自：[NestedObject#isMemoryManaged](https://resource.dreamtonics.com/scripting/NestedObject.html#isMemoryManaged)

检查当前对象是否被内存管理（即垃圾是否被脚本环境所收集）。

##### 返回值：

类型	布尔

#### setPitchOffset(pitchOffset)

将音高偏移设置为 `pitchOffset` （半音）。

##### 参数：

| 参数名          | 类型   | 描述 |
| :------------ | :----- | :--- |
| `pitchOffset` | number |      |

#### setTarget(group)

设定对应目标 [`NoteGroup（音符组）`](https://resource.dreamtonics.com/scripting/NoteGroup.html) 。

注意其一旦被设置，作为目标的音符组就不可再被修改了。

##### 参数：

| 参数名    | 类型                                                         | 描述 |
| :------ | :----------------------------------------------------------- | :--- |
| `group` | [NoteGroup](https://resource.dreamtonics.com/scripting/NoteGroup.html) |      |

#### setVoice(attributes)

依照属性对象（其定义见 [`NoteGroupReference#getVoice`](https://resource.dreamtonics.com/scripting/NoteGroupReference.html#getVoice) ）设置声音属性。属性对象不需要是完整的，只有给出的属性才会被更新（见 [`Note#setAttributes`](https://resource.dreamtonics.com/scripting/Note.html#setAttributes)）。

##### 参数：

| 参数名         | 类型   | 描述 |
| :----------- | :----- | :--- |
| `attributes` | object |      |

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
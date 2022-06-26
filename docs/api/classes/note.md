---
title: Note
---

## 音符

一个由音高 (pitch)、歌词 (lyrics)、起始时间 (onset)、时长 (duration) 等定义的音符。其会被置于一个 [`音符组`](note_group.md) 中。

## 扩展

* [嵌套对象](nested_object.md)

## 方法

### clone

```js
clone() → {Note}
```

对当前对象进行深复制。

#### 返回：

类型：[音符](note.md)

### getAttributes

```js
getAttributes() → {object}
```

获取一个包含音符属性的对象。该对象拥有如下属性。

| 属性 | 类型 | 描述 |
| --- | --- | --- |
| `tF0Offset` | 数字 | 音高转变 - 偏移（秒）|
| `tF0Left` | 数字 | 音高变化 - 时长 - 左（秒） |
| `tF0Right` | 数字 | 音高变化 - 时长 - 右（秒） |
| `dF0Left` | 数字 | 音高变化 - 深度 - 左（半音） |
| `dF0Right` | 数字 | 音高变化 - 深度 - 右（半音） |
| `tF0VbrStart` | 数字 | 颤音 - 开始（秒） |
| `tF0VbrLeft` | 数字 | 颤音 - 左（秒） |
| `tF0VbrRight` | 数字 | 颤音 - 右（秒） |
| `dF0Vbr` | 数字 | 颤音 - 深度（半音） |
| `pF0Vbr` | 数字 | 颤音 - 相位（弧度，-π ~ π） |
| `fF0Vbr` | 数字 | 颤音 - 频率（Hz） |
| `tNoteOffset` | 数字 | 时间和音素 - 音符偏移（秒） |
| `exprGroup` | 字符串 | 表现力分组 |
| `dur` | 数字字符串 | 音素时长尺度 |
| `alt` | 数字字符串 | 可替换的音素发音 |

如果该音符使用的是该[`音符组引用`](note_group_reference.md)的默认值，则对应属性的取值为 NaN。

#### 返回：

类型：object

### getDuration

```js
getDuration() → {number}
```

获取音符的持续时间。单位为 blicks。

#### 返回：

类型：数字

### getEnd

```js
getEnd() → {number}
```

获取音符的结束位置（起始 + 持续时间）。单位为 blicks。

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

### getLyrics

```js
getLyrics() → {string}
```

获取当前音符的歌词。

#### 返回：

类型：字符串

### getOnset

```js
getOnset() → {number}
```

获取当前音符的起始位置。单位为 blicks。

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

### getPhonemes

```js
getPhonemes() → {string}
```

返回用户指定的音素，用空格分隔。如，”hh ah ll ow“。

如果没有指定音素，其会返回一个空字符串而非默认发音（见 [`SV - getPhonemesForGroup`](sv.md) ）。

#### 返回：

类型：字符串

### getPitch

```js
getPitch() → {number}
```

获取音高对应的 MIDI 编号，C4 对应 60。

#### 返回：

类型：数字

### isMemoryManaged

```js
isMemoryManaged() → {boolean}
```

>继承自：[嵌套对象 - isMemoryManaged](nested_object.md)

检测选中的对象是否被内存管理（即脚本环境的垃圾回收）。

#### 返回：

类型：布尔

### setAttributes

```js
setAttributes(object)
```

借助一个属性对象来设置音符属性。属性对象并不需要是完整的；仅给出的属性会被更新。如，

```js
note.setAttributes({
  "tF0Offset" : 0.05,
  "exprGroup" : "C4",
  "alt" : [0, 1]
});
```

#### 参数：

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `object` | attributes | 定义见 [`音符 - getAttributes`](note.md) |

### setDuration

```js
setDuration(t)
```

将音符时长设置为 `t` 。单位为 blicks。其同时也会变更结束位置，但不会更改起始位置。

#### 参数：

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `t` | 数字 |  |

### setLyrics

```js
setLyrics(lyrics)
```

更改歌词。

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `lyrics` | 字符串 |  |

### setOnset

```js
setOnset(t)
```

将音符更改至由 `t` 开始。单位为 blicks。其不会变更时长。

#### 参数：

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `t`  | 数字 |  |

### setPitch

```js
setPitch(pitchNumber)
```

设置音符的音高为 `pitchNumber`（MIDI编号）。

#### 参数：

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `pitchNumber` | 数字 |  |

### setTimeRange

```js
setTimeRange(onset, duration)
```

同时设置起始位置和时长。这是一个对 `setOnset` 和 `setDuration` 的快捷调用。

#### 参数：

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `onset` | 数字 |  |
| `duration` | 数字 |  |

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
---
title: Automation
---

## 自动化

控制 [音符组](note_group.md) 内特定参数类型（如音高偏差）的一组点。

“自动化”这个名字来自于 DAW 软件。在 DAW 中，每个轨道都有一个由可以拖动的控制点组成的音量包络线。在一些更高级的情况下，这些包络线还可以控制插件的属性。一个值得注意的问题是，在 Synthesizer V Studio 中，`自动化` 是为 [音符组](note_group.md) 创建的，而不是 [轨道](track.md) 创建的。

## 扩展

 * [嵌套对象](nested_object.md)

## 方法

### add

```js
add(b, v) → {boolean}
```

在位置 `b` (blicks) 添加一个数值为 `v` 的控制点。如果在 `b` 已经存在控制点，该控制点将会被更新到数值 `v`。

如果创建了新点，则返回 true。

#### 参数

| 参数名 | 类型 | 说明 |
| --- | --- | --- |
| b | number |  |
| v | number |  |

#### 返回：

类型：布尔

### clone

```js
clone() → {Automation}
```

对当前对象进行深拷贝。

#### 返回：

类型：[自动化](automation.md)

### get

```js
get(b) → {number}
```

获取在位置 `b` (blicks) 的插入参数值。如果位置 `b` 处存在点，则无论插值方式如何，都返回该点的值。

#### 参数

| 参数名 | 类型 | 说明 |
| --- | --- | --- |
| b | number |  |

#### 返回：

类型：数

### getAllPoints

```js
getAllPoints() → {array}
```

[自动化 - getPoints](automation.md) 的没有限制的版本。

#### 返回：

类型：由 `数字` 组成的 `数组` 组成的 `数组`。

### getDefinition

```js
getDefinition() → {object}
```

获取具有以下属性的参数对象。

 * `名称`: `字符串`
 * `类型名`: `字符串`
 * `范围`: 2 个 `数字`
 * `默认值`: `数字`

| `参数名` | `类型` | `范围` | 单位 / 参数含义 | `默认值` |
| --- | --- | --- | --- | --- |
| "音高偏差" | "音高偏差" | -1200, 1200 | 音分 | 0 |
| "颤音包络" | "颤音包络" | 0, 2 | x | 1 |
| "响度" | "响度" | -48, 12 | 分贝 | 0 |
| "张力" | "张力" | -1.0, 1.0 | 紧张 <-> 放松 | 0 |
| "气声" | "气声" | -1.0, 1.0 | 气声 <-> 清晰 | 0 |
| "发声" | "发声" | 0.0, 1.0 | 有声 <-> 无声 | 1 |
| "性别" | "性别" | -1.0, 1.0 | 男性 <-> 女性 | 0 |

:::tip
以下为原版英文表格，请酌情参考：

| `displayName` | `typeName` | `range` | units/parameter value meaning | `defaultValue` |
| --- | --- | --- | --- | --- |
| "Pitch Deviation" | "pitchDelta" | -1200, 1200 | cents | 0 |
| "Vibrato Envelope" | "vibratoEnv" | 0, 2 | x | 1 |
| "Loudness" | "loudness" | -48, 12 | dB | 0 |
| "Tension" | "tension" | -1.0, 1.0 | Tense <-> Relaxed | 0 |
| "Breathiness" | "breathiness" | -1.0, 1.0 | Breathy <-> Clean | 0 |
| "Voicing" | "voicing" | 0.0, 1.0 | Voiced <-> Unvoiced | 1 |
| "Gender" | "gender" | -1.0, 1.0 | Masculine <-> Feminine | 0 |
:::

#### 返回：

类型：对象

### getIndexInParent

```js
getIndexInParent() → {number}
```

> 继承自 [嵌套对象 - getIndexInParent](nested_object.md)

获取在父级对象中当前对象的索引。在 Lua 中索引从 1 开始，在 JavaScript 中索引从 0 开始。

#### 返回：

类型：数

### getInterpolationMethod

```js
getInterpolationMethod() → {string}
```

返回两个控制点之间的连接方式

 * `linear`: 线性插值
 * `cubic`: 三次样条插值
 * `Cosine`: 余弦插值

#### 返回：

类型：字符串

### getLinear

```js
getLinear(b) → {number}
```

[自动化 - get](automation.md) 的另一个版本。无论如何都返回线性插值。

#### 参数

| 参数名 | 类型 | 说明 |
| --- | --- | --- |
| b | number |  |

#### 返回：

类型：数

### getParent

```js
getParent() → {NestedObject|undefined}
```

>继承自：[嵌套对象 - getParent](nested_object.md)

获取父级 [嵌套对象](nested_object.md) 。如果不存在则返回 `undefined`。

#### 返回：

类型：[嵌套对象](nested_object.md) | undefined

### getPoints

```js
getPoints(begin, end) → {array}
```

获取从 `begin` 到 `end`(blicks) 的点数组。数组中的每一个元素是由两个元素组成的数组，一个是点的位置 (blicks)，一个是点的值。例如，`[[0, 0.1], [5000, 0], [10000, -0.1]]`。

#### 参数

| 参数名 | 类型 | 说明 |
| --- | --- | --- |
| begin | number |  |
| end | number |  |

#### 返回：

类型：由 `数字` 组成的 `数组` 组成的 `数组`。

### isMemoryManaged

```js
isMemoryManaged() → {boolean}
```

>继承自：[嵌套对象 - isMemoryManaged](nested_object.md)

检测选中的对象是否被内存管理（即脚本环境的垃圾回收）。

#### 返回：

类型：布尔

### remove

```js
remove(b) → {boolean}
```

移除位于 b (blicks) 的控制点。如果控制点不存在，则返回 false。

#### 返回：

类型：布尔

---

```js
remove(begin, end) → {boolean}
```

移除从 `begin` 到 `end`(blicks) 的控制点。如果控制点不存在，则返回 false。

#### 参数：

| 参数名 | 类型 | 说明 |
| --- | --- | --- |
| begin | number |  |
| end | number |  |

#### 返回：

类型：布尔

### removeAll

```js
removeAll()
```

移除 `自动化` 中所有控制点

### simplify

```js
simplify(begin, end, threshold) → {boolean}
```

删除对曲线形状没有显著贡献的控制点。范围为 `begin`（blicks）到 `end`（blicks）。threshold 的值越高，简化越狠。如果未提供，则将其设置为 0.002。

如果删除了任何点，则返回 true。

#### 参数：

| 参数名 | 类型 | 说明 |
| --- | --- | --- |
| begin | number |  |
| end | number |  |
| threshold | number | 可选 |

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
---
title: TimeAxis
---

## 时间轴

一个与工程范围相当的对象，用来存储速度和时间标记。它还能处理物理时间（例如:秒）和音乐时间（例如:¼拍， blicks）之间的转换。

## 扩展

-   [NestedObject](nested_object.md)

## 方法

----
``` js
 addMeasureMark(measure, nomin, denom)
```

在 `measure` 处 (一个小节序号) 插入一个 `nomin`/`denom` 小节标记。如果在 `measure` 处小节标记已经存在，则将更新信息。

#### 参数

| 参数名 | 类型 | 说明 |
| --- | --- | --- |
|`measure`|number| |
|`nomin`|number|译者注:此处意思为 numerator(分子)，但似乎没有nomin表示分子的表达，可能此处原文有疏漏|
|`denom`|number|译者注:即denominator，分母|

----
``` js
 addTempoMark(b, bpm)
```

在 `b` 处(以blicks为单位)插入一个速度为每分钟 `bpm` 拍的速度标记。如果该处已存在速度标记，则更新。

#### 参数

| 参数名 | 类型 | 说明 |
| --- | --- | --- |
|`b`|number| |
|`bpm`|number| |

----
``` js
 clone() → {TimeAxis}
```

深复制当前对象。

#### 返回

类型:[TimeAxis|时间轴](time_axis.md)

----
``` js
 getAllMeasureMarks() → {array}
```

获得所有该 `时间轴` 内的小节标记。请参阅[`时间轴 - getMeasureMarkAt`](time_axis.md).

#### 返回

一个 `对象` 组

类型:array

----
``` js
 getAllTempoMarks() → {array}
```

获得所有该 `时间轴` 内的速度标记。请参阅[`时间轴 - getTempoMarkAt`](time_axis.md).

#### 返回

一个 `对象` 组

类型:array

----
``` js
 getBlickFromSeconds(t) → {number}
```

将物理时间 `t` (秒)转化为音乐时间(blicks)。

#### 参数

| 参数名 | 类型 | 说明 |
| --- | --- | --- |
|`t`|number| |

#### 返回

类型:number

----
``` js
 getIndexInParent() → {number}
```

> 继承自: [嵌套对象 - getIndexInParent](nested_object.md)

获取其父级中当前对象的索引。在 Lua 中，此索引从 1 开始。在 JavaScript 中，此索引从 0 开始。

#### 返回

类型:number

----
``` js
 getMeasureAt(b) → {number}
```

获得 `b` (blicks)处的节拍标记。

#### 参数

| 参数名 | 类型 | 说明 |
| --- | --- | --- |
|`b`|number| |

#### 返回

类型:number

----
``` js
 getMeasureMarkAt(measureNumber) → {object}
```
在 `measureNumber` 小节处获取小节标记。

返回的对象包含以下属性。


-   `position`: `number` 标记放置处的小节数。
-   `positionBlick`: `number` 标记位置 (以blicks为单位)
-   `numerator`: `number` 分子（例如，如果是3/4时间标记，则为3）
-   `denominator`: `number` 分母（例如，如果它是3/4时间标记，则为4）

#### 参数

| 参数名 | 类型 | 说明 |
| --- | --- | --- |
|`measureNumber`|number| |

#### 返回

类型:object

----
``` js
 getMeasureMarkAtBlick(b) → {object}
```

获取在位置 `b` (blicks) 处有效的小节标记。有关返回的对象，请参见[`时间轴 - getMeasureMarkAt`](time_axis.md).

#### 参数

| 参数名 | 类型 | 说明 |
| --- | --- | --- |
|`b`|number| |

#### 返回

类型:object

----
``` js
 getParent() → {NestedObject|undefined}
```

> 继承自: [嵌套对象 - getParent](nested_object.md)

获取父项 [`NestedObject`](nested_object.md) 。如果当前对象未附加到父对象，则返回 `undefined` 。

#### 返回

类型:[NestedObject|嵌套对象](nested_object.md) | `undefined`

----
``` js
 getSecondsFromBlick(b) → {number}
```

将音乐时间 `b` (blicks) 转化为物理时间(秒)。

#### 参数

| 参数名 | 类型 | 说明 |
| --- | --- | --- |
|`b`|number| |

#### 返回

类型:number

----
``` js
 getTempoMarkAt(b) → {TempoMark}
```

获得 `b` (blicks) 处的有效速度标记。

返回的对象包含以下属性。

-   `position`: `number` 速度标记的位置(以blicks为单位)。
-   `positionSeconds`: `number`速度标记的位置(以秒为单位)。
-   `bpm`: `number` 在此速度标记和下一个速度标记之间有效的每分钟节拍值

#### 参数

| 参数名 | 类型 | 说明 |
| --- | --- | --- |
|`b`|number| |

#### 返回

类型:TempoMark

----
``` js
 isMemoryManaged() → {boolean}
```

> 继承自: [嵌套对象 - isMemoryManaged](nested_object.md)

检查当前对象是否开启了内存管理（即脚本环境收集的垃圾）。

#### 返回

类型:boolean

----
``` js
 removeMeasureMark(measure) → {boolean}
```

删除小节数为 `measure` 处的小节标记。如果在此处小节标记存在，则返回 `true` 。

#### 参数

| 参数名 | 类型 | 说明 |
| --- | --- | --- |
|`measure`|number| |

#### 返回

类型:boolean

----
``` js
 removeTempoMark(b) → {boolean}
```

删除 `b` (blicks) 处的速度标记。如果在此处速度标记存在，则返回 `true` 。

#### 参数

| 参数名 | 类型 | 说明 |
| --- | --- | --- |
|`b`|number| |

#### 返回

类型:boolean

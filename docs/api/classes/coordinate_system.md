---
title: CoordinateSystem | 坐标系
---
# CoordinateSystem

## CoordinateSystem

用于浏览二维可滚动区域的一个 UI（用户界面）状态对象，该区域的x轴为时间，y轴为数值。

其被应用于钢琴卷帘（[`MainEditorView`](https://resource.dreamtonics.com/scripting/MainEditorView.html)）和编辑区域（[`ArrangementView`](https://resource.dreamtonics.com/scripting/ArrangementView.html)）。以上两种情况中，x轴的单位均为blicks。但编辑区域仅使用 `CoordinateSystem` （坐标系）的x轴。

### 扩展

- [NestedObject](https://resource.dreamtonics.com/scripting/NestedObject.html)

### 方法

#### getIndexInParent() → {number}

> 继承自：[NestedObject#getIndexInParent](https://resource.dreamtonics.com/scripting/NestedObject.html#getIndexInParent)

获取当前对象在其父对象中的索引。对 Lua，该索引值从1开始。对JavaScript，该索引值从0开始。

##### 返回值：

类型	number

#### getParent() → {[NestedObject](https://resource.dreamtonics.com/scripting/NestedObject.html)|undefined}

> 继承自：[NestedObject#getParent](https://resource.dreamtonics.com/scripting/NestedObject.html#getParent)

获取父 [`NestedObject`](https://resource.dreamtonics.com/scripting/NestedObject.html) 。如果当前对象未连接到一个父对象，则返回 `undefined` 。

##### 返回值：

类型	[NestedObject](https://resource.dreamtonics.com/scripting/NestedObject.html) | undefined

#### getTimePxPerUnit() → {number}

获取水平方向上的比例系数。

其单位为“像素/blick”，因此应该会是一个很小的数。

##### 返回值：

类型	number

#### getTimeViewRange() → {array}

获取当前可见的时间范围。其会返回一个包含两个 `number` 元素的数组，分别对应起始和结束时间。时间单位为blicks。

##### 返回值：

一个 `number` 型`array（数组）`

类型	array

#### getValuePxPerUnit() → {number}

获取竖直方向上的比例系数。

对于钢琴卷帘，其单位为“像素/半音”。

##### 返回值：

类型	number

#### getValueViewRange() → {array}

获取当前可见的数值范围。其会返回一个包含两个 `number` 元素的数组，分别对应最下端和最上端对应的值。对钢琴卷帘，其单位为MIDI数值（半音）；对编辑界面，其值没有意义。

##### 返回值：

一个 `number` 型`array（数组）`

类型	array

#### isMemoryManaged() → {boolean}

> 继承自：[NestedObject#isMemoryManaged](https://resource.dreamtonics.com/scripting/NestedObject.html#isMemoryManaged)

检查当前对象是否被内存管理（即垃圾是否被脚本环境所收集）。

##### 返回值：

类型	boolean

#### setTimeLeft(time)

将可见区域移动至其左端位于 `time` 。

##### 参数：

| 名称   | 类型   | 描述 |
| :----- | :----- | :--- |
| `time` | number |      |

#### setTimeRight(time)

将可见区域移动至其右端位于 `time` 。

##### 参数：

| 名称   | 类型   | 描述 |
| :----- | :----- | :--- |
| `time` | number |      |

#### setTimeScale(scale)

将水平比例系数设置为 `scale` 。

其单位为“像素/blick”，因此应该会是一个很小的数。

##### 参数：

| 名称    | 类型   | 描述 |
| :------ | :----- | :--- |
| `scale` | number |      |

#### setValueCenter(v)

将当前可见区域移动至竖直方向中心在 `v` 处。

##### 参数：

| 名称 | 类型   | 描述 |
| :--- | :----- | :--- |
| `v`  | number |      |

#### snap(b) → {number}

根据捕获的设定，对时间点 `b` 进行四舍五入。

##### 参数：

| 名称 | 类型   | 描述 |
| :--- | :----- | :--- |
| `b`  | number |      |

##### 返回值：

类型	number

#### t2x(t) → {number}

将一个时间点转换为一个x轴位置（单位为像素）。

##### 参数：

| 名称 | 类型   | 描述 |
| :--- | :----- | :--- |
| `t`  | number |      |

##### 返回值：

类型	number

#### v2y(v) → {number}

将一个数值转换为一个y轴位置（单位为像素）。

##### 参数：

| 名称 | 类型   | 描述 |
| :--- | :----- | :--- |
| `v`  | number |      |

##### 返回值：

类型	number

#### x2t(x) → {number}

将一个x轴位置（单位为像素）转换为一个时间点。

##### 参数：

| 名称 | 类型   | 描述 |
| :--- | :----- | :--- |
| `x`  | number |      |

##### 返回值：

类型	number

#### y2v(y) → {number}

将一个y轴位置（单位为像素）转换为一个数值。

##### 参数：

| 名称 | 类型   | 描述 |
| :--- | :----- | :--- |
| `y`  | number |      |

##### 返回值：

类型	number
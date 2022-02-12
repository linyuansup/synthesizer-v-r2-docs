---
title: CoordinateSystem
---

## 坐标系

用于浏览二维可滚动区域的一个 UI（用户界面）状态对象，该区域的x轴为时间，y轴为数值。

其被应用于 [钢琴卷帘](main_editor_view.md) 和 [编辑区域](arrangement_view.md) 。以上两种情况中，x 轴的单位均为 blicks。但编辑区域仅使用 `坐标系` 的 x 轴。

## 扩展

 * [嵌套对象](nested_object.md)

## 方法

### getIndexInParent

```js
getIndexInParent() → {number}
```

> 继承自：[嵌套对象 - getIndexInParent](nested_object.md)

获取当前对象在其父对象中的索引。对 Lua，该索引值从 1 开始。对 JavaScript，该索引值从 0 开始。

#### 返回：

类型：数字

### getParent

```js
getParent() → {NestedObject|undefined}
```

> 继承自：[嵌套对象 - getParent](nested_object.md)

获取父 [NestedObject](nested_object.md)。如果当前对象未连接到一个父对象，则返回 `undefined` 。

#### 返回：

类型：[NestedObject](nested_object.md) | undefined

### getTimePxPerUnit

```js
getTimePxPerUnit() → {number}
```

获取水平方向上的比例系数。

其单位为像素 / blicks，因此应该会是一个很小的数。

#### 返回：

类型：数

### getTimeViewRange

```js
getTimeViewRange() → {array}
```

获取当前可见的时间范围。其会返回一个包含两个 `number` 元素的数组，分别对应起始和结束时间。时间单位为 blicks。

#### 返回：

一个 `number` 型数组。

类型：数组

### getValuePxPerUnit

```js
getValuePxPerUnit() → {number}
```

获取竖直方向上的比例系数。

对于钢琴卷帘，其单位为“像素 / 半音”。

#### 返回：

类型：数

### getValueViewRange

```js
getValueViewRange() → {array}
```

获取当前可见的数值范围。其会返回一个包含两个 `number` 元素的数组，分别对应最下端和最上端对应的值。对钢琴卷帘，其单位为 MIDI 数值（半音）；对编辑界面，其值没有意义。

#### 返回：

一个 `number` 型数组

类型：数组

### isMemoryManaged

```js
isMemoryManaged() → {boolean}
```

> 继承自：[嵌套对象 - isMemoryManaged](nested_object.md)

检查当前对象是否被内存管理（即垃圾是否被脚本环境所收集）。

#### 返回：

类型：布尔

### setTimeLeft

```js
setTimeLeft(time)
```

将可见区域移动至其左端位于 `time` 。

#### 参数：

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `time` | number |  |

### setTimeRight

```js
setTimeRight(time)
```

将可见区域移动至其右端位于 `time` 。

##### 参数：

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `time` | number |  |

### setTimeScale

```js
setTimeScale(scale)
```

将水平比例系数设置为 `scale` 。

其单位为像素 / blick，因此应该会是一个很小的数。

#### 参数：

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `scale` | number |  |

### setValueCenter

```js
setValueCenter(v)
```

将当前可见区域移动至竖直方向中心在 `v` 处。

#### 参数：

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `v` | number |  |

### snap

```js
snap(b) → {number}
```

根据捕获的设定，对时间点 `b` 进行四舍五入。

#### 参数：

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `b`  | number |  |

#### 返回：

类型：数

### t2x

```js
t2x(t) → {number}
```

将一个时间点转换为一个 x 轴位置（单位为像素）。

#### 参数：

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `t` | number |  |

#### 返回：

类型：数

### v2y

```js
v2y(v) → {number}
```

将一个数值转换为一个 y 轴位置（单位为像素）。

#### 参数：

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `v` | number |  |

#### 返回：

类型：数

### x2t

```js
x2t(x) → {number}
```

将一个 x 轴位置（单位为像素）转换为一个时间点。

#### 参数：

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `x` | number |  |

#### 返回：

类型：数

### y2v

```js
y2v(y) → {number}
```

将一个 y 轴位置（单位为像素）转换为一个数值。

#### 参数：

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `y` | number |  |

#### 返回：

类型：数
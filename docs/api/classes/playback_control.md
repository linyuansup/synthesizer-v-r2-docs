---
title: PlaybackControl
---

## 回放控制

用于控制音频播放 UI（用户界面）的状态对象。

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

#### getPlayhead() → {number}

获取当前播放头（译者注：应该就是指播放进度条上的光标）的位置（以秒的形式）。

想要以blicks的形式获取位置的话，就将其与当前项目的 [`TimeAxis（时间轴）`](https://resource.dreamtonics.com/scripting/TimeAxis.html) 一起使用。

##### 返回值：

类型	number

#### getStatus() → {string}

获取当前的播放状态。其可能是以下三种之一。

- "playing"（播放）
- "looping"（循环）
- "stopped"（停止）

##### 返回值：

类型	string

#### isMemoryManaged() → {boolean}

> 继承自：[NestedObject#isMemoryManaged](https://resource.dreamtonics.com/scripting/NestedObject.html#isMemoryManaged)

检查当前对象是否被内存管理（即垃圾是否被脚本环境所收集）。

##### 返回值：

类型	boolean

#### loop(tBegin, tEnd)

在 `tBegin` 秒和 `tEnd` 秒之间开始循环。

##### 参数：

| 名称     | 类型   | 描述 |
| :------- | :----- | :--- |
| `tBegin` | number |      |
| `tEnd`   | number |      |

#### pause()

停止播放，播放头保持在当前位置。

#### play()

开始播放音频。

#### play()

将播放头的位置置为 `t` 秒处。

如果当前音频正在播放，其不会停止音频，而是会在新的位置继续播放。

##### 参数：

| 名称 | 类型   | 描述 |
| :--- | :----- | :--- |
| `t`  | number |      |

#### stop()

停止播放，并且将播放头设置到起始处。

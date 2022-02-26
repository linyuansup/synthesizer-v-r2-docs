---
title: PlaybackControl
---

## 回放控制

用于控制音频播放 UI（用户界面）的状态对象。

## 扩展

* [嵌套对象](nested_object.md)

## 方法

### getIndexInParent

```js
getIndexInParent() → {number}
```

>继承自：[嵌套对象 - getIndexInParent](nested_object.md)

获取在父级对象中当前对象的索引。在 Lua 中索引从 1 开始，在 JavaScript 中索引从 0 开始。

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

### getPlayhead

```js
getPlayhead() → {number}
```

获取当前播放头（译者注：应该就是指播放进度条上的光标）的位置（以秒的形式）。

想要以 blicks 的形式获取位置的话，就将其与当前项目的 [`时间轴`](time_axis.md) 一起使用。

#### 返回：

类型：数字

### getStatus

```js
getStatus() → {string}
```

获取当前的播放状态。其可能是以下三种之一。

- "playing"（播放）
- "looping"（循环）
- "stopped"（停止）

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

### loop

```js
loop(tBegin, tEnd)
```

在 `tBegin` 秒和 `tEnd` 秒之间开始循环。

#### 参数：

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `tBegin` | 数字 |  |
| `tEnd` | 数字 |  |

### pause

```js
pause()
```

停止播放，播放头保持在当前位置。

### play

```js
play()
```

开始播放音频。

### seek

```js
seek(t)
```

将播放头的位置置为 `t` 秒处。

如果当前音频正在播放，其不会停止音频，而是会在新的位置继续播放。

#### 参数：

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `t` | 数字 |  |

### stop

```js
stop()
```

停止播放，并且将播放头设置到起始处。

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
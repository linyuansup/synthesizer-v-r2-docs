---
title: MainEditorView
---

## 主编辑器界面

钢琴卷帘的 UI（用户界面）状态对象。

## 扩展

 * [嵌套对象](nested_object.md)

## 方法

### getCurrentGroup()

```js
getCurrentGroup() → {NoteGroupReference}
```

获取用户当前正处于的 [`音符组引用`](note_group_reference.md) 。如果用户还未进入一个 [`音符组引用`](note_group_reference.md) 中，则返回当前音轨的主音符组。

#### 返回：

类型：[音符组引用](note_group_reference.md)

### getCurrentTrack

```js
getCurrentTrack() → {Track}
```

获取当前在钢琴卷帘中打开的音轨。

#### 返回：

类型：[轨道](track.md)

### getIndexInParent

```js
getIndexInParent() → {number}
```

>继承自：[嵌套对象 - getIndexInParent](nested_object.md)

获取在父级对象中当前对象的索引。在 Lua 中索引从 1 开始，在 JavaScript 中索引从 0 开始。

#### 返回：

类型：数字

### getNavigation

```js
getNavigation() → {CoordinateSystem}
```

获取钢琴卷帘的 [`坐标系`](coordinate_system.md) （坐标系统对象）。

#### 返回：

类型：[坐标系](coordinate_system.md)

### getParent

```js
getParent() → {NestedObject|undefined}
```

> 继承自：[嵌套对象 - getParent](nested_object.md)

获取父 [嵌套对象](nested_object.md) 。如果当前对象未连接到一个父对象，则返回 `undefined` 。

#### 返回：

类型：[嵌套对象](nested_object.md) | **undefined**

### getSelection

```js
getSelection() → {TrackInnerSelectionState}
```

获取钢琴卷帘中选择状态的对象。

#### 返回：

类型：[轨道内部选择状态](track_inner_selection_state.md)

### isMemoryManaged

```js
isMemoryManaged() → {boolean}
```

>继承自：[嵌套对象 - isMemoryManaged](nested_object.md)

检测选中的对象是否被内存管理（即脚本环境的垃圾回收）。

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
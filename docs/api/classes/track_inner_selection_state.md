---
title: TrackInnerSelectionState
---
## 轨道内部选择状态

钢琴卷帘区的选择状态。

访问 `轨道内部选择状态` (TrackInnerSelectionState) 对象的方法

-   JavaScript： `SV.getMainEditor().getSelection()`
-   Lua： `SV:getMainEditor():getSelection()`

## 扩展

-   [嵌套对象](nested_object.md)
-   [选择状态](selection_state_base.md)
-   [音符组选择](group_selection.md)

## 方法

``` js
clearAll() → {boolean}
```

> 继承自 [选择状态 - clearAll](selection_state_base.md)

取消选择此选择状态下的所有对象类型。 如果选择项已更改，则返回 `true` 。

#### 返回

类型：布尔

``` js
clearGroups() → {boolean}
```

> 继承自[音符组选择 - clearGroups](group_selection.md)

取消选择所有 [`音符组引用`](note_group_reference.md)。如果选择项已更改，则返回 `true` 。

#### 返回

类型：布尔

``` js
clearNotes() → {boolean}
```

取消选择所有音符。 如果选择已更改，则返回 `true`。

#### 返回

类型：布尔

``` js
getIndexInParent() → {number}
```

> 继承自[嵌套对象 - getIndexInParent](nested_object.md)

获取当前对象在其父对象中的索引。 在 Lua 中，这个索引从 1 开始。在 JavaScript 中，这个索引从 0 开始。
#### 返回

类型：数

``` js
getParent() → {嵌套对象| `undefined` }
```

> 继承自[嵌套对象 - getParent](nested_object.md)

获取父级 [`嵌套对象`](nested_object.md)。 如果当前对象未附加到父对象，则返回 `undefined` 。

#### 返回

类型：[嵌套对象](nested_object.md) | `undefined`

``` js
getSelectedGroups() → {array}
```

> 继承自[音符组选择 - getSelectedGroups](group_selection.md)

按照选择的顺序获取一组选定的 [`音符组引用`](note_group_reference.md)。

#### 返回

一 `组` (array) [`音符组引用`](note_group_reference.md)

类型：组

``` js
getSelectedNotes() → {array}
```

按照选择的顺序获取一组选定的 [`音符`](note.md)。
#### 返回

一组[`音符`](note.md)

类型：组

``` js
hasSelectedContent() → {boolean}
```

> 继承自[选择状态 - hasSelectedContent](selection_state_base.md -hasSelectedContent)

检查是否有任何选择。

#### 返回

类型：布尔

``` js
hasSelectedGroups() → {boolean}
```

> 继承自[音符组选择 - hasSelectedGroups](group_selection.md)

检查是否选择了至少一个 [`音符组引用`](note_group_reference.md) 。

#### 返回

类型：布尔

``` js
hasSelectedNotes() → {boolean}
```

检查是否选择了至少一个 [`音符`](note.md) .

#### 返回

类型：布尔

``` js
hasUnfinishedEdits() → {boolean}
```

> 继承自[选择状态 - hasUnfinishedEdits](selection_state_base.md)

检查所选对象是否有任何未完成的编辑。

例如，如果用户在几个音符/控制点周围拖动但尚未释放鼠标，这将返回 true。

#### 返回

类型：布尔

``` js
isMemoryManaged() → {boolean}
```

> 继承自[嵌套对象 - isMemoryManaged](nested_object.md)

检测选中的对象是否被内存管理（即脚本环境的垃圾回收）。
#### 返回

类型：布尔

``` js
selectGroup(reference)
```

> 继承自[音符组选择 - selectGroup](group_selection.md)

将[`音符组引用`](note_group_reference.md) 添加到选择中。 

参数必须是当前打开项目的一部分。

#### 参数

| 参数名 | 类型 | 说明 |
| --- | --- | --- |
`reference`

[NoteGroupReference](note_group_reference.md)

#### selectNote(note)

选择一个 [`音符`](note.md)。 音符必须在钢琴卷中打开的当前 [`音符组引用`](note_group_reference.md) 内（请参阅 [`MainEditorView - getCurrentGroup`](main_editor_view.md）。

#### 参数

| 参数名 | 类型 | 说明 |
| --- | --- | --- |
| `note` | [音符](note.md)) |  |

``` js
unselectGroup(reference) → {boolean}
```

> 继承自[音符组选择 -unselectGroup](group_selection.md)

取消选择 [`音符组引用`](note_group_reference.md)。 如果选择已更改，则返回 true。

#### 参数

| 参数名 | 类型 | 说明 |
| --- | --- | --- |
|`reference` | [音符组引用](note_group_reference.md) |  |

#### 返回

类型：布尔

``` js
unselectNote(note) → {boolean}
```

取消选择 [`音符`](note.md)。 如果选择已更改，则返回 `true`。

#### 参数

| 参数名 | 类型 | 说明 |
| --- | --- | --- |
|`note`|[Note](note.md)| |

#### 返回

类型：布尔

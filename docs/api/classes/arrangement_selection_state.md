---
title: ArrangementSelectionState
---

## 编曲区选择状态

编曲区域内的选择状态。

如需使用该对象，请：
 * 在 JavaScript 中使用 `SV.getArrangement().getSelection()`
 * 在 Lua 中使用 `SV:getArrangement():getSelection()`

## 扩展

 * [嵌套对象](nested_object.md)
 * [选择状态](selection_state_base.md)
 * [音符组选择](group_selection.md)

## 方法

### clearAll

```js
clearAll() → {boolean}
```

>继承自：[选择状态 - clearAll](selection_state_base.md)

取消选择支持的所有对象类型。如果所选内容已更改，则返回 true。

#### 返回：
类型：布尔

---

### clearGroups

```js
clearGroups() → {boolean}
```

>继承自：[音符组选择 - clearGroups](group_selection.md)

取消选择所有的 [音符组引用](note_group_reference.md) 。如果所选内容已更改，则返回 true。

#### 返回：

类型：布尔

---

### getIndexInParent

```js
getIndexInParent() → {number}
```

>继承自：[嵌套对象 - getIndexInParent](nested_object.md)

获取在父级对象中当前对象的索引。在 Lua 中索引从 1 开始，在 JavaScript 中索引从 0 开始。

#### 返回：

类型：数字

---

### getParent

```js
getParent() → {NestedObject|undefined}
```

>继承自：[嵌套对象 - getParent](nested_object.md)

获取父级 [NestedObject](nested_object.md) 对象。如果不存在则返回 `undefined`。

#### 返回：

类型：[NestedObject](nested_object.md) | undefined

---

### getSelectedGroups

```js
getSelectedGroups() → {array}
```

>继承自：[音符组选择 - getSelectedGroups](group_selection.md)

按照选择顺序获取所选的 [NoteGroupReference](note_group_reference.md) 数组。

#### 返回：

一个 [NoteGroupReference](note_group_reference.md) 数组。

类型：数组

---

### hasSelectedContent

```js
hasSelectedContent() → {boolean}
```

>继承自：[选择状态 - hasSelectedContent](selection_state_base.md)

检测是否有内容被选中。

#### 返回：

类型：布尔

---

### hasSelectedGroups

```js
hasSelectedGroups() → {boolean}
```

>继承自：[选择状态 - hasSelectedGroups](selection_state_base.md)

检测是否有音符组被选中。

#### 返回：

类型：布尔

---

### hasUnfinishedEdits

```js
hasUnfinishedEdits() → {boolean}
```

>继承自：[选择状态 - hasUnfinishedEdits](selection_state_base.md)

检测选中的内容是否有未完成的编辑。例如，如果用户正在拖动一些音符 / 绘制一些控制点但是没松开鼠标，则返回 true。

#### 返回：

类型：布尔

---

### isMemoryManaged

```js
isMemoryManaged() → {boolean}
```

>继承自：[嵌套对象 - isMemoryManaged](nested_object.md)

检测选中的对象是否被内存管理（即脚本环境的垃圾回收）。

#### 返回：

类型：布尔

---

### SelectedGroup

```js
selectGroup(reference)
```

>继承自：[音符组选择 - selectGroup](group_selection.md)

向选择的内容添加一个 [NoteGroupReference](note_group_reference.md) 对象。

该参数必须是当前打开的项目的一部分。

#### 参数：

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `reference` | [NoteGroupReference](note_group_reference.md) |  |

---

### unselectGroup

```js
unselectGroup(reference) → {boolean}
```

>继承自：[音符组选择 - unselectGroup](group_selection.md)

取消选择一个 [NoteGroupReference](note_group_reference.md) 对象。如果选择改变则返回 true。

#### 参数：

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `reference` | [NoteGroupReference](note_group_reference.md) |  |

#### 返回：

类型：布尔
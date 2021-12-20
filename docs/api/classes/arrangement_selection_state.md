---
title: ArrangementSelectionState | 编曲区选择状态
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

```js
clearAll() → {boolean}
```
*继承自：[选择状态 - clearAll](selection_state_base.md)*

取消选择支持的所有对象类型。如果所选内容已更改，则返回 true。

*返回：*

*类型：布尔*

---

```js
clearGroups() → {boolean}
```
*继承自：[音符组选择 - clearGroups](group_selection.md)*

取消选择所有的 [音符组引用](note_group_reference.md) 。如果所选内容已更改，则返回 true。

*返回：*

*类型：布尔*

---
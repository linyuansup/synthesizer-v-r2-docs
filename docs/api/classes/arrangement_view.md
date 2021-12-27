---
title: ArrangementView | 编曲区界面
---

## 编曲区界面

编曲区的 UI 对象。

## 扩展

 * [嵌套对象](nested_object.md)

## 方法

```js
getIndexInParent() → {number}
```
>继承自：[嵌套对象 - getIndexInParent](nested_object.md)

获取在父级对象中当前对象的索引。在 Lua 中索引从 1 开始，在 JavaScript 中索引从 0 开始。

#### 返回：

类型：数字

---

```js
getNavigation() → {CoordinateSystem}
```

获取轨道编辑窗口的坐标系

#### 返回：

类型：[CoordinateSystem](coordinate_system.md)

---

```js
getParent() → {NestedObject|undefined}
```
>继承自：[嵌套对象 - getParent](nested_object.md)

获取父级 [NestedObject](nested_object.md) 对象。如果不存在则返回 `undefined`。

#### 返回：

类型：[NestedObject](nested_object.md) | undefined

---

```js
getSelection() → {ArrangementSelectionState}
```

获取编曲窗口的选择状态对象

#### 返回：

类型：[ArrangementSelectionState](arrangement_selection_state.md)

---

```js
isMemoryManaged() → {boolean}
```
>继承自：[嵌套对象 - isMemoryManaged](nested_object.md)

检测选中的对象是否被内存管理（即脚本环境的垃圾回收）。

#### 返回：

类型：布尔
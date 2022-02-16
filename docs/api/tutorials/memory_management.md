---
title: 内存管理
---

## 内存管理机制

Synthesizer V Studio 的脚本系统使用了引用计数技术，以在宿主（运行已硬编码内存管理机制的机器码）和调用方（具有垃圾回收机制）间共享对象及安全地传递对象所有权。

绝大多数情况下，脚本编写者并不需要了解底层机制就可以写出正常工作且内存安全的代码。绝大多数错误使用内存管理的情形，都会被脚本运行环境检测到并触发错误提示，例如“无法访问已删除的对象“。但也存在不能被运行环境检测到的极端例子，和可能引发软件崩溃的罕见情况。

## 托管与非托管

* 当 [`NestedObject`](../classes/nested_object.md) 不存在父对象时，它可被调用方环境垃圾回收（即托管状态）。该对象是宿主所拥有的顶层对象（例如：主项目）时除外。
* 当 [`NestedObject`](../classes/nested_object.md) 存在父对象时，它始终处于非托管状态。

例如：某脚本创建了一个 [`NoteGroup`](../classes/note_group.md)，并向其添加了几个音符：

* NoteGroup（托管状态）
    * Note 1（非托管状态）
    * Note 2（非托管状态）
    * Note 3（非托管状态）
    * Automation 1（非托管状态）
    * Automation 2（非托管状态）
    * ......

当作为父对象的 [`NoteGroup`](../classes/note_group.md) 被调用方垃圾回收时，宿主端针对 [`NoteGroup`](../classes/note_group.md) 的析构方法会被触发，其所有处于非托管状态的子对象将被清理。

若调用方环境中存在对 [`NoteGroup`](../classes/note_group.md) 中的其中一个非托管状态的音符的引用，则当该非托管状态的音符被删除时，也即作为父对象的 [`NoteGroup`](../classes/note_group.md) 被垃圾回收或被用户显式删除时，引用也会被标记为已删除状态。任何访问该无效引用的操作都会被检测，并导致“无法访问已被删除的 ‘Note’ 对象”错误。

当托管状态下的 [`NoteGroup`](../classes/note_group.md) 对象被添加到 [`Project`](../classes/project.md) 对象中时，它会被转换为非托管状态。这种转换只是一种简单的、标识其绕过垃圾回收机制的状态改变，并不涉及内存的分配、释放或复制操作。

<BrowserOnly fallback={<div></div>}>{() => <GitalkComponent options={{
    clientID: '2537efeef8962e53223d',
    clientSecret: 'da454b36ea826630b34f708d39992fd962726a39',
    repo: 'synthesizer-v-r2-docs',
    owner: 'linyuansup',
    admin: ['linyuansup'],
    id: title,
    }} />}
</BrowserOnly>

import Gitalk from 'gitalk';
import 'gitalk/dist/gitalk.css';
import GitalkComponent from 'gitalk/dist/gitalk-component';
import BrowserOnly from '@docusaurus/BrowserOnly';
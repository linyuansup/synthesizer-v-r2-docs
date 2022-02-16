---
title: 了解脚本
---

Synthesizer V Studio Pro 支持脚本。用户可以通过脚本为编辑器加入新功能。

脚本类似于加载一个插件，与之不同的是脚本不加载动态链接库（比如 `dll` ），Synthesizer V Studio 从中加载代码，因此你需要一个文本编辑器来编写脚本。脚本是可以跨平台（Windows, Linux, macOS）使用的。

## 语言支持
  * JavaScript ( ECMAScript 5.1 )
  * Lua 5.4

## 功能

哪些功能是可以通过脚本编写实现的呢？
  * 读取、添加、编辑、移除音符、音符组、参数、轨道
  * 访问和修改当前选择的音符、音符组
  * 浏览整个项目（例如滚动并放大到某个范围）
  * 回放控制
  * 通过可自定义的对话框与用户进行交互
  * 异步回调（例如，调用 [`SV#setTimeout`](classes/sv.md) 超时以延迟执行功能），这意味着脚本可以无限制地在后台运行

## 如何开始
  * [一个最小的例子](tutorials\a_minimal_example.md)
  * [一个更先进的例子](https://github.com/Dreamtonics/svstudio-scripts/tree/master/HelloWorld)
  * [从测试脚本中学习](https://github.com/Dreamtonics/svstudio-scripts/tree/master/Tests)
  * 如果您不理解，请查看类参考
  * 在脚本中使用 [本地化](tutorials\localization.md)
  * 了解 [内存管理](tutorials\memory_management.md)（高级用户）

## 编程概念

Synthesizer V Studio 的脚本 API 面向对象。JavaScript 和 Lua 脚本共享相同的 API，尽管调用的方式有不同。

用户可以与两种类型的对象进行交互：数据对象和 UI 状态对象。

  * 数据对象是项目的一部分，可以是轨道、音符、参数...
  * UI 状态对象更有趣。它们是抽象的用户界面。例如，[`PlaybackControl`](classes/playback_control.md) 管理播放、暂停、循环。

## 与 VOCALOID 的不同

VOCALOID 同样支持 Lua 脚本，但 VOCALOID 的脚本与 Synthesizer V Studio 不兼容。主要区别是：
  * 在 VOCALOID 中，所有 API 都为全局功能：在 Synthesizer V Studio API 中，唯一的全局对象是主机对象 SV，大多数与数据结构的交互都是通过数据类型的方法进行。
  * VOCALOID API 使用基于事件的数据模型。例如，必须按顺序访问音符。Synthesizer V Studio API 提供随机访问音符、参数、音符组和轨道的能力。

## JavaScript 和 Lua 之间的重要区别

### 索引
JavaScript 使用零基索引，Lua 使用单基索引。这也适用于脚本 API。

例如，在 JavaScript 中 `NoteGroup.getNote(0)` 与 Lua 中 `NoteGroup:getNote(1)` 相同。

### 调用方法
面向对象的编程基于 JavaScript API 的原型，这意味着调用方式是 `Class.Method(...)` 。

Lua API 基于元表，调用方式是 `Class:Method(...)` 。

但是，即使在 Lua（例如 [`SV#QUARTER`](classes/sv.md)）中，成员对象仍可以使用点访问。

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
---
title: 概述
---

:::tip
这篇文档只是为了教程的完整性而写。你如果有电脑操作基础，跳过这篇文档对于教程的理解 **完全没有问题**（即使没有调教基础）。
:::

Synthesizer V Studio 的菜单栏如下

![菜单栏总览](/docs/main_docs/menu/about/1.png)

---

## 快捷键

如果你对某个菜单对应的功能设置了快捷键，那么它会在菜单的右侧显示。同时，如果你设置了多个快捷键，它们都会显示出来，如图。

![快捷键](/docs/main_docs/menu/about/5.png)

## 菜单的可用性

如果当前菜单不可用，Synthesizer V Studio 会将其显示为灰色，如下图。

![灰色](/docs/main_docs/menu/about/6.png)

## 菜单的分类

**与其他软件不同的是**，Synthesizer V Studio 将每个菜单也单独做了分类。通过大标题可以确定操作的对象等等。下图为对 “音符” 对象的一些操作。

![菜单分类](/docs/main_docs/menu/about/7.png)

## 复选菜单与非复选菜单

点击复选菜单时。当前菜单的功能即被启用。复选菜单在被选中后会出现 √，如下图。

![复选菜单](/docs/main_docs/menu/about/3.png)

同时，部分复选菜单之间是存在冲突的。也就是说，当你选择了其中一项之后，其他项会被自动取消选择，如下图。

![复选菜单冲突](/docs/main_docs/menu/about/4.png)

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
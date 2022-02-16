---
title: 编辑
---
编辑菜单内容如下

![文件菜单](/docs/main_docs/menu/edit/1.png)

## 撤销

撤销上一次的操作。

## 重复

（撤销撤销上一次的操作）(禁止套娃)。

## 全选

选择所有内容。如果你在此之间正在编辑音符，那么将会选择所有音符。如果你在此之间正在编辑参数，那么将会选择**所有的对应的**参数。

## 参数全选

选中所有的参数，不论你正在编辑什么。

:::tip
与**全选**不同的是，参数全选会将各种参数同时选中，而全选只会选中当前正在编辑的参数。
:::

## 选择音符对应的参数

选择当前选中的音符下方的各种参数，不会取消选中已经选中的音符。

:::tip
Synthesizer V Studio 的所有参数以控制点的形式存在，因此可能会导致移动选中的音符及参数时，参数最开头无法同时移动的情况，此时需要手动调整。
:::

## 取消选择

取消选择当前已选择的所有内容（包括音符及参数）。

:::tip
如果你在自由绘制模式下并且勾选了 “在自由绘制模式下隐藏控制点” 的选项，你可能无法辨别参数是否被选中。此时你可以切换到光标模式或控制点模式或取消勾选 “在自由绘制模式下隐藏控制点” 的选项，即可明显的辨别参数是否被选中。详见 [设置](../sidebar/settings.md) 及 [顶栏](../parameters/top.md) 。
:::

## 删除选择的内容

删除当前已选择的所有内容。

## 复制

复制当前已选择的内容。

## 剪切

复制并删除当前已选择的内容。

## 粘贴

将已复制的内容粘贴到设定的位置。

您可以在设置中改变默认粘贴方式。详见 [设置](../sidebar/settings.md) 。

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
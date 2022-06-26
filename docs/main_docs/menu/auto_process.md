---
title: 自动处理
---

:::tip
本节内容存在极多的 AI 部分，因此难以详细表述出其原理，请酌情阅读。
:::

自动处理菜单内容如下

![修改菜单](/docs/main_docs/menu/auto_process/1.png)

## 自动音高调校

自动调节已选择音符 / 音符组内音符的音高参数。该功能只改变音高偏差参数，并且会将音符的颤音深度、音高转变的左右深度归零。点击后弹窗如下：

:::tip
弹窗仅存在于 Pro 版本，Basic 版本仅会使用默认参数生成。
:::

![自动音高调校](/docs/main_docs/menu/auto_process/2.png)

### 表现力

可以理解为音高偏差参数的改变幅度。

### 随机数种子

用于生成音高偏差的随机数。该功能并无实际意义，但改变数值可以改变每次生成的参数。在对生成内容不满意时，可以改变随机数种子，从而获得不同的结果。

### 启用音高补正

减少音高偏差偏移的幅度。勾选该功能后可有效防止跑调，但可能会导致颤音幅度减低。

## 自动音高调校（自定义风格）

![自动音高调校（自定义）](/docs/main_docs/menu/auto_process/3.png)

:::tip
该功能仅存在于 Pro 版本。
:::

表现力、随机数种子、启用音高补正与上述完全相同，以下仅介绍不同的内容。

### 歌唱风格 - 颤音 1

更改音高抖动程度

### 歌唱风格 - 颤音 2

更改颤音幅度

### 歌唱风格 - 衔接力度

更改音头强调的幅度。该功能可能作用于音符的转音。

## 以新的随机数重新生成

:::tip
该功能仅存在于 Pro 版本。
:::

按上次使用自动调校的参数，只改变随机数并重新调节音高。

## 修饰选择的音符

:::tip
该功能仅存在于 Pro 版本。
:::

对选择的音符添加转音（通过拆音实现而不是参数），点击后窗口如下。

![修饰选择的音符](/docs/main_docs/menu/auto_process/4.png)

### 向左拆分的倾向

左侧拆出的音符长度。达到一定数值后将不在左侧拆音。

### 向右拆分的倾向

右侧拆出的音符长度。达到一定数值后将不在右侧拆音。

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
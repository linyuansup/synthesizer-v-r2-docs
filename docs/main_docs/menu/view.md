---
title: 视图
---

视图菜单内容如下

![视图菜单](/docs/main_docs/menu/view/1.png)

## 吸附（编曲/钢琴卷帘）

控制音符的自动对齐程度，其中编曲吸附对应序列吸附，钢琴卷帘吸附对应音符吸附。

在早期的版本中 `1/n 个四分音符` 已被翻译为 `m 分音符` ，他们的对应关系如下表：

| 1/n 个四分音符 | m 分音符（三连音） |
| ---- | ---- |
| 2 | 8 |
| 4 | 16 |
| 6 | 8 - 三连音 |
| 8 | 32 |
| 12 | 16 - 三连音 |
| 16 | 64 |
| 24 | 32 - 三连音 |
| 32 | 128 |

其中关闭吸附后你可以自由调整音符或序列。

## 多功能编辑工具

鼠标模式。在该模式下你可以进行选择、拖动等操作。该功能对钢琴卷帘面板还是参数面板起作用取决于你上次编辑的面板。

## 铅笔工具

自由绘制模式。在该模式下你可以进行绘制音符/参数、拖动等操作。该功能对钢琴卷帘面板还是参数面板起作用取决于你上次编辑的面板。

## 直线工具（参数）

绘制一条直线。本功能仅对参数面板起作用。

:::tip
你可能会发现，在直线模式下绘制的参数可能不是一条直线，并且参数绘制完成后可能会向上或者向下突出一小段，这是由于 Synthesizer V Studio 的控制点连接方式导致的。关于参数点连接方式，请参考 [顶栏](../parameters/top.md) 。
:::

## 直接编辑音高

在钢琴卷帘窗里直接绘制音高。该功能仅在勾选铅笔工具时起作用。

## 显示其他轨道的旋律

在钢琴卷帘窗中以一条线段的形式显示其他轨道的音符。线条的颜色取决于音符所在音轨的着色（可在编曲窗口左侧找出），如图。

![其他轨道音符](/docs/main_docs/menu/view/2.png)

## 侧面板

侧面板分为音符属性面板、歌声面板、音符组库面板等等，在视图菜单中点击可打开对应面板。

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
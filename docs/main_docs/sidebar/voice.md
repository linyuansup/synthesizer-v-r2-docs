---
title: 歌声
---

歌声面板内容如下：

![歌声面板](/docs/main_docs/sidebar/voice/1.png)

### 当前声库（音轨范围）

在下拉列表中你可以更改当前音轨的默认歌手，并且可以在其下方找到声库详细信息，包括版本号、语言、音素制式、表现力分组、自动音高调校的情况。

:::tip
语言中的 `mandarin` 代表中文声库
:::

### 使用松弛的辅音发音

降低辅音发音的力度。通常情况下，该功能可以让你的音符更加清晰。

### 保存 / 载入预设

点击后会出现如图的下拉菜单：

![保存载入预设](/docs/main_docs/sidebar/voice/2.png)

#### 保存到新的预设

将当前歌手的歌声属性保存到新的预设中，包括音准、参数、引擎、音高、颤音的属性。你可以对你的预设进行命名。

#### 已有预设 - 载入

载入之前保存到预设。

#### 已有预设 - 保存（覆盖）

使用当前的歌声属性覆盖保存到预设。

#### 已有预设 - 删除

删除已保存的预设。

### 重置

将当前的歌声属性恢复到默认值。

:::tip
不同声库之间的预设不互通
:::

## 音准

音准内包括音调信息以及 A4 对应的频率。

### 音高偏移

更改 A4 对应的频率。

### 音调偏移

更改中央音对应的音高。（同时 A4 的频率也会改变）

:::tip
可将音高偏移理解为微调，音调偏移理解为大幅度调整
:::

:::tip
音准选项仅存在于 Pro 版本
:::

## 参数

更改参数的值。

响度、张力、气声、发声的详细信息，请参考 [参数面板](../parameters/bottom.md)。

### 音区偏移

增加 / 降低当前音符的音分。该功能仅存在于 AI 声库。

:::tip
音区偏移参数仅存在于 Pro 版本
:::

## 合成引擎

### 渲染模式

渲染模式可以选择默认、偏好速度、偏好品质。默认会自动在速度和品质之间寻找平衡，偏好速度会降低品质提高速度，偏好品质会降低速度提高品质。

## 默认 - 音高 / 颤音

更改当前歌手的默认属性。这两个选项下的所有属性功能与在 [这里](note_properties.md) 完全相同。

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
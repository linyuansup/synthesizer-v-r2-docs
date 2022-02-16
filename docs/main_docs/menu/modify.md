---
title: 修改
---

修改菜单内容如下

![修改菜单](/docs/main_docs/menu/modify/1.png)

## 插入歌词

在当前音符组范围内插入歌词，对话框如下图，当前选中的歌词会被填入到歌词文本框中，以空格分隔。

![插入歌词](/docs/main_docs/menu/modify/2.png)

### 规律填充

循环填入文本框中的歌词到**选定的音符区域**中。换句话说就是从第一个词开始填，填完后再从第一个词开始填，直到所有的选中的音符都被填完。

### 按字符分割

每个字母分别填入到音符中。

:::tip
只有勾选规律填充后，歌词才会**只**填充在选定的音符区域里。如果不勾选规律填充且歌词数量超出选中的音符数量，Synthesizer V Studio 会忽略选定的范围并将歌词填完。
:::

## 重置音素

将选中音符的音素重置为 Synthesizer V Studio 默认的音素。有关音素的内容，请参考 [音符属性](../sidebar/settings.md) 。

## 重置音高属性

将选中音符的音高属性重置为 Synthesizer V Studio 默认的音高属性。这里的音高属性包括侧边栏音符属性面板中的音高转变、颤音选项。

:::tip
重置的内容 **不包括** PIT（音高偏差）。
:::

## 重置时间和音素

将选中音符的时间和音素重置为 Synthesizer V Studio 默认的时间和音素。这里的时间和音素包括侧边栏音符属性面板中的时间和音素选项，不包括表现力分组。

## 重置离调的音符

:::tip
该功能仅存在于 Pro 版本。
:::

将离调的音符拉回到离它最近的调内音。Synthesizer V Studio 会根据整个工程自动判断调式。

## 简化参数

简化参数面板中的参数。该操作可减少工程文件的占用空间大小但不显著降低工程质量。需先选中需要简化的参数点才可使用该选项。

## 创建锚点

在当前选中的每个音符的开头和结尾创建锚点。锚点只会在当前参数面板前置显示的参数中创建。

## 自动音高调教

对当前音符组自动绘制 PIT（音高偏差）。此功能仅对 Pro 版本和部分声库有效。你可以在 [这里](../../speed_start/voice_data/chinese.md) 查看各个声库支持情况。

## 吸附到网格

将选中音符的音符头对齐到最近的网格上并保证音符长度不变，类似于一些宿主的量化功能。网格的间隔取决于在 视图 - 吸附（钢琴卷帘） 菜单中设置的选项。

## 删除短的静音部分

拉长前一个音符以补充音符间的间隙。点击后会出现如下弹窗：

![删除短的静音部分](/docs/main_docs/menu/modify/3.png)

### 阈值

调整需要删除的静音部分的时长。小于阈值的空隙部分将会被删除，同时你可以在上方看到将会改变的音符数量。

## 变调

更改选中的音符的音高。正数代表向上移动几个半音，负数代表向下移动几个半音。

## 升高（降低）八度

将音高向上（或向下）移动一个八度。

:::tip
一个八度为 12 个半音
:::

:::tip
关于音符组的详细信息，请参考 [音符组概述 音符组库](../sidebar/note_properties.md) 。
:::

## 创建音符组

将当前选中的音符合并为一个音符组，如果当前没有选中的音符则将当前音轨的所有音符合并为一个音符组。

## 解散音符组

解散当前选中的音符组或当前选中音符所在的音符组。

## 分离到独立的音符组

将当前选择的音符组复制一份，使其不与原音符组互相影响。该功能常用于复制参数后改歌词。

:::tip
根据 Dreamtonics 官方的说法，一些发音等问题通过创建音符组的方式可以解决。（这就是玄学优化吗 hhhhh）
:::

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
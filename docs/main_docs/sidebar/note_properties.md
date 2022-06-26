---
title: 音符属性
---

音符属性面板内容如下：

![音符属性面板](/docs/main_docs/sidebar/note_properties/1.png)

## 切换当前选择

### 上一个

选择上一个音符

### 下一个

选中下一个音符

## 音高转变

### 偏移

隐式改变选中音符的起始点与上一音符的结束点。负值代表向前移动起止点，正值代表向后移动起止点。该选项仅当选中音符前存在音符与之相连时起作用。该选项仅作用于音高。

:::tip
隐式改变，指不改变钢琴卷帘窗中音符位置的前提下改变音符的实际位置。
:::

:::tip
`sec` 代表秒，而不是正割
:::

### 时长 - 左 / 右

音符左右两侧的音高平滑时长

### 深度 - 左 / 右

音符左右两侧的上凸 / 下凹的程度。正值代表向下，负值代表向上。该参数常用于拉音头及音尾。

## 颤音

### 开始

颤音开始的时间点

### 左 / 右

颤音左右两侧的平滑时间

### 深度

更改颤音的幅度

### 频率

更改颤音的频率（颤音每个颤之间的时间间隔）

### 相位

颤音的开始点的颤音方向。

:::tip
颤音可以用公式 <math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mi>y</mi><mo>=</mo><mi>A</mi><mi>sin</mi><mo data-mjx-texclass="NONE">⁡</mo><mo stretchy="false">(</mo><mi>ω</mi><mi>x</mi><mo>+</mo><mi>φ</mi><mo stretchy="false">)</mo></math> 表示。式中 A 为深度，<math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mi>ω</mi></math> 为频率，<math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mi>φ</mi></math> 为相位
:::

### 抖动

音符的微微抖动的幅度。正确使用该参数可有效提升歌声真实性。该选项与颤音并无很强的关系。

## 时间和音素

### 音符偏移

隐式改变选中音符的起始点。负值代表向前移动起始点，正值代表向后移动起始点。该选项仅作用于音素。

### 时长

更改对应音素的发声时长。DFLT 为音阶切换功能。

:::tip
DFLT 仅存在于 Pro 版本中
:::

### 力度

更改对应音素的发声力度。

## 表现力分组

更改当前选中音符对应的分组。不同的分组可以带来完全不同的效果。该选项在 AI 声库中没有作用。

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
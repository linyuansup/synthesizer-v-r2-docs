---
title: 脚本下载
---

以下脚本可在 Synthesizer V Studio Pro 中使用。正确使用脚本可有效加快你的调校速度和质量。有关脚本使用，请参考 [脚本使用](../main_docs/menu/script.md)

## 脚本下载

我们非常欢迎脚本开发者将脚本放在这里。你可以直接提交 Pull Requests，或者 [联系我们](https://message.bilibili.com/#/whisper/mid273891297)

| 脚本名称 | 开发者 | 版本号 | 下载地址 1 |
| -------- | -------- | -------- | -------- |
| MergeSelectedNotes 合并音符 | Dreamtonics | ver.001 | [下载](https://yzweb-my.sharepoint.com/:u:/g/personal/bilibililty_bujigegroup_site/EUPHVVTVA4JLv-ivTizL4tIBBk0FVrmVWRfHhcZyA6m7BQ?e=Ihzhop) |
| RandomizeParameters 随机参数 | Dreamtonics | ver.001 | [下载](https://yzweb-my.sharepoint.com/:u:/g/personal/bilibililty_bujigegroup_site/ET6AvdUAbvxPo71q9ET2INQBdamHK9T73SBzwy9iXQw4Ng?e=8FeNDl) |
| ScaleSelectedNotes 音符缩放 | Dreamtonics | ver.002 | [下载](https://yzweb-my.sharepoint.com/:u:/g/personal/bilibililty_bujigegroup_site/Efb8aFPbiO5EsKqYUYv8l9EBAT3u4XdgZrMhQyodesZNGw?e=AE8722) |
| SilenceSkippingPlay 跳过静音 | Dreamtonics | ver.001 | [下载](https://yzweb-my.sharepoint.com/:u:/g/personal/bilibililty_bujigegroup_site/ESvNB-StFOZJkq-wg38YhjABZT7INAipgb35-QPp8pYKCg?e=hKU2sf) |
| SmoothNavigationPlay 平滑滚动 | Dreamtonics | ver.001 | [下载](https://yzweb-my.sharepoint.com/:u:/g/personal/bilibililty_bujigegroup_site/EYAQ7B5SrdtAq681wiq2mC8BJHRB-uRprHAs6fiBOuRlgg?e=5XtNtp) |
| SplitSelectedGroups 分割音符组 | Dreamtonics | ver.001 | [下载](https://yzweb-my.sharepoint.com/:u:/g/personal/bilibililty_bujigegroup_site/EdLMw1gWWgZAjbhj_81nCiwBkiU6_OjKoVOzhKz0FqVzxg?e=Mgi3Qs) |
| SplitSelectedNotes 分割音符 | Dreamtonics | ver.001 | [下载](https://yzweb-my.sharepoint.com/:u:/g/personal/bilibililty_bujigegroup_site/EXFgdFVjQnRFknOxuv0rkKwBnrCwe9CpQxAFHK-nyfA01A?e=q9NVz8) |

## 脚本说明

正如主文档一样，我们也为插件提供了说明文档：

### MergeSelectedNotes 合并音符

合并选择的音符，音符之间必须相连，音高由第一个音决定，歌词合并，以空格分隔

### RandomizeParameters 随机参数

生成随机的参数。脚本可自定义以下选项

![RP脚本](/docs/download/script/1.png)

#### Parameter Type

选择需要添加随机参数的参数种类。支持所有类型的参数

#### 力度

随机参数的幅度

#### Speed

随机参数的频率

#### Points per quarter

每小节生成的参数点，可以理解为精度

#### Replace existing control points

勾选后将会替代原有的参数。不勾选将会在原有的参数点上叠加

### ScaleSelectedNotes 音符缩放

伸缩音符的长度。脚本可自定义以下选项

![SSN脚本](/docs/download/script/2.png)

#### Upscaling factor

拉长系数

#### Downscaling factor

缩短系数

:::tip
两者数值相等时，将不会进行任何操作
:::

#### Relative to the selection start

勾选后将会相对首个音符开头进行缩放，不勾选将会相对播放杆进行缩放

### SilenceSkippingPlay 跳过静音

直接跳过静音部分并开始播放

### SmoothNavigationPlay 平滑滚动

开始播放，并且通过滚动钢琴卷帘窗保证播放杆位置固定，类似于 Cubase 中的平滑滚动功能

![SNP脚本](/docs/download/script/3.png)

#### Playhead Position

调整播放秆锁定的位置。锁定位置距离左边界位置 = 钢琴卷帘窗长度 × 数值

### SplitSelectedGroups 分割音符组

在播放杆位置分开**选中且播放杆对应**的音符。

### SplitSelectedNotes 分割音符

在播放杆位置分开选中的音符。分割后新产生的音符歌词为 `-`

:::tip
对于播放杆对应的音符，将会从播放杆处分割。对于非播放杆对应的音符，将会从中间分割
:::
---
title: 文件
---
文件菜单内容如下

![文件菜单](/docs/main_docs/menu/file/1.png)

## 新建

新建一个工程。与 After Effects 等软件相同的是，在你打开 Synthesizer V Studio 的同时就已经新建了一个工程。

如果当前打开的工程有更改，那么则会出现窗口询问是否保存。

* 放弃改动：不保存当前的文件并且新建一个工程。
* 取消：取消新建工程并返回当前工程编辑。

![新建弹窗](/docs/main_docs/menu/file/2.png)

## 打开

打开一个新工程。支持打开 `.s5p`（Synthesizer V 工程格式）和 `.svp`（Synthesizer V Studio 工程格式）文件。

:::tip
打开 `.mid`、`.midi`、`.vsqx`、`.vpr`、`.css`、`.ust` 工程文件请点击 **导入** 。
:::

如果当前打开的工程有更改，那么则会出现窗口询问是否保存。

* 放弃改动：不保存当前的文件并且打开一个工程。
* 取消：取消新建工程并返回当前工程编辑。

如果你需要保存当前的工程，直接关闭对话框即可。

## 最近使用的文件

展开最近使用的文件列表。点击文件名相当于执行 **打开** 操作。

## 保存

保存当前文件。如果当前文件从未保存过，将执行 **另存为** 操作。

## 另存为

将当前文件保存为一个新文件。此后的所有操作均会保存在新文件中。

Synthesizer V Studio **不支持** 将当前文件保存为一个新文件并将此后的所有操作均会保存在老文件中。

:::warning
在 1.4.1 版本中 Synthesizer V Studio 仍很不稳定。因此请及时保存你的工程文件。
:::

## 导入（为音轨）

打开 `.mid`、`.midi`、`.vsqx`、`.vpr`、`.css`、`.ust` 工程文件（为一个新的音轨）。

如果当前打开的工程有更改，那么则会出现窗口询问是否保存。

* 放弃改动：不保存当前的文件并且打开一个工程。
* 取消：取消新建工程并返回当前工程编辑。

打开 mid / midi 格式的文件会弹出的对话框。

![导入 midi](/docs/main_docs/menu/file/3.png)

1. 需要导入的音轨。勾选的音轨将作为新音轨导入。
2. 导入的音符个数。
3. 导入音符的音域。

:::warning
Synthesizer V Studio 与 VOCALOID 的中央 C 标准不同，这导致 VOCALOID 中的音高在 Synthesizer V Studio 中会被提高一个八度。如在 VOCALOID 中的 F3 相当于 Synthesizer V Studio 的 F4。
:::

:::tip
导入伴奏请参考 [音轨选项](../arrangement/track.md) 。
:::

## 导出

### 导出到 Midi

将当前工程的音符导出为 .mid 文件，不支持导出为 .midi 文件。

:::tip
由于 Synthesizer V Studio 自身的原因，导出 midi 时会多出一个空轨道。
:::

### 导出当前音符组到 UST

将当前 **音符组** 的内容导出为 UST 文件。

如果你需要导出所有内容到 UST 文件，那么请解散所有音符组。有关音符组的内容，请参考 [音符组概述 音符组库](../sidebar/note_properties.md) 。

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
---
title: 播放控制
---

播放控制菜单内容如下

![播放控制菜单](/docs/main_docs/menu/transport/1.png)

## 播放

从播放杆处开始播放。

## 暂停

暂停歌曲播放，播放杆不回到起始点。

## 停止

停止歌曲播放，播放杆回到起始点。

## 循环播放选中的音符

循环选中的音符区域。

## 移动到开始

将播放杆移动到工程文件开始处。

## 移动到结尾

将播放杆移动到工程文件结尾处。

## 移动到指定小节

根据你所填写的小节号移动播放杆。

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
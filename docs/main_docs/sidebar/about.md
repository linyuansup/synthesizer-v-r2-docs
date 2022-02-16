---
title: 概述
---

Synthesizer V Studio 的很多功能都在侧边栏内。对音符的调整、导出等一系列操作都需要在侧边栏内完成。

Synthesizer V Studio 的侧边栏如下：

![侧边栏概览](/docs/main_docs/sidebar/about/1.png)

侧边栏从上到下依次为 音符属性、歌声、音符组库、词典、渲染、授权与激活、设置。在后续的章节中将会一一介绍各面板的功能。

同时，侧边栏是可以拖动的。按住上方的 Synthesizer V Studio 图标并拖动可以切换到左停靠或右停靠。

点击侧边栏项目的大标题，可以展开 / 折叠该标题下的内容。

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
---
title: 脚本
---

:::tip
本节不包括脚本编写的内容。有关脚本编写，请参考 [Synthesizer V Studio 官方文档](https://dreamtonics.com/synthv/scripting)，该文档的中翻工作正在进行中，参考 [了解脚本](../../api/about.md)。
:::

:::tip
该功能仅存在于 Pro 版本。
:::

## 重新扫描

重新扫描插件文件夹下的所有插件。

## 打开脚本文件夹

打开脚本文件夹，即 `C:\Users\***\Documents\Dreamtonics\Synthesizer V Studio\scripts`，其中 *** 为你的用户名。

## 停止所有运行中的脚本

强制停止所有运行中的脚本，该功能可能会导致一些脚本功能失效或崩溃。

:::tip
脚本的具体内容（包括官方脚本）请参考 [脚本下载界面](../../download/script.md)
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
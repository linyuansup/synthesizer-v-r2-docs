---
title: 其他
---

其他菜单内容如下

![其他菜单](/docs/main_docs/menu/misc/1.png)

## 显示帮助（在线）

打开 [官方在线帮助内容](https://dreamtonics.com/en/svstudio-resources/)

## 人工神经网络性能调整工具

根据当前电脑性能调整神经网络性能，以达到最佳效果。建议在每次更新或重新安装后运行。点击后会出现如下弹窗：

![性能调整](/docs/main_docs/menu/misc/2.png)

### 开始性能测试

开始测试机器性能，该操作需首先执行，大约需要 1 分钟。

### 应用并重新启动实时渲染系统

根据电脑性能调整渲染系统。该步骤必须执行，否则上一步没有效果。

## 关于

查看 Synthesizer V Studio 以及系统信息，在出现 Bug 时可以发送给官方。

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
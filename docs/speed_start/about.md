---
title: 关于 Synthesizer V Studio
---
## Synthesizer V Studio 是什么

Synthesizer V 是由华侃如创立的 Dreamtonics 公司开发的歌声合成引擎。由于其极强大的歌声合成能力及真实度获得广泛好评。在国内，五维介质代理了 Synthesizer V 的有关事宜。Synthesizer V Studio 为目前最新的版本。

1. 编辑器

   编辑器是你的基础操作环境。在前期，所有调校操作均是在编辑器内进行的。Synthesizer V Studio 的编辑器分为 Basic 和 Pro 两个版本（Web 版本暂不介绍）。Basic 版本是完全免费的，可以在官网上下载，也可以在 [Docs 官方下载站](../download/editor.md)，但存在一些限制；而 Pro 版本则需要付费购买（国内可在淘宝店购买）。两者的具体区别如下表。

   |  | Basic | Pro |
   | ---- | ---- | ---- |
   | 单独购买价格 | 免费 | 649 元 |
   | 平台 | Windows macOS Linux | Windows macOS Linux |
   | 工程音轨数 | 最多 3 音轨 | 无限制 |
   | 渲染线程数 | 最多 2 线程 | 最多 12 线程 <br/>（官方说明为无限制，但实测为最多 12 线程） |
   | ASIO / Jack 音频驱动 | 不支持 | 支持 |
   | Pit 自动调校 | 单一的自动调校 | 支持自定义参数的自动调校 |
   | 其他功能 | 无 | 替换音素  <br/> 脚本 ( Lua / JavaScript ) <br/> VST3 / AU 插件 <br/> 气声分离导出 <br/> 音区偏移 <br/> 音素力度 <br/> AI 声库跨语种 |

:::warning
Synthesizer V Studio 不支持 Windows 7
:::

2. 声库

   顾名思义，声库就是 “声音的数据库”。没有声库，编辑器也无法发出声音（这句话是有问题的，但是暂时可以这样理解）。所以，我们需要安装声库来让编辑器发出声音。

   与编辑器不同的是，在声库方面你可以做出很多选择。与真人一样，不同的歌手的声音是不同的，语言也是不同的。因此，你可以根据你的个人喜好选择最喜欢的声库。目前。中文声库有赤羽、海伊、苍穹、诗岸、牧心、星尘 Minus、星尘 Infinity、青溯、默辰、岸晓、艾可。你可以在 B 站搜索到他们演唱的歌曲来帮助你选择。

   同时，我们也准备了详细的介绍文档，你可以在 [这里](voice_data/chinese.md) 找到。

   与编辑器相同的是，部分声库也是有两个版本的：Lite 版与完整版。Lite 版可以在官网免费下载，完整版则需要付费购买（国内可在淘宝店购买）。完整版具有全部功能，Lite 版与完整版有以下不同：
   * 只有单一音阶
   * 不可商用
   * **需标注“使用 Lite”**

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
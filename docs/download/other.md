---
title: 其他下载
---

我们还提供了一些其他资源下载。

### 恢复默认配置

当你遇到了词典丢失、中文语言包丢失等等情况时，你可以尝试恢复默认配置。将下载的文件解压到当前用户的文档目录下即可，由 LinR_隐卫制作：[下载](https://yzweb-my.sharepoint.com/:u:/g/personal/bilibililty_bujigegroup_site/ESFuPAaNhiFDh4OSF3pUuvMBOPAn8-ygT6SgOk4ANisNrQ?e=FxN2y3)

:::warning
该功能可能导致声库信息以及激活信息丢失。因此我们建议使用前反激活所有声库以及编辑器
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
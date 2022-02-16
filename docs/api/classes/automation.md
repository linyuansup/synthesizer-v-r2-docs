---
title: Automation
---

## 自动化

控制 [音符组](note_group.md) 内特定参数类型（如音高偏差）的一组点。

“自动化”这个名字来自于 DAW 软件。在 DAW 中，每个轨道都有一个由可以拖动的控制点组成的音量包络线。在一些更高级的情况下，这些包络线还可以控制插件的属性。一个值得注意的问题是，在 Synthesizer V Studio 中，`自动化` 是为 [音符组](note_group.md) 创建的，而不是 [轨道](track.md) 创建的。

## 扩展

 * [嵌套对象](nested_object.md)

## 方法

```js
add(b, v) → {boolean}
```

在位置 `b` (blicks) 添加一个数值为 `v` 的控制点。如果在 `b` 已经存在控制点，该控制点将会被更新到数值 `v`。

如果创建了新点，则返回 true。

#### 参数
| 参数名 | 类型 | 说明 |
| --- | --- | --- |
| b | number |  |
| v | number |  |

#### 返回：
类型：布尔

```js
clone() → {Automation}
```

对当前对象进行深拷贝。

#### 返回：
类型：[Automation](automation.md)

```js
get(b) → {number}
```

获取在位置 `b` (blicks) 的插入参数值。如果位置 `b` 处存在点，则无论插值方式如何，都返回该点的值。

#### 参数
| 参数名 | 类型 | 说明 |
| --- | --- | --- |
| b | number |  |

#### 返回：
类型：数

---

<BrowserOnly fallback={<div></div>}>{() => <GitalkComponent options={{
    clientID: '2537efeef8962e53223d',
    clientSecret: 'da454b36ea826630b34f708d39992fd962726a39',
    repo: 'synthesizer-v-r2-docs',
    owner: 'linyuansup',
    admin: ['linyuansup'],
    }} />}
</BrowserOnly>

import Gitalk from 'gitalk';
import 'gitalk/dist/gitalk.css';
import GitalkComponent from 'gitalk/dist/gitalk-component';
import BrowserOnly from '@docusaurus/BrowserOnly';
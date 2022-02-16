---
title: 本地化
---

## 本地化

### `SV.T(text)`

`SV.T(…)` 是一个方便的函数，用于根据 Synthesizer V Studio 的当前语言设置翻译字符串。翻译基于脚本作者提供的词典。如果遇到字典外的字符串，它将使用 Synthesizer V Studio 的翻译文件，如果仍然找不到翻译，则将返回原始字符串。

## 在脚本中嵌入翻译字典

脚本作者可以使用 `getTranslations(langCode)` 回调以提供脚本专用的翻译词典。当 Synthesizer V Studio 加载脚本并为语言代码查找字符串参数时，将执行此函数。它返回数组 `array`。

例如：

### JavaScript

```js
function getTranslations(langCode) {
  if(langCode == "ja-jp") {
    return [
      ["Please enter a number here:", "数字を入力してください："],
      ["Please enter some text here:", "テキストを入力してください："]
    ];
  } else
  if(langCode == "zh-cn") {
    return [
      ["Please enter a number here:", "请输入一个数字："],
      ["Please enter some text here:", "请输入一段文本："]
    ];
  }
  return [];
}

function main() {
  SV.showInputBox("My Script", SV.T("Please enter a number here:"), "");
  SV.showInputBox("My Script", SV.T("Please enter some text here:"), "");
  SV.finish();
}
```

### Lua

```lua
function getTranslations(langCode)
  if langCode == "ja-jp" then
    return {
      {"Please enter a number here:", "数字を入力してください："},
      {"Please enter some text here:", "テキストを入力してください："}
    }
  elseif langCode == "zh-cn" then
    return {
      {"Please enter a number here:", "请输入一个数字："},
      {"Please enter some text here:", "请输入一段文本："}
    }
  end
  return {}
end

function main()
  SV:showInputBox("My Script", SV:T("Please enter a number here:"), "")
  SV:showInputBox("My Script", SV:T("Please enter some text here:"), "")
  SV:finish()
end
```

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
---
title: 最小范例
---

## 最小范例

最小的工作脚本由两个全局功能组成：`getClientInfo()` 和 `main()`。

`getClientInfo()` 当脚本加载时调用。它返回一个对象，描述脚本的名称，作者，脚本的版本，以及运行脚本所需的 Synthesizer V Studio 的最小版本编号。

`main()` 当用户执行脚本时被调用。

### JavaScript
```js
function getClientInfo() {
  return {
    "name" : "My Script",
    "category" : "Example",
    "author" : "Bob Alice",
    "versionNumber" : 1,
    "minEditorVersion" : 65540
  };
}

function main() {
  SV.showMessageBox("My Script", "Hello, world!");
  SV.finish();
}
```

### Lua

```lua
function getClientInfo()
  return {
    name = "My Script",
    category = "Example",
    author = "Bob Alice",
    versionNumber = 1,
    minEditorVersion = 65540
  }
end

function main()
  SV:showMessageBox("My Script", "Hello, world!")
  SV:finish()
end
```

请参阅 [此处](https://github.com/Dreamtonics/svstudio-scripts/tree/master/HelloWorld) ，了解创建 [音符组](../classes/note_group.md) 并添加一些音符的更多示例。
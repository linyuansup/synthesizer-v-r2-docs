---
title: 对话框
---

## 对话框

[`SV#showInputBox`](../classes/sv.md)，[`SV#showYesNoCancelBox`](../classes/sv.md) 以及他们的异步版本适合简单的输入。如果需要多个输入字段和更多样化输入小部件（例如滑块），可以通过[`SV#showCustomDialog`](../classes/sv.md) 和 [`SV#showCustomDialogAsync`](../classes/sv.md)

[`SV#showCustomDialog`](../classes/sv.md) 传入一个作为自定义表单对象的参数，并返回一个对象。表单对象具有以下属性：

  * `title`： `string` 对话的标题
  * `message`： `string` 对话顶部显示的信息
  * `buttons`： `string` 对话底部显示的预设按钮。可以是 "YesNoCancel" 或 "OkCancel" 。
  * `widgets`：`array` 对话框主体中显示的一组小部件。

欲了解更多信息，请参阅 [JavaScript 示例](https://github.com/Dreamtonics/svstudio-scripts/blob/master/Tests/TestCustomDialog.js) 和 [Lua 示例](https://github.com/Dreamtonics/svstudio-scripts/blob/master/Tests/TestCustomDialog.lua)。
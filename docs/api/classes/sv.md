---
title: SV
---

## 宿主对象

宿主对象（host object）是一个可在脚本中任意位置被访问的全局对象，名为`SV`。

### 成员

#### QUARTER：number

一个四分音符长度（quarter）对应的“blick”数量，该值为705600000。

此处指的时长（如一个四分音符长度——quarter，或一拍——beat）与物理时长（如一秒）有所不同。一个“blick”是GUI（图形用户界面）内部工作的最小时间单元。它被用来在音乐软件中，并且可满足大部分整除需求。该名称来源于[Flicks](https://github.com/facebookarchive/Flicks)（即Frame-tick）。

类型：

* number

### 方法

#### blackKey(k) → {boolean}

检查传入的键（参数以MIDI编号被传入）是否是一个钢琴上的黑键。

由时间轴（TimeAxis）来根据项目上下文，转换音乐意义上的时间和物理意义上时间。

##### 参数：

| 名称 | 类型   | 描述 |
| ---- | ------ | ---- |
| `k`  | number |      |

##### 返回：

类型	boolean

#### blick2Quarter(b) → {number}

把`b`由blick数转换成对应的quarter数量。

等价于`b`/`SV.QUARTER`。

由时间轴（TimeAxis）来根据项目上下文，转换音乐意义上的时间和物理意义上时间。

##### 参数：

| 名称 | 类型   | 描述 |
| ---- | ------ | ---- |
| `b`  | number |      |

##### 返回：

类型	number

#### blick2Seconds(b, bpm) → {number}

把`b`由blick数转换成特定bpm（每分钟节拍数）下的秒数。

相当于`b` / `SV.QUARTER` * 60 / `bpm`。

由时间轴（TimeAxis）来根据项目上下文，转换音乐意义上的时间和物理意义上时间。

##### 参数：

| 名称  | 类型   | 描述 |
| :---- | :----- | :--- |
| `b`   | number |      |
| `bpm` | number |      |

##### 返回：

类型	number

#### blickRoundDiv(dividend, divisor) → {number}

作`dividend`(blicks)除以`divisor`(blicks)的除法（就近取整）。

由时间轴（TimeAxis）来根据项目上下文，转换音乐意义上的时间和物理意义上时间。

##### 参数：

| 名称       | 类型   | 描述 |
| :--------- | :----- | :--- |
| `dividend` | number |      |
| `divisor`  | number |      |

##### 返回：

类型	number

#### blickRoundTo(b, interval) → {number}

返回`interval`的所有整数倍中，最接近`b`(blick)的数。

等价于`blickRoundDiv(b, interval) * interval`。

由时间轴（TimeAxis）来根据项目上下文，转换音乐意义上的时间和物理意义上时间。

##### 参数：

| 名称       | 类型   | 描述 |
| :--------- | :----- | :--- |
| `b`        | number |      |
| `interval` | number |      |

##### 返回：

类型	number

#### create(type) → {object}

创建一个新的对象。`type`为如下的类型确认字符串之一。

| `类型`                                                       | 描述                                                         |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| "[`Note`](https://resource.dreamtonics.com/scripting/Note.html)"（音符） | 一个由音高（ pitch）、歌词（lyrics）、起始时间（onset）、时长（duration）等定义的音符。 |
| "[`Automation`](https://resource.dreamtonics.com/scripting/Automation.html)"（自动化） | 音符组（[`NoteGroup`](https://resource.dreamtonics.com/scripting/NoteGroup.html)）中一组控制某个参数（比如音高偏移）的点。 |
| "[`NoteGroup`](https://resource.dreamtonics.com/scripting/NoteGroup.html)"（音符组） | 一组便于重复使用的成组的音符及其参数。                       |
| "[`NoteGroupReference`](https://resource.dreamtonics.com/scripting/NoteGroupReference.html)"（音符组引用） | 在某个时间、音高和声音/数据库属性下，对一个音符组进行的引用。 |
| "`TrackMixer`"（音轨混合器）                                 | 一组用于描述混合器状态的属性（如通道增益/音量、声像、静音、独奏）。 |
| "[`Track`](https://resource.dreamtonics.com/scripting/Track.html)"（音轨） | 一个音符组的集合。                                           |
| "[`TimeAxis`](https://resource.dreamtonics.com/scripting/TimeAxis.html)"（时间轴） | 一个针对整个项目的对象，用于存储节拍、拍号标记；负责物理时间和音乐时间的转换。 |
| "[`Project`](https://resource.dreamtonics.com/scripting/Project.html)"（项目） | 可用的最大的对象，包含了音轨、时间轴、音符组等。             |

##### 参数：

| 名称   | 类型   | 描述                 |
| :----- | :----- | :------------------- |
| `type` | string | 一个类型确认字符串。 |

##### 返回

类型	object

#### finish()

标识脚本的结束。此后的所有异步回调都不再会被执行。注意，这并不会让当前脚本立刻退出。

#### freq2Pitch(f) → {number}

将频率（单位为Hz）转换为MIDI编号（半音程，C4对应60）。

由时间轴（TimeAxis）来根据项目上下文，转换音乐意义上的时间和物理意义上时间。

##### 参数：

| 名称 | 类型   | 描述 |
| :--- | :----- | :--- |
| `f`  | number |      |

##### 返回：

类型	number

#### getArrangement() → {[ArrangementView](https://resource.dreamtonics.com/scripting/ArrangementView.html)}

获取布局视图的UI（用户界面）的状态对象。

##### 返回：

类型	ArrangementView

#### getHostClipboard() → {string}

获取系统剪贴板中的文本。

##### 返回：

类型	string

#### getHostInfo() → {object}

获取一个包含以下属性的对象。

- `osType`: `string` 取值为"Windows"、"macOS"、"Linux"、"Unknown"之一。
- `osName`: `string` 操作系统的全名。
- `hostName`: `string` "Synthesizer V Studio Pro" 或"Synthesizer V Studio Basic"
- `hostVersion`: `string` Synthesizer V Studio的版本字符串，如"1.0.4"
- `hostVersionNumber`: `number` 以数字形式返回版本号，各用两位十六进制数表示大版本、小版本和修订版本 (比如 0x010004 就是 "1.0.4" 的意思)
- `languageCode`: `string` 用户界面的语言代码，如 "en-us", "ja-jp", "zh-cn"

##### 返回：

类型	object

#### getMainEditor() → {[MainEditorView](https://resource.dreamtonics.com/scripting/MainEditorView.html)}

获取钢琴卷帘的UI（用户界面）状态对象。

##### 返回：

类型	MainEditorView

#### getPhonemesForGroup(group) → {array}

获取一个音符组中所有音符的音素（以音符组引用的形式传入）。该音符组必须是当前打开项目的一部分。

注意， `getPhonemesForGroup`返回的是Synthesizer V Studio内部文本-音素转换器的*输出*结果。这意味着即使是那些未经用户指定音素的音符，`getPhonemesForGroup` 仍会返回默认音素， [`Note#getPhonemes`](https://resource.dreamtonics.com/scripting/Note.html#getPhonemes) 而则会返回空字符串。

还需要注意的是，文本-音素转换器运行在另一个线程上。`getPhonemesForGroup` 不会阻塞当前线程。如果文本-音素转换器还未完成对某一音符组的运行，有极小可能返回会是一个空数组。我们建议脚本作者们在这种情况下将 `getPhonemesForGroup` 封装到一个[`SV#setTimeout`](https://resource.dreamtonics.com/scripting/SV.html#setTimeout)调用中。

##### 参数：

| 名称    | 类型                                                         | 描述 |
| :------ | :----------------------------------------------------------- | :--- |
| `group` | [NoteGroupReference](https://resource.dreamtonics.com/scripting/NoteGroupReference.html) |      |

##### 返回：

一个字符串数组

类型	数组

#### getPlayback() → {PlayBackControl}

获取控制回放的UI（用户界面）状态对象。

##### 返回：

类型	PlayBackControl

#### getProject() → {[Project](https://resource.dreamtonics.com/scripting/Project.html)}

获取当前打开的项目。

##### 返回：

类型	Project

#### pitch2freq(p) → {number}

将MIDI编号（半音程，C4对应60）转换为频率（单位为Hz）。

由时间轴（TimeAxis）来根据项目上下文，转换音乐意义上的时间和物理意义上时间。

##### 参数：

| 名称 | 类型   | 描述 |
| :--- | :----- | :--- |
| `p`  | number |      |

##### 返回：

类型	number

#### quarter2Blick(q) → {number}

把`q`由quarter数转换成对应的blick数。

等价于 `q` * `SV.QUARTER`。

由时间轴（TimeAxis）来根据项目上下文，转换音乐意义上的时间和物理意义上时间。

##### 参数：

| 名称 | 类型   | 描述 |
| ---- | ------ | ---- |
| `q`  | number |      |

##### 返回：

类型	number

#### seconds2Blick(s, bpm) → {number}

把`s`由秒数转换成特定bpm（每分钟节拍数）下的blick数。

相当于`s` / 60 * `bpm` * `SV.QUARTER`。

由时间轴（TimeAxis）来根据项目上下文，转换音乐意义上的时间和物理意义上时间。

##### 参数：

| 名称  | 类型   | 描述 |
| :---- | :----- | :--- |
| `s`   | number |      |
| `bpm` | number |      |

##### 返回：

类型	number

#### setHostClipboard(text)

设置系统剪贴板。

##### 参数：

| 名称   | 类型   | 描述 |
| :----- | :----- | :--- |
| `text` | string |      |

#### setTimeout(timeOut, callback)

在 `timeOut` 毫秒的延迟后进行 `callback` 的调用。

调用 `setTimeout`后，脚本会继续运行而并非立刻执行`callback`。回调函数会被置入队列并开始延迟。这并非一个抢占式的回调，即，`callback` 的执行并不会中断当前运行的任务。

##### 参数：

| 名称       | 类型             | 描述 |
| :--------- | :--------------- | :--- |
| `timeOut`  | number           |      |
| `callback` | function（函数） |      |

#### showCustomDialog(form) → {object}

同步版的 [`SV#showCustomDialogAsync`](https://resource.dreamtonics.com/scripting/SV.html#showCustomDialogAsync) ，会阻塞脚本的运行，直到用户关闭会话。其返回用户（完成后的）输入。

##### 参数：

| 名称   | 类型   | 描述 |
| :----- | :----- | :--- |
| `form` | object |      |

##### 返回：

类型	object

#### showCustomDialogAsync(form, callback)

展示一个由 `form` 所定义的会话，且不会阻塞脚本的执行。

`callback` 会在会话关闭后马上被唤醒。回调函数接收一个包含结果的参数。

更多信息请查看 [Custom Dialogs](https://resource.dreamtonics.com/scripting/tutorial-Custom Dialogs.html)。

##### 参数：

| 名称       | 类型     | 描述 |
| :--------- | :------- | :--- |
| `form`     | object   |      |
| `callback` | function |      |

#### showInputBox(title, message, defaultText) → {string}

同步版的 [`SV#showInputBoxAsync`](https://resource.dreamtonics.com/scripting/SV.html#showInputBoxAsync) ，会阻塞脚本的运行，直到用户关闭会话。其返回用户输入的文本。

##### 参数：

| 名称          | 类型   | 描述 |
| :------------ | :----- | :--- |
| `title`       | string |      |
| `message`     | string |      |
| `defaultText` | string |      |

##### 返回：

类型	string

#### showInputBoxAsync(title, message, defaultText, callback)

展示一个对话框，其包含一个文本输入框和一个“OK”按钮，且不会阻塞脚本执行。

`callback` 会在会话关闭后马上被唤醒。回调函数接收一个包含文本输入框中内容的 `string` 参数。

##### 参数：

| 名称          | 类型     | 描述 |
| :------------ | :------- | :--- |
| `title`       | string   |      |
| `message`     | string   |      |
| `defaultText` | string   |      |
| `callback`    | function |      |

#### showMessageBox(title, message)

同步版的[`SV#showMessageBoxAsync`](https://resource.dreamtonics.com/scripting/SV.html#showMessageBoxAsync) ，会阻塞脚本的运行，直到用户关闭信息提示框。

##### 参数：

| 名称      | 类型   | 描述 |
| :-------- | :----- | :--- |
| `title`   | string |      |
| `message` | string |      |

#### showMessageBoxAsync(title, message, callback)

弹出一个消息框，且不会组织脚本的执行。

如果 `callback` 给出，其将会在消息框关闭后被唤醒。该函数不包含任何参数。

##### 参数：

| 名称       | 类型     | 描述     |
| :--------- | :------- | :------- |
| `title`    | string   |          |
| `message`  | string   |          |
| `callback` | function | （可选） |

#### showOkCancelBox(title, message) → {boolean}

同步版的 [`SV#showOkCancelBoxAsync`](https://resource.dreamtonics.com/scripting/SV.html#showOkCancelBoxAsync) ，会阻塞脚本的运行，直到用户关闭信息提示框。如果点击了“OK”按钮，其返回True。

##### 参数：

| 名称      | 类型   | 描述 |
| :-------- | :----- | :--- |
| `title`   | string |      |
| `message` | string |      |

##### 返回：

类型	boolean

#### showOkCancelBoxAsync(title, message, callback)

显示一个包含“OK”按钮和“Cancel”按钮的消息框，且不会阻塞脚本的执行。

`callback` 会在会话关闭后马上被唤醒。如果点击了“OK”按钮，则回调函数接收True作为一个参数。

##### 参数：

| 名称       | 类型     | 描述 |
| :--------- | :------- | :--- |
| `title`    | string   |      |
| `message`  | string   |      |
| `callback` | function |      |

#### showYesNoCancelBox(title, message) → {string}

同步版的 [`SV#showYesNoCancelBoxAsync`](https://resource.dreamtonics.com/scripting/SV.html#showYesNoCancelBoxAsync) ，会阻塞脚本的运行，直到用户关闭信息提示框。其返回 "yes"、"no" 或 "cancel"。

##### 参数：

| 名称      | 类型   | 描述 |
| :-------- | :----- | :--- |
| `title`   | string |      |
| `message` | string |      |

##### 返回：

类型	string

#### showYesNoCancelBoxAsync(title, message, callback)

显示一个包含“Yes”按钮、“No”按钮和“Cancel”按钮的消息框，且不会阻塞脚本的执行。

`callback` 会在会话关闭后马上被唤醒。回调函数接收一个字符类型参数，该参数可以是以下之一："yes"、"no"、"cancel"。

##### 参数：

| 名称       | 类型     | 描述 |
| :--------- | :------- | :--- |
| `title`    | string   |      |
| `message`  | string   |      |
| `callback` | function |      |

#### T(text) → {string}

依据当前用户界面的语言设定，获取本地化版本（当前语言）的 `text` 。

更多信息详见 [Localization](https://resource.dreamtonics.com/scripting/tutorial-Localization.html) 。

##### 参数：

| 名称   | 类型   | 描述 |
| :----- | :----- | :--- |
| `text` | string |      |

##### 返回：

类型	string

*Documentation generated by* [JSDoc 3.6.4](https://github.com/jsdoc3/jsdoc) *on Thu Jul 23 2020 13:51:59 GMT+0900 (Japan Standard Time) using the* [docdash](https://github.com/clenemt/docdash) *theme.*

*Copyright 2020 Dreamtonics Co., Ltd.*
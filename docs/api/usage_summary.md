---
title: 用法综述
---

# 用法综述

这个页面总结了一些类的用法和技巧。

## 类继承关系图

<Mermaid chart={`
graph LR
SV[SV 宿主对象] -- getArrangement --> ArrV[ArrangementView 编曲区界面]
SV -- getMainEditor --> MEV[MainEditorView 主编辑器界面]
SV -- getProject --> Prj[Project 工程]
SV -- getPlayback --> PBCtrl[PlayBackControl 回放控制]
ArrV -- getSelection --> ASSt[ArrangementSelectionState 编曲区选择状态]
ArrV -- getNavigation --> CSys[CoordinateSystem 坐标系]
MEV -- getNavigation --> CSys
MEV -- getSelection --> TISSt[TrackInnerSelectionState 轨道内部选择状态]
MEV -- getCurrentGroup --> NGrpR[NoteGroupReference 音符组引用]
MEV -- getCurrentTrack --> Trk[Track 轨道]
Prj -- getTrack --> Trk
Prj -- getNoteGroup --> NGrp[NoteGroup 音符组]
Prj -- getTimeAxis --> TAx[TimeAxis 时间轴]
Trk -- getGroupReference --> NGrpR
NGrpR -- getTarget --> NGrp
NGrp -- getNote --> Nte[Note 音符]
NGrp -- getParameter --> Auto[Automation 自动化]
ASSt -.- SSB{SelectionStateBase 选择状态基础接口}
ASSt -.- GrpS{GroupSelection 音符组选择}
TISSt -.- GrpS
TISSt -.- SSB
GrpS -- getSelectedGroups --> NGrp
TISSt -- getSelectedNotes --> Nte
NObj{NestedObject 嵌套对象} -. getParent .-> NObj
click SV href "./classes/sv" "宿主对象"
click ArrV href "./classes/arrangement_view" "编曲区界面"
click MEV href "./classes/main_editor_view" "主编辑器界面"
click Prj href "./classes/project" "工程"
click PBCtrl href "./classes/playback_control" "回放控制"
click ASSt href "./classes/arrangement_selection_state" "编曲区选择状态"
click CSys href "./classes/coordinate_system" "坐标系"
click TISSt href "./classes/track_inner_selection_state" "轨道内部选择状态"
click NGrpR href "./classes/note_group_reference" "音符组引用"
click Trk href "./classes/track" "轨道"
click NGrp href "./classes/note_group" "音符组"
click TAx href "./classes/time_axis" "时间轴"
click Nte href "./classes/note" "音符"
click Auto href "./classes/automation" "自动化"
click SSB href "./classes/selection_state_base" "选择状态基础接口"
click GrpS href "./classes/group_selection" "音符组选择"
click NObj href "./classes/nested_object" "嵌套对象"
`}/>

### Form（窗体）Object控件定义及返回

> 以JavaScript为例(来自Dreamtonics的Github范例)

#### 定义

``` js
var myForm = {
    "title": "Form Title",
    "message": "This is just some dummy text.",
    "buttons": "YesNoCancel",
    "widgets": [
        {
            "name": "sl1", "type": "Slider",	//滑动条1
            "label": "My Slider 1",	//标签
            "format": "%1.0f",		//数据格式
            "minValue": -10,		//最大值
            "maxValue": 10,			//最小值
            "interval": 0.5,		//分度值
            "default": 3			//缺省值
        },
        {
            "name": "cb1", "type": "ComboBox",	//组合框1
            "label": "My ComboBox 1",	//标签
            "choices": ["Choice A", "Choice B", "Choice C"],	//选项
            "default": 0	//默认选项
        },
        {
            "name": "cb2", "type": "ComboBox",
            "label": "My ComboBox 2",
            "choices": ["Choice A", "Choice B", "Choice C"],
            "default": 2
        },
        {
            "name": "tb1", "type": "TextBox",	//文本框(单行)
            "label": "Enter some text here",	//标签
            "default": "Hello, world!"			//缺省文本
        },
        {
            "name": "ta1", "type": "TextArea",	//文本框(多行)
            "label": "My TextArea",	//标签
            "height": 100,			//高度
            "default": "Enter some more text here.\nAnother line.\nYet another line!",	//缺省文本
        },
        {
            "name": "check1", "type": "CheckBox",	//复选框
            "text": "Check this option (CheckBox 1)",	//标签
            "default": false	//缺省状态
        },
        {
            "name": "check2", "type": "CheckBox",
            "text": "Another option just for instance (CheckBox 2)",
            "default": false
        }
    ]
};
```

#### 调用

``` js
SV.showCustomDialog(myForm);
```

#### 调用 + 返回

``` js
var result = SV.showCustomDialog(myForm);

if (result.status == "Yes") {
    SV.showMessageBox("Filled Form", "Slider value: " + result.answers.sl1 + result.answers.sl1);
    SV.showMessageBox("Filled Form", "ComboBox values: " +
        result.answers.cb1 + " and " + result.answers.cb2);
    SV.showMessageBox("Filled Form", "TextBox value: " + result.answers.tb1);
    SV.showMessageBox("Filled Form", "TextArea value: " + result.answers.ta1);
    SV.showMessageBox("Filled Form", "CheckBox1: " + result.answers.check1);
    SV.showMessageBox("Filled Form", "CheckBox2: " + result.answers.check2);
} else if (result.status == "No") {
    SV.showMessageBox("Filled Form", "The form returned \"No\".");
}
```

#### 另:ComboBox添加选项

```js
//[2]:widgets数组中ComboBox2(cb2)所在的索引;
myForm.widgets[2].choices.push("这一个选项将添加到cb2末尾", "这个也是，可以无限添加");
myForm.widgets[2].choices.unshift("而这个选项则会被添加到开头，其余选项下移");
```

### 常见Object返回属性

### {NoteGroupReference}.getVoice() → {object}

- `tF0Left`: `number` 音高变化 - 时长 - 左（秒）
- `tF0Right`: `number` 音高变化 - 时长 - 右（秒）
- `dF0Left`: `number` 音高变化 - 深度 - 左（半音）
- `dF0Right`: `number` 音高变化 - 深度 - 右（半音）
- `tF0VbrStart`: `number` 颤音 - 开始（秒）
- `tF0VbrLeft`: `number` 颤音 - 左（秒）
- `tF0VbrRight`: `number` 颤音 - 右（秒）
- `dF0Vbr`: `number` 颤音 - 深度（半音）
- `fF0Vbr`: `number` 颤音 - 频率（Hz）
- `paramLoudness`: `number` 参数 - 响度（dB，分贝）
- `paramTension`: `number` 参数 - 张力
- `paramBreathiness`: `number` 参数 - 气声
- `paramGender`: `number` 参数 - 性别

### {Note}.getAttributes() → {object}

- `tF0Offset`: `number` 音高转变 - 偏移（秒）
- `tF0Left`: `number` 音高变化 - 时长 - 左（秒）
- `tF0Right`: `number` 音高变化 - 时长 - 右（秒）
- `dF0Left`: `number` 音高变化 - 深度 - 左（半音）
- `dF0Right`: `number` 音高变化 - 深度 - 右（半音）
- `tF0VbrStart`: `number` 颤音 - 开始（秒）
- `tF0VbrLeft`: `number` 颤音 - 左（秒）
- `tF0VbrRight`: `number` 颤音 - 右（秒）
- `dF0Vbr`: `number` 颤音 - 深度（半音）
- `pF0Vbr`: `number` 颤音 - 相位（弧度，-π ~ π）
- `fF0Vbr`: `number` 颤音 - 频率（Hz）
- `tNoteOffset`: `number` 时间和音素 - 音符偏移（秒）
- `exprGroup` (optional): `string` 表现力分组
- `dur`: array of `number` 音素时长尺度
- `alt`: array of `number` 可替换的音素发音

### SV.create(type) → {object}

略

### SV.getHostInfo() → {object}

- `osType`: `string` 取值为"Windows"、"macOS"、"Linux"、"Unknown"之一。
- `osName`: `string` 操作系统的全名。
- `hostName`: `string` "Synthesizer V Studio Pro" 或"Synthesizer V Studio Basic"
- `hostVersion`: `string` Synthesizer V Studio的版本字符串，如"1.0.4"
- `hostVersionNumber`: `number` 以数字形式返回版本号，各用两位十六进制数表示大版本、小版本和修订版本 (比如 0x010004 就是 "1.0.4" 的意思)
- `languageCode`: `string` 用户界面的语言代码，如 "en-us", "ja-jp", "zh-cn"

### SV.showCustomDialog(form) → {object}

**返回的Object为Form Object的返回类型**

自定义窗口的控件返回通常为`{Object}.answers.{Widget Name}`

自定义窗口的按钮返回通肠为`{Object}.status` → `"Yes" | "No"`

> 参见 [Form（窗体）Object控件定义及返回](#Form（窗体）Object控件定义及返回)

### {TimeAxis}.getMeasureMarkAt(measureNumber) → {object}

 * `position`: `number` 标记放置处的小节数。
 * `positionBlick`: `number` 标记位置 (以 blicks 为单位)
 * `numerator`: `number` 分子（例如，如果是 3/4 时间标记，则为 3）
 * `denominator`: `number` 分母（例如，如果它是 3/4 时间标记，则为 4）

### {TimeAxis}.getMeasureMarkAtBlick(b) → {object}

略

import Mermaid from '@theme/Mermaid';
import Gitalk from 'gitalk';
import 'gitalk/dist/gitalk.css';
import GitalkComponent from 'gitalk/dist/gitalk-component';
import BrowserOnly from '@docusaurus/BrowserOnly';

<BrowserOnly fallback={<div></div>}>{() => <GitalkComponent options={{
    clientID: '2537efeef8962e53223d',
    clientSecret: 'da454b36ea826630b34f708d39992fd962726a39',
    repo: 'synthesizer-v-r2-docs',
    owner: 'linyuansup',
    admin: ['linyuansup'],
    id: decodeURI(location.pathname),
    }} />}
</BrowserOnly>

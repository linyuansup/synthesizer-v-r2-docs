---
title: 用法综述
---

# 用法综述

这个页面总结了一些类的用法和技巧。

## 类继承关系图

<Mermaid chart={`
graph LR
SV[SV - 宿主对象] -- getArrangement --> ArrV[ArrangementView - 编曲区界面]
SV -- getMainEditor --> MEV[MainEditorView - 主编辑器界面]
SV -- getProject --> Prj[Project - 工程]
SV -- getPlayback --> PBCtrl[PlayBackControl - 回放控制]
ArrV -- getSelection --> ASSt[ArrangementSelectionState - 编曲区选择状态]
ArrV -- getNavigation --> CSys[CoordinateSystem - 坐标系]
MEV -- getNavigation --> CSys
MEV -- getSelection --> TISSt[TrackInnerSelectionState - 轨道内部选择状态]
MEV -- getCurrentGroup --> NGrpR[NoteGroupReference - 音符组引用]
MEV -- getCurrentTrack --> Trk[Track - 轨道]
Prj -- getTrack --> Trk
Prj -- getNoteGroup --> NGrp[NoteGroup - 音符组]
Prj -- getTimeAxis --> TAx[TimeAxis - 时间轴]
Trk -- getGroupReference --> NGrpR
NGrpR -- getTarget --> NGrp
NGrp -- getNote --> Nte[Note - 音符]
NGrp -- getParameter --> Auto[Automation - 自动化]
ASSt --> SSB{SelectionStateBase - 选择状态基础接口}
ASSt --> GrpS{GroupSelection - 音符组选择}
TISSt ---> GrpS
TISSt --> SSB
GrpS -- getSelectedGroups --> NGrp
TISSt -- getSelectedNotes --> Nte
`}/>

<details>
  <summary>点这里查看竖屏版</summary>
  <Mermaid chart={`
  graph TD
  SV[SV<br>宿主对象] -- getArrangement --> ArrV[ArrangementView<br>编曲区界面]
  SV -- getMainEditor --> MEV[MainEditorView<br>主编辑器界面]
  SV -- getProject --> Prj[Project<br>工程]
  SV -- getPlayback --> PBCtrl[PlayBackControl<br>回放控制]
  ArrV -- getSelection --> ASSt[ArrangementSelectionState<br>编曲区选择状态]
  ArrV -- getNavigation --> CSys[CoordinateSystem<br>坐标系]
  MEV -- getNavigation --> CSys
  MEV -- getSelection --> TISSt[TrackInnerSelectionState<br>轨道内部选择状态]
  MEV -- getCurrentGroup --> NGrpR[NoteGroupReference<br>音符组引用]
  MEV -- getCurrentTrack --> Trk[Track<br>轨道]
  Prj -- getTrack --> Trk
  Prj -- getNoteGroup --> NGrp[NoteGroup<br>音符组]
  Prj -- getTimeAxis --> TAx[TimeAxis<br>时间轴]
  Trk -- getGroupReference --> NGrpR
  NGrpR -- getTarget --> NGrp
  NGrp -- getNote --> Nte[Note<br>音符]
  NGrp -- getParameter --> Auto[Automation<br>自动化]
  ASSt --> SSB{SelectionStateBase<br>选择状态基础接口}
  ASSt --> GrpS{GroupSelection<br>音符组选择}
  TISSt ---> GrpS
  TISSt --> SSB
  GrpS -- getSelectedGroups --> NGrp
  TISSt -- getSelectedNotes --> Nte
  `}/>
</details>

> 使用`getParent()`以获取父级，为排版方便，此图未列出。

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

- `

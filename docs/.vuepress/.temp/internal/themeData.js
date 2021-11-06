export const themeData = {
  "sidebar": [
    {
      "title": "Part1. 写在前面",
      "collapsable": true,
      "sidebarDepth": 1,
      "children": [
        [
          "part1/1.1",
          "1.1 关于Synthesizer V"
        ],
        [
          "part1/1.2",
          "1.2 安装Synthesizer V"
        ]
      ]
    },
    {
      "title": "Part2. 菜单栏",
      "collapsable": true,
      "sidebarDepth": 1,
      "children": [
        [
          "part2/2.1",
          "2.1 概述"
        ],
        [
          "part2/2.2",
          "2.2 文件"
        ],
        [
          "part2/2.3",
          "2.3 编辑"
        ],
        [
          "part2/2.4",
          "2.4 视图"
        ],
        [
          "part2/2.5",
          "2.5 修改"
        ],
        [
          "part2/2.6",
          "2.6 项目"
        ],
        [
          "part2/2.7",
          "2.7 播放控制"
        ],
        [
          "part2/2.8",
          "2.8 脚本（不包括脚本编写）"
        ],
        [
          "dev/waiting",
          "2.9 其他"
        ]
      ]
    },
    {
      "title": "Part3. 侧边栏",
      "collapsable": true,
      "sidebarDepth": 1,
      "children": [
        [
          "dev/waiting",
          "3.1 概述"
        ],
        [
          "dev/waiting",
          "3.2 音符属性"
        ],
        [
          "dev/waiting",
          "3.3 歌声"
        ],
        [
          "dev/waiting",
          "3.4 音符组概述 音符组库"
        ],
        [
          "dev/waiting",
          "3.5 词典"
        ],
        [
          "dev/waiting",
          "3.6 渲染"
        ],
        [
          "dev/waiting",
          "3.7 授权与激活"
        ],
        [
          "dev/waiting",
          "3.8 设置"
        ]
      ]
    },
    {
      "title": "Part4. 编曲窗口",
      "collapsable": true,
      "sidebarDepth": 1,
      "children": [
        [
          "dev/waiting",
          "4.1 顶栏"
        ],
        [
          "dev/waiting",
          "4.2 音轨选项"
        ],
        [
          "dev/waiting",
          "4.3 走带"
        ]
      ]
    },
    {
      "title": "Part5. 钢琴卷帘窗",
      "collapsable": true,
      "sidebarDepth": 1,
      "children": [
        [
          "dev/waiting",
          "5.1 顶栏"
        ],
        [
          "dev/waiting",
          "5.2 走带"
        ]
      ]
    },
    {
      "title": "Part6. 参数",
      "collapsable": true,
      "sidebarDepth": 1,
      "children": [
        [
          "dev/waiting",
          "6.1 顶栏"
        ],
        [
          "dev/waiting",
          "6.2 音高偏差"
        ],
        [
          "dev/waiting",
          "6.3 颤音包络"
        ],
        [
          "dev/waiting",
          "6.4 响度"
        ],
        [
          "dev/waiting",
          "6.5 张力"
        ],
        [
          "dev/waiting",
          "6.6 气声"
        ],
        [
          "dev/waiting",
          "6.7 发声"
        ],
        [
          "dev/waiting",
          "6.8 性别"
        ]
      ]
    }
  ],
  "logo": "/sv.png",
  "smoothScroll": true,
  "nav": [
    {
      "text": "v3.0.1（前端v0.2.8.1 后端v1.8.1）",
      "link": "https://space.bilibili.com/273891297",
      "target": "_self",
      "rel": ""
    }
  ],
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "navbar": [],
  "darkMode": true,
  "repo": null,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "sidebarDepth": 2,
  "editLink": true,
  "editLinkText": "Edit this page",
  "lastUpdated": true,
  "lastUpdatedText": "Last Updated",
  "contributors": true,
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}

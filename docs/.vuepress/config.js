module.exports = {
  plugins: {
    'vuepress-plugin-export':{

    },
    '@vssue/vuepress-plugin-vssue': {
      platform: 'github',
      owner: 'linyuansup',
      repo: 'synthesizer-v-r2-docs',
      clientId: 'f6c236f24c8730914455',
      clientSecret: '03850632ccb7bafc14ec3a2f31a2aa8d3a90ebf1',
    }
  },
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'Synthesizer V R2 User Manual',
      description: '非官方的Synthesizer V用户手册'
    },
  },
  themeConfig: {
    //在这里编辑侧边栏内容
    sidebar: [
      {
        title: 'Part1. 写在前面',
        collapsable: true,
        sidebarDepth: 1,
        children: [
          ['1/1.1', '1.1 关于Synthesizer V'],
          ['1/1.2', '1.2 安装Synthesizer V']
        ]
      },
      {
        title: 'Part2. 菜单栏',
        collapsable: true,
        sidebarDepth: 1,
        children: [
          ['2/2.1', '2.1 概述'],
          ['2/2.2', '2.2 文件'],
          ['2/2.3', '2.3 编辑'],
          ['2/2.4', '2.4 视图'],
          ['2/2.5', '2.5 修改'],
          ['2/2.6', '2.6 项目'],
          ['dev/waiting', '2.7 播放控制'],
          ['dev/waiting', '2.8 脚本（不包括脚本编写）'],
          ['dev/waiting', '2.9 其他']
        ]
      },
      {
        title: 'Part3. 侧边栏',
        collapsable: true,
        sidebarDepth: 1,
        children: [
          ['dev/waiting', '3.1 概述'],
          ['dev/waiting', '3.2 音符属性'],
          ['dev/waiting', '3.3 歌声'],
          ['dev/waiting', '3.4 音符组概述 音符组库'],
          ['dev/waiting', '3.5 词典'],
          ['dev/waiting', '3.6 渲染'],
          ['dev/waiting', '3.7 授权与激活'],
          ['dev/waiting', '3.8 设置']
        ]
      },
      {
        title: 'Part4. 编曲窗口',
        collapsable: true,
        sidebarDepth: 1,
        children: [
          ['dev/waiting', '4.1 顶栏'],
          ['dev/waiting', '4.2 音轨选项'],
          ['dev/waiting', '4.3 走带']
        ]
      },
      {
        title: 'Part5. 钢琴卷帘窗',
        collapsable: true,
        sidebarDepth: 1,
        children: [
          ['dev/waiting', '5.1 顶栏'],
          ['dev/waiting', '5.2 走带']
        ]
      },
      {
        title: 'Part6. 参数',
        collapsable: true,
        sidebarDepth: 1,
        children: [
          ['dev/waiting', '6.1 顶栏'],
          ['dev/waiting', '6.2 音高偏差'],
          ['dev/waiting', '6.3 颤音包络'],
          ['dev/waiting', '6.4 响度'],
          ['dev/waiting', '6.5 张力'],
          ['dev/waiting', '6.6 气声'],
          ['dev/waiting', '6.7 发声'],
          ['dev/waiting', '6.8 性别']
        ]
      }
    ],
    //在上方编辑侧边栏内容
    logo: '/sv.png',
    smoothScroll: true,
    nav: [
      { text: 'bilibili', link: 'https://space.bilibili.com/273891297', target: '_self', rel: '' },
    ]
  },
  head: [
    ['link', { rel: 'icon', href: '/sv.ico' }]
  ],
  repo: 'https://github.com/linyuansup/synthesizer-v-r2-docs',
  title: 'Synthesizer V R2 User Manual',
  base: '/synthesizer-v-r2-docs/'
}
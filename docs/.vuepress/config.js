module.exports = {
  plugins: {
    '@vssue/vuepress-plugin-vssue': {
      platform: 'gitee',
      owner: 'linyuansup',
      repo: 'synthesizer-v-r2-docs',
      clientId: '0356cfbc2c82cfa05443f9309ba5eaa77573ca4679d628582808c3e8581289f4',
      clientSecret: '70905b0db0f34039b33d70acabdadd16234cd21c6fd7c20648edf2b74bceb55d',
    },
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
          ['dev/waiting', '2.3 编辑'],
          ['dev/waiting', '2.4 视图'],
          ['dev/waiting', '2.5 修改'],
          ['dev/waiting', '2.6 项目'],
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
          ['dev/waiting', '3.4 音符组库'],
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
          ['dev/waiting', '6.1 音高偏差'],
          ['dev/waiting', '6.2 颤音包络'],
          ['dev/waiting', '6.3 响度'],
          ['dev/waiting', '6.4 张力'],
          ['dev/waiting', '6.5 气声'],
          ['dev/waiting', '6.6 发声'],
          ['dev/waiting', '6.7 性别'],
        ]
      }
    ],
    //
    logo: '/sv.png',
    smoothScroll: true,
    nav: [
      { text: 'bilibili', link: 'https://space.bilibili.com/273891297', target:'_self', rel:'' },
    ]
  },
  head: [
    ['link', { rel: 'icon', href: '/sv.ico' }]
  ],
  dest: './dist',
  repo: 'https://github.com/linyuansup/synthesizer-v-r2-docs',
  title: 'Synthesizer V R2 User Manual',
}
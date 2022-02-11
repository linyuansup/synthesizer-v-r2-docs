
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const math = require('remark-math');
const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Synthesizer V Studio 用户手册',
  tagline: '新年快乐！脚本 API 文档即将完工！',
  url: 'https://synthesizer-v-r2-docs.vercel.app/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'linyuansup',
  projectName: 'synthesizer-v-r2-Docs',
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/linyuansup/synthesizer-v-r2-docs',
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/linyuansup/synthesizer-v-r2-docs',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css',
      integrity:
        'sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc',
      crossorigin: 'anonymous',
    },
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Synthesizer V Studio Docs',
        logo: {
          alt: 'Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            label: "快速开始",
            position: 'left',
            items: [
              {
                label: "Synthesizer V Studio 简介",
                to: 'docs/speed_start/about'
              },
              {
                label: "安装编辑器与声库",
                to: 'docs/speed_start/install',
              },
              {
                label: "声库详细介绍",
                to: 'docs/speed_start/voice_data/chinese',
              },
            ],
          },
          {
            type: 'doc',
            docId: 'main_docs/menu/about',
            position: 'left',
            label: '详细文档',
          },
          {
            type: 'doc',
            docId: 'api/about',
            position: 'left',
            label: '脚本 API 中文文档',
          },
          {
            label: '资源下载',
            position: 'right',
            items: [
              {
                label: '编辑器',
                to: 'docs/download/editor',
              },
              {
                label: '声库',
                to: 'docs/download/voice',
              },
              {
                label: 'Pro 脚本',
                to: 'docs/download/script',
              },
              {
                label: '其他资源',
                to: 'docs/download/other',
              },
            ],
          },
          {
            label: '制作人员',
            position: 'right',
            to: 'docs/other/author',
          },
          {
            href: 'https://message.bilibili.com/#/whisper/mid273891297',
            label: '意见 / 建议',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '友情链接',
            items: [
              {
                label: '不羁阁',
                href: 'https://bujigegroup.site/',
              },
              {
                label: 'CVSE+ 制作组',
                href: 'https://cvse.cc/',
              },
              {
                label: 'Dreamtonics - Synthesizer V Studio',
                href: 'https://dreamtonics.com/synthesizerv/',
              },
            ],
          },
          {
            title: '实用工具',
            items: [
              {
                label: 'vsqx 分享平台',
                href: 'https://www.vsqx.top/',
              },
              {
                label: 'bpm 测速工具',
                href: 'http://www.bq186.com/bpm/'
              },
              {
                label: '汉拼转换',
                href: 'https://www.qqxiuzi.cn/zh/pinyin/',
              },
              {
                label: 'Utaformatix - 工程格式转换',
                href: 'https://sdercolin.github.io/utaformatix3/',
              },
            ],
          },
          {
            title: '关于我 - 磷元素P',
            items: [
              {
                label: '哔哩哔哩',
                href: 'https://space.bilibili.com/273891297',
              },
              {
                label: '知乎',
                href: 'https://www.zhihu.com/people/li-tian-yang-7-66',
              },
              {
                label: 'GitHub（可提交 Pull Requests）',
                href: 'https://github.com/linyuansup/',
              },
            ],
          },
        ],
        copyright: `磷元素P & 不羁阁 - Synthesizer V Studio Docs 更新于 2022 / 02 / 11 适配到 Synthesizer V Studio 1.5.0`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['lua'],
      },
    }),
};

module.exports = config;

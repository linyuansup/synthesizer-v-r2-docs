// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Synthesizer V r2 docs',
  tagline: '非官方的 Synthesizer V Studio 用户手册',
  url: 'https://linyuansup.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'linyuansup', // Usually your GitHub org/user name.
  projectName: 'synthesizer-v-r2-docs', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/linyuansup/synthesizer-v-r2-docs',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'hhttps://github.com/linyuansup/synthesizer-v-r2-docs',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Synthesizer V r2 docs',
        logo: {
          alt: 'Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'get_start',
            position: 'left',
            label: '快速上手',
          },
          {
            type: 'doc',
            docId: 'get_start',
            position: 'left',
            label: '详细文档',
          },
          {
            type: 'doc',
            docId: 'get_start',
            position: 'left',
            label: '调校指南',
          },
          {
            type: 'doc',
            docId: 'get_start',
            position: 'left',
            label: '插件 API 中文文档',
          },
          { to: '/blog', label: '时间线', position: 'left' },
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'v3.0.1（前端v0.2.8.4 后端v2.0.2）',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '说明文档',
            items: [
              {
                label: '快速上手',
                to: '/docs/get_start',
              },
              {
                label: '详细文档',
                to: '/docs/get_start',
              },
              {
                label: '调校指南',
                to: '/docs/get_start',
              },
              {
                label: '插件 API 中文文档',
                to: '/docs/get_start',
              },
            ],
          },
          {
            title: '关于我 - 磷元素P',
            items: [
              {
                label: '哔哩哔哩',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: '知乎',
                href: 'https://discordapp.com/invite/docusaurus',
              },
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: '时间线',
                to: '/blog',
              },
              {
                label: 'GitHub（可提交 Pull Requests）',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `by 磷元素P 由 Docusaurus 强力驱动 部分图标来自于 Dreamtonics`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

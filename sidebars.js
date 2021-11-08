/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  speed_start_sidebar: [
    'speed_start/about',
    'speed_start/install',
    {
      type: 'category',
      label: '声库详细介绍',
      items: ['speed_start/voice_data/about', 'speed_start/voice_data/chinese', 'speed_start/voice_data/japanese', 'speed_start/voice_data/english'],
    },
  ],
  main_doc_sidebar: [
    {
      type: 'category',
      label: '菜单栏',
      items: ['main_docs/menu/about', 'main_docs/menu/file', 'main_docs/menu/edit', 'main_docs/menu/view', 'main_docs/menu/modify', 'main_docs/menu/project', 'main_docs/menu/transport', 'main_docs/menu/script', 'main_docs/menu/misc'],
    },
  ],
  api_sidebar: [
    {
      type: 'category',
      label: '概览',
      items: ['api/about'],
    },
  ],
  download_sidebar: [
    'download/editor',
    'download/voice',
    'download/script',
    'download/other',
  ],
};
module.exports = sidebars;

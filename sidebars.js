
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
    {
      type: 'category',
      label: '侧边栏',
      items: ['main_docs/sidebar/about', 'main_docs/sidebar/note_properties', 'main_docs/sidebar/voice', 'main_docs/sidebar/library', 'main_docs/sidebar/dictionary', 'main_docs/sidebar/render', 'main_docs/sidebar/licence_and_updates', 'main_docs/sidebar/settings'],
    },
    {
      type: 'category',
      label: '编曲窗口',
      items: ['main_docs/arrangement/top', 'main_docs/arrangement/track', 'main_docs/arrangement/play'],
    },
    {
      type: 'category',
      label: '钢琴卷帘窗',
      items: ['main_docs/piano_roll/top', 'main_docs/piano_roll/roll', 'main_docs/piano_roll/play'],
    },
    {
      type: 'category',
      label: '参数',
      items: ['main_docs/piano_roll/top', 'main_docs/piano_roll/roll', 'main_docs/piano_roll/play'],
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

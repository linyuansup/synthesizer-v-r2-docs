
// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  speed_start_sidebar: [
    'speed_start/about',
    'speed_start/install',
    {
      type: 'category',
      label: '声库详细介绍',
      items: ['speed_start/voice_data/chinese', 'speed_start/voice_data/japanese', 'speed_start/voice_data/english'],
    },
  ],
  main_doc_sidebar: [
    {
      type: 'category',
      label: '菜单栏',
      items: ['main_docs/menu/about', 'main_docs/menu/file', 'main_docs/menu/edit', 'main_docs/menu/view', 'main_docs/menu/modify', 'main_docs/menu/auto_process', 'main_docs/menu/project', 'main_docs/menu/transport', 'main_docs/menu/script', 'main_docs/menu/misc'],
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
      items: ['main_docs/parameters/top', 'main_docs/parameters/pitch_deviation', 'main_docs/parameters/vibrato_envelope', 'main_docs/parameters/loudness', 'main_docs/parameters/tension', 'main_docs/parameters/breathiness', 'main_docs/parameters/voicing', 'main_docs/parameters/gender', 'main_docs/parameters/bottom'],
    },
  ],
  api_sidebar: [
    'api/about',
    {
      type: 'category',
      label: '概览',
      collapsed: false,
      items: ['api/tutorials/a_minimal_example', 'api/tutorials/custom_dialogs', 'api/tutorials/localization', 'api/tutorials/memory_management'],
    },
    {
      type: 'category',
      label: '类',
      collapsed: false,
      items: ['api/classes/arrangement_selection_state', 'api/classes/arrangement_view', 'api/classes/automation', 'api/classes/coordinate_system', 'api/classes/group_selection', 'api/classes/main_editor_view', 'api/classes/nested_object', 'api/classes/note', 'api/classes/note_group', 'api/classes/note_group_reference', 'api/classes/playback_control', 'api/classes/project', 'api/classes/selection_state_base', 'api/classes/sv', 'api/classes/time_axis', 'api/classes/track', 'api/classes/track_inner_selection_state'],
    }
  ],
  download_sidebar: [
    'download/editor',
    'download/voice',
    'download/script',
    'download/other',
  ],
};
module.exports = sidebars;

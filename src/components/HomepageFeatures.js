import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: '实时预览',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        您可以实时预览您做出的改动而无需等待！在播放的同时进行更改，再也不用每次进行修改前都暂停播放。
      </>
    ),
  },
  {
    title: 'AI 加持',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Synthesizer V 是第一个使用基于人工智能和基于样本的混合技术的引擎的语音合成器，使您可以更加快速、高效地完成制作。
      </>
    ),
  },
  {
    title: '脚本支持',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        使用 Lua 或 JavaScript 创建自己的编辑工具，从而提高工作效率。通过自动化工作流，您可以专注于真正重要的事情。
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

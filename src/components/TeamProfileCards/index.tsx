import React, { ReactNode } from 'react';
import Link from '@docusaurus/Link';

function WebsiteLink({ to, children }: { to: string; children?: ReactNode }) {
    return (
        <Link to={to}>
        </Link>
    );
}

interface ProfileProps {
    className?: string;
    name: string;
    children: ReactNode;
    githubUrl?: string;
    pic: string;
    bilibiliurl?: string;
}

function TeamProfileCard({
    className,
    name,
    pic,
    children,
    githubUrl,
    bilibiliurl,
}: ProfileProps) {
    return (
        <div className={className}>
            <div className="card card--full-height">
                <div className="card__header">
                    <div className="avatar avatar--vertical">
                        <img
                            className="avatar__photo avatar__photo--xl"
                            src={pic}
                            alt={`${name}'s avatar`}
                        />
                        <br />
                        <div className="avatar__intro">
                            <h3 className="avatar__name">{name}</h3>
                        </div>
                    </div>
                </div>
                <div className="card__body">{children}</div>
                <div className="card__footer">
                    <div className="button-group button-group--block">
                        {githubUrl && (
                            <a className="button button--secondary" href={githubUrl}>
                                GitHub
                            </a>
                        )}
                        {bilibiliurl && (
                            <a className="button button--secondary" href={bilibiliurl}>
                                哔哩哔哩
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

function TeamProfileCardCol(props: ProfileProps) {
    return (
        <TeamProfileCard {...props} className="col col--6 margin-bottom--lg" />
    );
}

export function ActiveTeamRow(): JSX.Element {
    return (
        <div className="row">
            <TeamProfileCardCol
                pic="https://z3.ax1x.com/2021/11/19/IbzHiT.png"
                name="磷元素P"
                githubUrl="https://github.com/linyuansup"
                bilibiliurl="https://space.bilibili.com/273891297">
                VOCALOID / Synthesizer V 调校、混音，也是这个仓库的管理
            </TeamProfileCardCol>
            <TeamProfileCardCol
                name="LinR 隐卫"
                pic="https://z3.ax1x.com/2021/11/19/IbzbJU.png"
                githubUrl="https://github.com/zhdl889"
                bilibiliurl="https://space.bilibili.com/8109148">
                圈内的巨佬，曾拥有中 V / SV 全员声库并维持了几个月（其实磷元素是他的铁粉哦）
            </TeamProfileCardCol>
            <TeamProfileCardCol
                pic="https://z3.ax1x.com/2021/11/19/IbzIZq.png"
                name="Jobsecond"
                githubUrl="https://github.com/Jobsecond">
                向仓库提交了第一个 Pull Requests（可以去他的 Github 看看，有鸽子的 PV 集合）
            </TeamProfileCardCol>
            <TeamProfileCardCol
                name="ObjectNotFound"
                pic="https://z3.ax1x.com/2021/11/19/IqpG9O.jpg"
                githubUrl="https://github.com/objectnf">
                是一个翻译大佬，帮助翻译了部分 API 内容
            </TeamProfileCardCol>
            <TeamProfileCardCol
                pic="https://z3.ax1x.com/2021/11/19/IbzToV.png"
                name="时忽Entropy"
                bilibiliurl="https://space.bilibili.com/14721376">
                下载服务器提供者，而且还在 CVSE 剪周刊（磷元素也在其实（x）
            </TeamProfileCardCol>
            <TeamProfileCardCol
                name="尊贵的阿昆达"
                pic="https://z3.ax1x.com/2021/11/19/Ibzod0.png"
                bilibiliurl="https://space.bilibili.com/12131593">
                提供 Pro 版本内容编写支持。磷元素问自我介绍的时候表示懒得写（并不
            </TeamProfileCardCol>
            <TeamProfileCardCol
                name="幽灵子"
                pic="https://z3.ax1x.com/2021/11/21/IvtasP.png"
                bilibiliurl="https://space.bilibili.com/664313">
                V 家巨佬之一，可以去 B 站看看，调校超好听
            </TeamProfileCardCol>
            <TeamProfileCardCol
                name="电浆果茶"
                pic="https://z3.ax1x.com/2021/11/21/IvNvXq.png"
                bilibiliurl="https://space.bilibili.com/272412094">
                声库盘点类的内容做的很好，在 B 站有视频
            </TeamProfileCardCol>
            <TeamProfileCardCol
                name="君临德雷克"
                pic="https://z3.ax1x.com/2021/11/21/IvtUMt.png"
                bilibiliurl="https://space.bilibili.com/2963241">
                超级大佬，一个曾经的加古厨，最近在做 VOICEROID 的汉化和自制
            </TeamProfileCardCol>
            <TeamProfileCardCol
                name="青鸠刻刻"
                pic="https://z3.ax1x.com/2021/11/23/opHoOe.png"
                bilibiliurl="https://space.bilibili.com/14159172">
                以身试险（不是，自己有个企划但好像没开（x 催更！
            </TeamProfileCardCol>
            <TeamProfileCardCol
                name="Keelo79"
                pic="https://s4.ax1x.com/2022/01/30/HCI64x.png"
                bilibiliurl="https://space.bilibili.com/441691453"
                githubUrl="https://space.bilibili.com/14159172">
                帮忙翻译了脚本 API 文档
            </TeamProfileCardCol>
            <TeamProfileCardCol
                name="HeZeBang"
                pic="https://s4.ax1x.com/2022/01/30/HCIyU1.png"
                githubUrl="https://space.bilibili.com/14159172">
                帮忙翻译了脚本 API 文档
            </TeamProfileCardCol>
        </div>
    );
}
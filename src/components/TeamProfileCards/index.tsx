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
    twitterUrl?: string;
}

function TeamProfileCard({
    className,
    name,
    children,
    githubUrl,
    twitterUrl,
}: ProfileProps) {
    return (
        <div className={className}>
            <div className="card card--full-height">
                <div className="card__header">
                    <div className="avatar avatar--vertical">
                        <img
                            className="avatar__photo avatar__photo--xl"
                            src={`${githubUrl}.png`}
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
                        {twitterUrl && (
                            <a className="button button--secondary" href={twitterUrl}>
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
                name="磷元素P"
                githubUrl="https://github.com/linyuansup"
                twitterUrl="https://space.bilibili.com/273891297">
                VOCALOID / Synthesizer V 调校、混音，也是这个仓库的管理。最近在进修 PV。
            </TeamProfileCardCol>
            <TeamProfileCardCol
                name="LinR 隐卫"
                githubUrl="https://github.com/zhdl889"
                twitterUrl="https://space.bilibili.com/8109148">
                圈内的巨佬，曾拥有中 V / SV 全员声库并维持了几个月。（其实磷元素是他的铁粉哦）
            </TeamProfileCardCol>
            <TeamProfileCardCol
                name="Jobsecond"
                githubUrl="https://github.com/Jobsecond">
                向仓库提交了第一个 Pull Requests。（可以去他的 Github 看看，有鸽子的 PV 集合）
            </TeamProfileCardCol>
        </div>
    );
}
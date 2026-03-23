"use client";

import { useState } from "react";
import Link from "next/link";
import { COMMITTEES, LOGOS, COMMITTEE_CARD_DATA } from "@/lib/committees";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function TopicsContent() {
    const committeeIds = COMMITTEE_CARD_DATA.map((c) => c.id);
    const [activeId, setActiveId] = useState(committeeIds[0]);
    const activeCommittee = COMMITTEES[activeId];
    const { t } = useLanguage();

    return (
        <section className="section">
            <div className="container">
                <div className="page-title-wrap" data-animate>
                    <h1 className="section-title">{t('topics.title')}</h1>
                    <p className="section-desc">{t('topics.desc')}</p>
                </div>

                <div className="committee-filters" data-animate>
                    <div className="filter-row">
                        {committeeIds.map((id) => {
                            const translatedName = t(`committeeData.${id}.name`);
                            return (
                                <button
                                    key={id}
                                    type="button"
                                    className={`filter-btn${activeId === id ? " active" : ""}`}
                                    onClick={() => setActiveId(id)}
                                >
                                    {translatedName}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {activeCommittee && (
                    <div data-animate key={activeId}>
                        <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
                            {LOGOS[activeId] && (
                                <img
                                    src={LOGOS[activeId]}
                                    alt=""
                                    style={{ height: "64px", width: "auto", objectFit: "contain" }}
                                />
                            )}
                            <div>
                                <h2 className="section-title" style={{ marginBottom: "0.25rem", fontSize: "1.5rem" }}>
                                    {t(`committeeData.${activeId}.fullName`)}
                                </h2>
                                <span className="difficulty-tag" style={{ fontSize: "0.75rem" }}>
                                    {activeCommittee.type}
                                </span>
                            </div>
                        </div>
                        <div className="committee-meta">
                            <span>{t('committee.grades')} {activeCommittee.grades}</span>
                            <span>{t('committee.delegates')}: {activeCommittee.delegates}</span>
                            <span>{activeCommittee.metaLabel}: {activeCommittee.chairs}</span>
                        </div>
                        <ul className="committee-topics">
                            {activeCommittee.topics.map((topicExt, i) => {
                                const topicKey = `committeeData.${activeId}.topic${i + 1}`;
                                const translatedTopicText = t(topicKey);
                                return (
                                    <li key={i}>
                                        <span className="topic-emoji">{topicExt.emoji}</span>
                                        {translatedTopicText !== topicKey ? translatedTopicText : topicExt.text}
                                        <span className="difficulty-tag">{topicExt.diff}</span>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                )}

                <div style={{ textAlign: "center", padding: "2rem 0" }}>
                    <Link href="/committees" className="committee-back">
                        {t('topics.back')}
                    </Link>
                </div>
            </div>
        </section>
    );
}

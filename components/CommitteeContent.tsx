"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { COMMITTEES, LOGOS, LOGO_IS_FULL } from "@/lib/committees";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function CommitteeContent() {
    const searchParams = useSearchParams();
    const cId = searchParams.get("c") || "";
    const committee = COMMITTEES[cId];
    const { t } = useLanguage();

    if (!committee) {
        return (
            <section className="section">
                <div className="container">
                    <p className="committee-back-wrap">
                        <Link href="/committees" className="committee-back">
                            {t('committee.back')}
                        </Link>
                    </p>
                    <h1 className="section-title">{t('committee.notFoundTitle')}</h1>
                    <p>
                        {t('committee.notFoundDesc')} &quot;{cId}&quot;. {" "}
                        <Link href="/committees" style={{ color: "var(--accent)" }}>
                            {t('committee.notFoundLink')}
                        </Link>
                        .
                    </p>
                </div>
            </section>
        );
    }

    const emblemSrc = LOGOS[cId];
    const isFull = LOGO_IS_FULL[cId];

    return (
        <section className="section">
            <div className="container">
                <p className="committee-back-wrap">
                    <Link href="/committees" className="committee-back">
                        {t('committee.back')}
                    </Link>
                </p>

                <div className={`committee-card committee-card-single committee-card-${cId}`}>
                    {emblemSrc && (
                        <div className="committee-card-emblem">
                            <img
                                src={emblemSrc}
                                alt=""
                                className={`committee-card-emblem-img${isFull ? " committee-card-emblem-full" : ""}`}
                            />
                        </div>
                    )}
                    <div className="committee-card-body">
                        <div className="committee-header">
                            <div className="committee-name-wrap">
                                <h1 className="committee-single-title">{committee.name}</h1>
                                <span className="committee-type">{committee.type}</span>
                            </div>
                        </div>
                        <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", marginBottom: "1rem" }}>
                            {committee.fullName}
                        </p>
                        <div className="committee-meta">
                            <span>{committee.metaLabel}: {committee.chairs}</span>
                            <span>{t('committee.delegates')}: {committee.delegates}</span>
                            <span>{t('committee.grades')} {committee.grades}</span>
                        </div>

                        <ul className="committee-topics">
                            {committee.topics.map((top, i) => (
                                <li key={i}>
                                    <span className="topic-emoji">{top.emoji}</span>
                                    {top.text}
                                    <span className="difficulty-tag">{top.diff}</span>
                                </li>
                            ))}
                        </ul>
                        {committee.topicNote && (
                            <p className="committee-topic-note">{committee.topicNote}</p>
                        )}

                        <details className="committee-allocations">
                            <summary>{t('committee.allocationsTitle')}</summary>
                            {committee.allocations.length > 0 ? (
                                <ul className="allocation-list">
                                    {committee.allocations.map((a, i) => (
                                        <li key={i}>{a}</li>
                                    ))}
                                </ul>
                            ) : (
                                <p style={{ marginTop: "0.5rem", fontSize: "0.9rem", color: "var(--text-muted)" }}>
                                    {t('committee.allocationsTba')}
                                </p>
                            )}
                        </details>
                    </div>
                </div>
            </div>
        </section>
    );
}

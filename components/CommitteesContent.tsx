"use client";

import { useState } from "react";
import Link from "next/link";
import {
    COMMITTEES,
    LOGOS,
    LOGO_IS_FULL,
    COMMITTEE_CARD_DATA,
} from "@/lib/committees";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function CommitteesContent() {
    const [gradeFilter, setGradeFilter] = useState("all");
    const [typeFilter, setTypeFilter] = useState("all");
    const { t } = useLanguage();

    const filtered = COMMITTEE_CARD_DATA.filter((c) => {
        if (gradeFilter !== "all") {
            const grades = c.dataGrades.split("-").map(Number);
            const min = Math.min(...grades);
            const max = Math.max(...grades);
            const g = parseInt(gradeFilter, 10);
            if (g < min || g > max) return false;
        }
        if (typeFilter !== "all" && c.dataType !== typeFilter) return false;
        return true;
    });

    return (
        <>
            {/* Page hero banner */}
            <section className="committees-hero">
                <div className="container">
                    <p className="hero-badge" data-animate="scale">{t('committees.heroBadge')}</p>
                    <h1 className="committees-hero-title" data-animate>{t('committees.heroTitle')}</h1>
                    <p className="committees-hero-desc" data-animate>
                        {t('committees.heroDesc')}
                    </p>
                </div>
            </section>

            <div className="container">
                {/* Filters */}
                <div className="committee-filters" data-animate>
                    <div className="filter-row">
                        <span className="filter-label">{t('committees.filterGrade')}</span>
                        {["all", "7", "8", "9", "10", "11", "12"].map((g) => (
                            <button
                                key={g}
                                type="button"
                                className={`filter-btn${gradeFilter === g ? " active" : ""}`}
                                onClick={() => setGradeFilter(g)}
                            >
                                {g === "all" ? t('committees.filterAll') : g}
                            </button>
                        ))}
                    </div>
                    <div className="filter-row">
                        <span className="filter-label">{t('committees.filterType')}</span>
                        {["all", "traditional", "specialized", "fantasy"].map((typeVal) => {
                            let label = "";
                            if (typeVal === "all") label = t('committees.filterAll');
                            else if (typeVal === "traditional") label = t('committees.typeTraditional');
                            else if (typeVal === "specialized") label = t('committees.typeSpecialized');
                            else if (typeVal === "fantasy") label = t('committees.typeFantasy');

                            return (
                                <button
                                    key={typeVal}
                                    type="button"
                                    className={`filter-btn${typeFilter === typeVal ? " active" : ""}`}
                                    onClick={() => setTypeFilter(typeVal)}
                                >
                                    {label}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Results count */}
                <p className="committees-count" data-animate>
                    Showing {filtered.length} of {COMMITTEE_CARD_DATA.length} committees
                </p>

                {/* Committee cards */}
                <div className="committee-grid" data-animate-stagger="">
                    {filtered.map((entry) => {
                        const c = COMMITTEES[entry.id];
                        if (!c) return null;
                        const emblemSrc = LOGOS[entry.id];
                        const isFull = LOGO_IS_FULL[entry.id];
                        return (
                            <Link
                                key={entry.id}
                                href={`/committee?c=${entry.id}`}
                                style={{ textDecoration: "none", color: "inherit" }}
                            >
                                <div
                                    id={entry.id}
                                    className={`committee-card committee-card-${entry.id}`}
                                    data-animate
                                >
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
                                                <h3>{c.name}</h3>
                                                <span className="committee-type">{c.type}</span>
                                            </div>
                                            <div className="committee-tags">
                                                <span className="tag">{c.grades}</span>
                                                <span className="tag">
                                                    {c.metaLabel}: {c.chairs}
                                                </span>
                                                <span className="tag">Delegates: {c.delegates}</span>
                                            </div>
                                        </div>
                                        <p className="committee-fullname">{c.fullName}</p>
                                        <ul className="committee-topics">
                                            {c.topics.map((top, i) => (
                                                <li key={i}>
                                                    <span className="topic-emoji">{top.emoji}</span>
                                                    {top.text}
                                                    <span className="difficulty-tag">{top.diff}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>

                {filtered.length === 0 && (
                    <div className="committees-empty" data-animate>
                        <p>No committees match your filters.</p>
                        <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={() => { setGradeFilter("all"); setTypeFilter("all"); }}
                        >
                            Clear filters
                        </button>
                    </div>
                )}

                <div className="back-to-top-wrap">
                    <a href="#" className="back-to-top">
                        ↑ Back to top
                    </a>
                </div>
            </div>
        </>
    );
}

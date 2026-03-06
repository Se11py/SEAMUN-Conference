"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { COMMITTEES, LOGOS, LOGO_IS_FULL } from "@/lib/committees";

function CommitteeContent() {
    const searchParams = useSearchParams();
    const cId = searchParams.get("c") || "";
    const committee = COMMITTEES[cId];

    if (!committee) {
        return (
            <section className="section">
                <div className="container">
                    <p className="committee-back-wrap">
                        <Link href="/committees" className="committee-back">
                            ← All committees
                        </Link>
                    </p>
                    <h1 className="section-title">Committee not found</h1>
                    <p>
                        The committee &quot;{cId}&quot; doesn&apos;t exist. Please choose
                        from the{" "}
                        <Link href="/committees" style={{ color: "var(--accent)" }}>
                            committees list
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
                        ← All committees
                    </Link>
                </p>

                <div
                    className={`committee-card committee-card-single committee-card-${cId}`}
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
                                <h1 className="committee-single-title">{committee.name}</h1>
                                <span className="committee-type">{committee.type}</span>
                            </div>
                        </div>
                        <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", marginBottom: "1rem" }}>
                            {committee.fullName}
                        </p>
                        <div className="committee-meta">
                            <span>{committee.metaLabel}: {committee.chairs}</span>
                            <span>Delegates: {committee.delegates}</span>
                            <span>Grades {committee.grades}</span>
                        </div>

                        <ul className="committee-topics">
                            {committee.topics.map((t, i) => (
                                <li key={i}>
                                    <span className="topic-emoji">{t.emoji}</span>
                                    {t.text}
                                    <span className="difficulty-tag">{t.diff}</span>
                                </li>
                            ))}
                        </ul>
                        {committee.topicNote && (
                            <p className="committee-topic-note">{committee.topicNote}</p>
                        )}

                        <details className="committee-allocations">
                            <summary>Show allocations</summary>
                            {committee.allocations.length > 0 ? (
                                <ul className="allocation-list">
                                    {committee.allocations.map((a, i) => (
                                        <li key={i}>{a}</li>
                                    ))}
                                </ul>
                            ) : (
                                <p style={{ marginTop: "0.5rem", fontSize: "0.9rem", color: "var(--text-muted)" }}>
                                    Allocations to be announced.
                                </p>
                            )}
                        </details>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default function CommitteePage() {
    return (
        <>
            <Header />
            <main>
                <Suspense
                    fallback={
                        <section className="section">
                            <div className="container">
                                <p>Loading committee…</p>
                            </div>
                        </section>
                    }
                >
                    <CommitteeContent />
                </Suspense>
            </main>
            <Footer />
        </>
    );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollAnimator from "@/components/ScrollAnimator";
import { COMMITTEES, LOGOS, COMMITTEE_CARD_DATA } from "@/lib/committees";

export default function TopicsPage() {
  const committeeIds = COMMITTEE_CARD_DATA.map((c) => c.id);
  const [activeId, setActiveId] = useState(committeeIds[0]);
  const activeCommittee = COMMITTEES[activeId];

  return (
    <>
      <ScrollAnimator />
      <Header />
      <main>
        <section className="section">
          <div className="container">
            <div className="page-title-wrap" data-animate>
              <h1 className="section-title">Agenda</h1>
              <p className="section-desc">Select a committee to view its topics.</p>
            </div>

            <div className="committee-filters" data-animate>
              <div className="filter-row">
                {committeeIds.map((id) => {
                  const c = COMMITTEES[id];
                  return (
                    <button
                      key={id}
                      type="button"
                      className={`filter-btn${activeId === id ? " active" : ""}`}
                      onClick={() => setActiveId(id)}
                    >
                      {c.name}
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
                      {activeCommittee.name}
                    </h2>
                    <span className="difficulty-tag" style={{ fontSize: "0.75rem" }}>
                      {activeCommittee.type}
                    </span>
                  </div>
                </div>
                <div className="committee-meta">
                  <span>Grades {activeCommittee.grades}</span>
                  <span>Delegates: {activeCommittee.delegates}</span>
                  <span>{activeCommittee.metaLabel}: {activeCommittee.chairs}</span>
                </div>
                <ul className="committee-topics">
                  {activeCommittee.topics.map((t, i) => (
                    <li key={i}>
                      <span className="topic-emoji">{t.emoji}</span>
                      {t.text}
                      <span className="difficulty-tag">{t.diff}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div style={{ textAlign: "center", padding: "2rem 0" }}>
              <Link href="/committees" className="committee-back">
                ← View all committees
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

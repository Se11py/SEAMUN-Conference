"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import LeadershipCarousel from "@/components/LeadershipCarousel";

export default function HomeContent() {
  const { t } = useLanguage();

  return (
    <main>
      <section className="hero">
        <div className="container hero-inner">
          <p className="hero-badge" data-animate="scale">{t('home.heroBadge')}</p>
          <h1 className="hero-title" data-animate>{t('home.heroTitle')}</h1>
          <p className="hero-tagline" data-animate>{t('home.heroTagline')}</p>
          <p className="hero-audience" data-animate>
            {t('home.heroAudience')}
          </p>
          <p className="hero-lead" data-animate>
            {t('home.heroLead')}
          </p>
          <div className="hero-actions" data-animate>
            <Link className="btn btn-primary" href="/committees">
              {t('home.exploreCommittees')}
            </Link>
            <a
              className="btn btn-secondary"
              href="https://forms.gle/iy57uXzA89d3WVYy8"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('home.showInterest')}
            </a>
          </div>
        </div>
        <div className="hero-fade" />
      </section>

      <section className="section" id="about">
        <div className="container">
          <h2 className="section-title" data-animate="left">{t('home.aboutTitle')}</h2>
          <div className="about-grid" data-animate-stagger="">
            <div className="about-card" data-animate>
              <h3>{t('home.about1Title')}</h3>
              <p>{t('home.about1Desc')}</p>
            </div>
            <div className="about-card" data-animate>
              <h3>{t('home.about2Title')}</h3>
              <p>{t('home.about2Desc')}</p>
            </div>
            <div className="about-card" data-animate>
              <h3>{t('home.about3Title')}</h3>
              <p>{t('home.about3Desc')}</p>
            </div>
            <div className="about-card" data-animate>
              <h3>{t('home.about4Title')}</h3>
              <p>{t('home.about4Desc')}</p>
            </div>
            <div className="about-card" data-animate>
              <h3>{t('home.about5Title')}</h3>
              <p>{t('home.about5Desc')}</p>
            </div>
          </div>
          <div className="meta-row" data-animate>
            <span><strong>Audience:</strong> {t('home.metaAudience').replace('Audience: ', '')}</span>
            <span><strong>Location:</strong> {t('home.metaLocation').replace('Location: ', '')}</span>
            <span><strong>Fees:</strong> {t('home.metaFees').replace('Fees: ', '')}</span>
            <span><strong>Capacity:</strong> {t('home.metaCapacity').replace('Capacity: ', '')}</span>
          </div>
        </div>
        <div className="section-fade section-fade-to-alt" />
      </section>

      <section className="section section-alt" id="committees">
        <div className="container">
          <h2 className="section-title" data-animate="right">Committees</h2>
          <p className="section-desc" data-animate>
            Twelve committees. Click a card for topics, allocations, and details.
          </p>
          <div className="home-committee-cards" data-animate-stagger="">
            {[
              { id: "ecosoc", logo: "/assets/committee-pics/ECOSOC.png", full: true, name: "ECOSOC", info: "Economic and Social Council" },
              { id: "press", logo: "/assets/committee-pics/PRESS%20CORP.png", full: false, name: "Press Corps", info: "Media" },
              { id: "unhrc", logo: "/assets/committee-pics/UNHRC.png", full: false, name: "UNHRC", info: "United Nations Human Rights Council" },
              { id: "unodc", logo: "/assets/committee-pics/UNODC.png", full: false, name: "UNODC", info: "United Nations Office on Drugs and Crime" },
              { id: "unsc", logo: "/assets/committee-pics/UNSC.png", full: false, name: "UNSC", info: "United Nations Security Council (CRISIS)" },
              { id: "unwomen", logo: "/assets/committee-pics/UN%20WOMEN.png", full: false, name: "UN Women", info: "United Nations Entity for Gender Equality and the Empowerment of Women" },
              { id: "disec", logo: "/assets/committee-pics/DISEC.png", full: false, name: "DISEC", info: "Disarmament and International Security Committee" },
              { id: "fwc", logo: "/assets/committee-pics/FWC.png", full: true, name: "FWC", info: "Fantasy World Committee (CRISIS)" },
              { id: "interpol", logo: "/assets/committee-pics/INTERPOL.png", full: false, name: "Interpol", info: "International Criminal Police Organization" },
              { id: "who", logo: "/assets/committee-pics/WHO.png", full: false, name: "WHO", info: "World Health Organization" },
              { id: "f1", logo: "/assets/committee-pics/F1.png", full: false, name: "F1", info: "Formula One Committee (CRISIS)" },
              { id: "hsc", logo: "/assets/committee-pics/HSC.png", full: false, name: "HSC", info: "Historical Security Council (CRISIS)" },
            ].map((c) => (
              <Link
                key={c.id}
                href={`/committee?c=${c.id}`}
                className={`home-committee-card home-committee-${c.id}`}
                data-animate
              >
                <div className="home-committee-emblem">
                  <img
                    src={c.logo}
                    alt=""
                    className={`home-committee-logo${c.full ? " home-committee-logo-full" : ""}`}
                  />
                </div>
                <div className="home-committee-label">
                  <span className="home-committee-name">{c.name}</span>
                  <span className="home-committee-info">{c.info}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="section-fade section-fade-to-warm" />
      </section>

      <section className="section section-warm" id="schedule">
        <div className="container">
          <h2 className="section-title" data-animate="left">Schedule</h2>
          <p className="section-desc" data-animate>
            Two-day program with opening and closing ceremonies.{" "}
            <a href="/assets/SEAMUN-I-2027.ics" className="schedule-ics">
              Add to calendar
            </a>
          </p>
          <div className="schedule-grid">
            <div className="schedule-day" data-animate>
              <h3 className="schedule-day-title">
                Day 1 — Saturday, January 16, 2027
              </h3>
              <ul className="schedule-list">
                <li><span className="schedule-time">7:30</span> Arrival</li>
                <li><span className="schedule-time">8:00</span> Registration</li>
                <li><span className="schedule-time">8:30</span> Opening Ceremony</li>
                <li><span className="schedule-time">9:30</span> Break &amp; Photo Ops</li>
                <li><span className="schedule-time">10:00</span> Icebreakers</li>
                <li><span className="schedule-time">10:30</span> Committee Session 1a</li>
                <li><span className="schedule-time">11:05</span> In-Committee Break (Optional)</li>
                <li><span className="schedule-time">11:15</span> Committee Session 1b</li>
                <li><span className="schedule-time">12:00</span> Lunch</li>
                <li><span className="schedule-time">13:00</span> Committee Session 2a</li>
                <li><span className="schedule-time">13:35</span> In-Committee Break (Optional)</li>
                <li><span className="schedule-time">13:45</span> Committee Session 2b</li>
                <li><span className="schedule-time">14:30</span> Break &amp; Photo Ops</li>
                <li><span className="schedule-time">15:00</span> Committee Session 3a</li>
                <li><span className="schedule-time">15:35</span> In-Committee Break (Optional)</li>
                <li><span className="schedule-time">15:45</span> Committee Session 3b</li>
                <li><span className="schedule-time">16:30</span> Feedback Sessions &amp; Departure</li>
                <li><span className="schedule-time">17:00</span> Departure</li>
              </ul>
            </div>
            <div className="schedule-day" data-animate>
              <h3 className="schedule-day-title">
                Day 2 — Sunday, January 17, 2027
              </h3>
              <ul className="schedule-list">
                <li><span className="schedule-time">8:00</span> Arrival</li>
                <li><span className="schedule-time">9:00</span> Registration &amp; Photo Ops</li>
                <li><span className="schedule-time">9:30</span> Committee Session 1a</li>
                <li><span className="schedule-time">10:30</span> In-Committee Break (Optional)</li>
                <li><span className="schedule-time">11:00</span> Committee Session 1b</li>
                <li><span className="schedule-time">12:00</span> Lunch</li>
                <li><span className="schedule-time">13:00</span> Committee Session 2a</li>
                <li><span className="schedule-time">13:35</span> In-Committee Break (Optional)</li>
                <li><span className="schedule-time">13:45</span> Committee Session 2b</li>
                <li><span className="schedule-time">14:30</span> Break</li>
                <li><span className="schedule-time">15:00</span> Committee Session 3</li>
                <li><span className="schedule-time">16:00</span> Feedback &amp; Break</li>
                <li><span className="schedule-time">16:30</span> Closing Ceremony</li>
                <li><span className="schedule-time">17:30</span> Photo Ops &amp; Departure</li>
              </ul>
            </div>
          </div>
        </div>
      </section >

      <section className="section section-warm" id="leadership">
        <div className="container">
          <h2 className="section-title" data-animate="right">
            <span className="help-wrap">
              Secretariat{" "}
              <button
                type="button"
                className="help-icon"
                aria-label="What is the Secretariat?"
                data-help="secretariat"
              >
                ?
              </button>
            </span>{" "}
            &amp; Leadership
          </h2>
          <LeadershipCarousel />
        </div>
      </section>

      <section className="section section-alt" id="contact">
        <div className="container">
          <h2 className="section-title" data-animate>{t('home.contactTitle')}</h2>
          <p className="contact-lead" data-animate>
            {t('home.contactLead')}
          </p>
          <a className="contact-email" href="mailto:information@seamun.com" data-animate>
            information@seamun.com
          </a>
          <button
            type="button"
            className="btn btn-secondary contact-form-btn"
            data-open="contact-modal"
            data-animate
          >
            {t('home.sendMessage')}
          </button>
          <p className="contact-note" data-animate>
            {t('home.contactNote')}
          </p>
        </div>
      </section>
    </main>
  );
}

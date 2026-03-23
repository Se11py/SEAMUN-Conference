"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function ContactContent() {
    const { t } = useLanguage();

    return (
        <section className="section contact-section">
            <div className="container">
                <div className="contact-split-layout">
                    {/* Left Side: Editorial & Conversational */}
                    <div className="contact-editorial" data-animate="left">
                        <h1 className="contact-heading">
                            {t('contact.heading')}
                            <svg
                                className="organic-accent"
                                width="180"
                                height="24"
                                viewBox="0 0 180 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M3 18C44.5 5 118 2.5 177 15"
                                    stroke="var(--accent)"
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </h1>
                        <p className="contact-subhead">
                            {t('contact.subhead')}
                        </p>
                        <div className="contact-direct">
                            <span className="contact-direct-label">{t('contact.direct')}</span>
                            <a className="contact-email-link" href="mailto:information@seamun.com">
                                information@seamun.com
                            </a>
                        </div>
                    </div>

                    {/* Right Side: Staggered Cards */}
                    <div className="contact-staggered-cards" data-animate-stagger>
                        {/* Card 1 */}
                        <div className="contact-card" data-animate>
                            <div className="custom-editorial-icon">
                                <svg viewBox="0 0 100 100" className="icon-vector" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M80.2 30.5C87.4 42.1 89.3 58.7 82.2 70.8C75.1 82.8 59.1 90.3 43.6 88.5C28.1 86.6 13.1 75.3 6.9 60.1C0.7 44.9 3.2 25.8 14.5 13.5C25.8 1.2 46.1 -4.4 61.6 4.1C77.1 12.5 73.1 18.9 80.2 30.5Z" fill="var(--bg-warm)" className="icon-blob" />
                                    <path d="M26 80C26 62 38 52 50 52C62 52 74 62 74 80" stroke="var(--navy)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M50 44C41 44 35 37 35 28C35 19 41 12 50 12C59 12 65 19 65 28C65 37 59 44 50 44Z" stroke="var(--navy)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M78 30Q86 26 92 18" stroke="var(--accent)" strokeWidth="4" strokeLinecap="round" className="hand-drawn-accent" />
                                    <path d="M82 40Q90 38 98 36" stroke="var(--accent)" strokeWidth="4" strokeLinecap="round" className="hand-drawn-accent" />
                                    <path d="M73 18Q80 10 88 6" stroke="var(--accent)" strokeWidth="4" strokeLinecap="round" className="hand-drawn-accent" />
                                </svg>
                            </div>
                            <h3 className="contact-card-title">{t('contact.card1Title')}</h3>
                            <p className="contact-card-desc">
                                {t('contact.card1Desc')}
                            </p>
                            <a
                                href="https://forms.gle/iy57uXzA89d3WVYy8"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                            >
                                {t('contact.card1Btn')}
                            </a>
                        </div>

                        {/* Card 2 (Offset) */}
                        <div className="contact-card contact-card-offset" data-animate>
                            <div className="custom-editorial-icon">
                                <svg viewBox="0 0 100 100" className="icon-vector" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M79.5 25.4C87.3 35.8 91.5 50.4 86.8 62.1C82.1 73.8 68.6 82.6 54.1 84.9C39.6 87.2 24.1 83 14.6 72.1C5.1 61.2 1.6 43.6 7.4 29.4C13.2 15.2 28.3 4.4 43.8 1.9C59.3 -0.6 71.7 15 79.5 25.4Z" fill="var(--bg-alt)" className="icon-blob" />
                                    <path d="M42 64C30 64 20 54 20 42C20 30 30 20 42 20C54 20 64 30 64 42" stroke="var(--navy)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M58 36C70 36 80 46 80 58C80 70 70 80 58 80C46 80 36 70 36 58" stroke="var(--accent)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M22 18L26 4M26 4L30 18M26 4V24" stroke="var(--primary)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="hand-drawn-accent" />
                                </svg>
                            </div>
                            <h3 className="contact-card-title">{t('contact.card2Title')}</h3>
                            <p className="contact-card-desc">
                                {t('contact.card2Desc')}
                            </p>
                            <Link href="/sponsors" className="btn btn-secondary">
                                {t('contact.card2Btn')}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

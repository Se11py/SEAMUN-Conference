"use client";

import MailtoForm from "@/components/MailtoForm";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function RegisterContent() {
    const { t } = useLanguage();

    return (
        <>
            {/* Page Hero — Similar to /committees */}
            <section className="committees-hero">
                <div className="container">
                    <p className="hero-badge" data-animate="scale">{t('register.title')}</p>
                    <h1 className="committees-hero-title" data-animate>
                        {t('register.heroTitle')}
                    </h1>
                    <p className="committees-hero-desc" data-animate>
                        {t('register.heroDesc')}
                    </p>
                </div>
            </section>

            <div className="container" style={{ paddingTop: '4rem', paddingBottom: '5rem' }}>
                <div className="committee-grid" data-animate-stagger>
                    {/* Delegate Registration — Card Style similar to /committees */}
                    <div className="committee-card" data-animate style={{ minHeight: 'auto' }}>
                        <div className="committee-card-emblem" style={{ background: 'var(--navy)', width: '240px' }}>
                            <span style={{ fontSize: '4rem' }}>🌍</span>
                        </div>
                        <div className="committee-card-body" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <div className="committee-header">
                                <div className="committee-name-wrap">
                                    <h3>{t('register.delegateTitle')}</h3>
                                </div>
                            </div>
                            <p className="section-desc" style={{ marginBottom: '1.5rem' }}>
                                {t('register.delegateDesc')}
                            </p>
                            <a
                                href="https://forms.gle/iy57uXzA89d3WVYy8"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-secondary"
                                style={{ width: 'fit-content' }}
                            >
                                {t('register.btn')}
                            </a>
                        </div>
                    </div>

                    {/* Chair Registration — Card Style similar to /committees */}
                    <div className="committee-card" data-animate style={{ minHeight: 'auto' }}>
                        <div className="committee-card-emblem" style={{ background: 'var(--accent)', width: '240px' }}>
                            <span style={{ fontSize: '4rem' }}>⚖️</span>
                        </div>
                        <div className="committee-card-body" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <div className="committee-header">
                                <div className="committee-name-wrap">
                                    <h3>{t('register.chairTitle')}</h3>
                                </div>
                            </div>
                            <p className="section-desc" style={{ marginBottom: '1.5rem' }}>
                                {t('register.chairDesc')}
                            </p>
                            <a
                                href="https://forms.gle/AbjX4zXWQbCXTgQq6"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                                style={{ width: 'fit-content' }}
                            >
                                {t('register.btnChair')}
                            </a>
                        </div>
                    </div>
                </div>

                {/* Direct Contact — Reorganized for focus */}
                <div style={{ marginTop: '8rem', textAlign: 'center' }}>
                    <h2 className="section-title" data-animate>{t('register.helpTitle')}</h2>
                    <p className="section-desc" data-animate style={{ maxWidth: '600px', margin: '0 auto 3.5rem' }}>
                        {t('register.helpDesc')}
                    </p>
                    
                    <div data-animate="scale" className="about-card" style={{ 
                        maxWidth: '560px', 
                        margin: '0 auto', 
                        textAlign: 'left',
                        padding: '3rem',
                        borderTop: '4px solid var(--accent)'
                    }}>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>{t('register.desc2')}</h3>
                        <MailtoForm
                            mailto="information@seamun.com"
                            subject="SEAMUN I 2027 – Registration interest"
                            fields={["name", "email", "role", "school", "message"]}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

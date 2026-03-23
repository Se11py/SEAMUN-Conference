"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function AboutContent() {
    const { t } = useLanguage();

    return (
        <main>
            <section className="section">
                <div className="container">
                    <h2 className="section-title">{t('home.aboutTitle')}</h2>
                    <p className="section-desc">
                        SEAMUN I is a <strong>mid- and high school</strong> conference for
                        students in grades 7–12.
                    </p>
                    <div className="about-grid">
                        <div className="about-card">
                            <h3>{t('home.about1Title')}</h3>
                            <p>
                                {t('home.about1Desc')}
                            </p>
                        </div>
                        <div className="about-card">
                            <h3>{t('home.about2Title')}</h3>
                            <p>
                                {t('home.about2Desc')}
                            </p>
                        </div>
                        <div className="about-card">
                            <h3>{t('home.about3Title')}</h3>
                            <p>
                                {t('home.about3Desc')}
                            </p>
                        </div>
                        <div className="about-card">
                            <h3>{t('home.about4Title')}</h3>
                            <p>
                                {t('home.about4Desc')}
                            </p>
                        </div>
                        <div className="about-card">
                            <h3>{t('home.about5Title')}</h3>
                            <p>
                                {t('home.about5Desc')}
                            </p>
                        </div>
                    </div>
                    <hr className="section-divider" />
                    <div className="meta-row">
                        <span>
                            <strong>Audience:</strong> {t('home.metaAudience').replace('Audience: ', '')}
                        </span>
                        <span>
                            <strong>Location:</strong> {t('home.metaLocation').replace('Location: ', '')}
                        </span>
                        <span>
                            <strong>Fees:</strong> {t('home.metaFees').replace('Fees: ', '')}
                        </span>
                        <span>
                            <strong>Capacity:</strong> {t('home.metaCapacity').replace('Capacity: ', '')}
                        </span>
                    </div>
                </div>
            </section>
        </main>
    );
}

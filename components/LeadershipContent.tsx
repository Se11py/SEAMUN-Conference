"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function LeadershipContent() {
    const { t } = useLanguage();

    const TEAM = [
        { role: t('leadership.roleSecGen'), name: "Jules K.A.", email: "juleskittoastrop@gmail.com", photo: "/assets/Jules.png" },
        { role: t('leadership.roleDepSecGen'), name: "Emily H.", email: "emily.yhstudent@sisbschool.com", photo: "/assets/Emily.png" },
        { role: t('leadership.roleParl'), name: "Sam", email: "", photo: "/assets/Sam.png" },
        { role: t('leadership.roleLogistics'), name: "Moonum", email: "", photo: "/assets/Moonum.png" },
        { role: t('leadership.roleDelAffairs'), name: "Dominic S. S.", email: "dominicstott09@gmail.com", photo: "/assets/Dominic.png" },
        { role: t('leadership.roleFinance'), name: "Mannan P.", email: "mannanparikh27@gmail.com", photo: "/assets/Mannan.png" },
        { role: t('leadership.rolePR'), name: "Phil", email: "sarana79262@gmail.com", photo: "/assets/Phil.png" },
        { role: t('leadership.roleMedia'), name: "Joanna", email: "", photo: "/assets/Joanna.png" },
        { role: t('leadership.roleOutreach'), name: "Myesha", email: "", photo: "/assets/myesha.png" },
    ];

    return (
        <section className="section section-alt">
            <div className="container">
                <h2 className="section-title" data-animate>{t('leadership.title')}</h2>
                <p className="section-desc" data-animate>
                    {t('leadership.desc')}
                </p>
                <div className="leadership-page-grid" data-animate-stagger>
                    {TEAM.map((p, i) => (
                        <div key={i} className="leadership-page-card" data-animate>
                            <div className="leadership-page-photo-wrap">
                                {p.photo ? (
                                    <img src={p.photo} alt={p.name} className="leadership-page-photo" />
                                ) : (
                                    <div className="leadership-page-initials">
                                        {p.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                                    </div>
                                )}
                            </div>
                            <div className="leadership-page-info">
                                <h3 className="leadership-page-name">{p.name}</h3>
                                <p className="leadership-page-role">{p.role}</p>
                                {p.email && (
                                    <a href={`mailto:${p.email}`} className="leadership-page-email">
                                        {p.email}
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

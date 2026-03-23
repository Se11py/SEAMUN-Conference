"use client";

import MailtoForm from "@/components/MailtoForm";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function RegisterContent() {
    const { t } = useLanguage();

    return (
        <section className="section">
            <div className="container" style={{ maxWidth: 560 }}>
                <h2 className="section-title">{t('register.title')}</h2>
                <p className="section-desc">
                    {t('register.desc1')}
                </p>
                <p style={{ marginBottom: "1.5rem" }}>
                    <a
                        href="https://forms.gle/iy57uXzA89d3WVYy8"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                        style={{ display: "inline-block" }}
                    >
                        {t('register.btn')}
                    </a>
                </p>
                <p className="section-desc">
                    {t('register.desc2')}
                </p>
                <MailtoForm
                    mailto="information@seamun.com"
                    subject="SEAMUN I 2027 – Registration interest"
                    fields={["name", "email", "role", "school", "message"]}
                />
            </div>
        </section>
    );
}

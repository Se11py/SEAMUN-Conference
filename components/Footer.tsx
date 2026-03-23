"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="site-footer">
            <div className="container footer-inner">
                <div>
                    <div className="footer-brand">
                        <img className="footer-logo" src="/assets/seamun-logo.png" alt="" />
                        <span className="footer-tagline">SEAMUN I</span>
                    </div>
                    <p className="footer-copy">Policies with a Purpose &middot; &copy; 2027</p>
                </div>
                <nav className="footer-links">
                    <Link href="/about">{t('nav.about')}</Link>
                    <Link href="/committees">{t('nav.committees')}</Link>
                    <Link href="/leadership">{t('nav.leadership')}</Link>
                    <Link href="/sponsors">{t('nav.sponsors')}</Link>
                </nav>
                <div className="footer-contact">
                    <p>Questions?</p>
                    <a href="mailto:information@seamun.com">information@seamun.com</a>
                </div>
            </div>
        </footer>
    );
}

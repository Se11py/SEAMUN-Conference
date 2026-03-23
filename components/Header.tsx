"use client";

import Link from "next/link";
import NavToggle from "./NavToggle";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import LanguageSelector from "./LanguageSelector";

interface HeaderProps {
    showHelp?: boolean;
}

export default function Header({ showHelp }: HeaderProps) {
    const { t } = useLanguage();

    return (
        <header className="site-header">
            <div className="container header-inner">
                <Link href="/" className="logo">
                    <img
                        className="logo-image"
                        src="/assets/seamun-logo.png"
                        alt="SEAMUN I"
                    />
                    <span className="logo-text">SEAMUN I</span>
                </Link>
                <nav className="nav">
                    <Link href="/about">{t('nav.about')}</Link>
                    <Link href="/leadership">{t('nav.leadership')}</Link>
                    <Link href="/committees">{t('nav.committees')}</Link>
                    <Link href="/#schedule">{t('nav.schedule')}</Link>
                    <Link href="/contact">{t('nav.contact')}</Link>
                    <Link href="/sponsors">{t('nav.sponsors')}</Link>
                    {showHelp && (
                        <span className="header-help">
                            <button
                                type="button"
                                className="help-icon"
                                aria-label="Site and MUN help"
                                data-help="site-guide"
                                title={t('nav.help')}
                            >
                                ?
                            </button>
                        </span>
                    )}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginLeft: 'auto' }}>
                        <LanguageSelector />
                        <Link className="btn btn-header" href="/register">
                            {t('nav.register')}
                        </Link>
                    </div>
                </nav>
                <NavToggle>
                    <LanguageSelector />
                    <Link href="/about">{t('nav.about')}</Link>
                    <Link href="/leadership">{t('nav.leadership')}</Link>
                    <Link href="/committees">{t('nav.committees')}</Link>
                    <Link href="/#schedule">{t('nav.schedule')}</Link>
                    <Link href="/contact">{t('nav.contact')}</Link>
                    <Link href="/sponsors">{t('nav.sponsors')}</Link>
                    {showHelp && (
                        <button
                            type="button"
                            className="help-trigger"
                            data-help="site-guide"
                        >
                            {t('nav.help')}
                        </button>
                    )}
                    <Link href="/register">{t('nav.register')}</Link>
                </NavToggle>
            </div>
        </header>
    );
}

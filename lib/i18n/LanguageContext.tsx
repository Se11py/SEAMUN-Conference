"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { languages, LanguageCode, getTranslation } from './translations';

interface LanguageContextProps {
    language: LanguageCode;
    setLanguage: (lang: LanguageCode) => void;
    t: (key: string) => string;
    isRtl: boolean;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguageState] = useState<LanguageCode>('en');
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        const stored = localStorage.getItem('seamun-language') as LanguageCode;
        if (stored && languages.some(l => l.code === stored)) {
            setLanguageState(stored);
        } else {
            // Basic browser language detection
            const browserLang = navigator.language.split('-')[0] as LanguageCode;
            if (languages.some(l => l.code === browserLang)) {
                setLanguageState(browserLang);
            }
        }
    }, []);

    const setLanguage = (lang: LanguageCode) => {
        setLanguageState(lang);
        localStorage.setItem('seamun-language', lang);
    };

    const t = (key: string): string => {
        return getTranslation(language, key);
    };

    const currentLangObj = languages.find(l => l.code === language);
    const isRtl = !!currentLangObj?.rtl;

    useEffect(() => {
        // Dynamically set dir and lang attributes on html tag for seamless RTL support and accessibility
        document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
        document.documentElement.lang = language;
    }, [language, isRtl]);

    const providerValue = { language, setLanguage, t, isRtl };

    // To prevent hydration mismatches on server/client renders before mounted
    if (!isMounted) {
        return (
            <LanguageContext.Provider value={providerValue}>
                <div style={{ visibility: 'hidden' }}>{children}</div>
            </LanguageContext.Provider>
        );
    }

    return (
        <LanguageContext.Provider value={providerValue}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}

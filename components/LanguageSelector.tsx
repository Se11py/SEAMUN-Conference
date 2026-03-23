"use client";

import { useLanguage } from '../lib/i18n/LanguageContext';
import { languages } from '../lib/i18n/translations';
import { useState, useRef, useEffect } from 'react';

export default function LanguageSelector() {
    const { language, setLanguage } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const currentLangObj = languages.find(l => l.code === language);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="language-selector" ref={dropdownRef} style={{ position: 'relative', display: 'inline-flex', alignItems: 'center' }}>
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    background: 'transparent',
                    border: '1px solid var(--border)',
                    color: 'var(--text-muted)',
                    padding: '8px 12px',
                    borderRadius: '20px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '14px',
                    fontWeight: 500,
                    transition: 'color 0.2s ease, border-color 0.2s ease'
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--text)';
                    e.currentTarget.style.borderColor = 'var(--text-muted)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--text-muted)';
                    e.currentTarget.style.borderColor = 'var(--border)';
                }}
                aria-label="Select Language"
            >
                <span>A文</span>
                {currentLangObj?.nativeName || 'Language'}
                <span style={{ fontSize: '10px', opacity: 0.7 }}>▼</span>
            </button>

            {isOpen && (
                <div style={{
                    position: 'absolute',
                    top: 'calc(100% + 8px)',
                    right: 0,
                    backgroundColor: '#071829', // Dark theme background
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '12px',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.6)',
                    zIndex: 1000,
                    maxHeight: '350px',
                    overflowY: 'auto',
                    minWidth: '180px',
                    padding: '8px 0'
                }}>
                    {languages.map(lang => (
                        <button
                            key={lang.code}
                            onClick={() => {
                                setLanguage(lang.code);
                                setIsOpen(false);
                            }}
                            style={{
                                display: 'block',
                                width: '100%',
                                textAlign: 'left',
                                padding: '10px 16px',
                                background: language === lang.code ? 'linear-gradient(90deg, rgba(82, 179, 217, 0.15) 0%, transparent 100%)' : 'transparent',
                                border: 'none',
                                borderLeft: language === lang.code ? '3px solid #52B3D9' : '3px solid transparent',
                                color: language === lang.code ? '#52B3D9' : 'var(--text-primary, #eaeaea)',
                                cursor: 'pointer',
                                fontSize: '14px',
                                fontWeight: language === lang.code ? 600 : 400,
                                transition: 'background 0.2s, color 0.2s'
                            }}
                            onMouseEnter={(e) => {
                                if (language !== lang.code) {
                                    e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                                    e.currentTarget.style.color = '#fff';
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (language !== lang.code) {
                                    e.currentTarget.style.background = 'transparent';
                                    e.currentTarget.style.color = 'var(--text-primary, #eaeaea)';
                                }
                            }}
                        >
                            {lang.nativeName} <span style={{ opacity: 0.5, fontSize: '12px', marginLeft: '6px' }}>({lang.name})</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}

"use client";

import { LanguageProvider as InternalLanguageProvider } from "@/lib/i18n/LanguageContext";

export function Providers({ children }: { children: React.ReactNode }) {
    return <InternalLanguageProvider>{children}</InternalLanguageProvider>;
}

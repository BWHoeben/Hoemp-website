import { useEffect, useState } from "react";

export type Language = "en" | "nl";

export function detectLanguage(): Language {
    const language = navigator.languages?.[0] ?? navigator.language;

    return language.toLowerCase().startsWith("nl") ? "nl" : "en";
}

export function useLanguage() {
    const [language, setLanguage] = useState<Language>(detectLanguage);

    useEffect(() => {
        document.documentElement.lang = language;
    }, [language]);

    return [language, setLanguage] as const;
}

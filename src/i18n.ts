import { useEffect, useState } from "react";

export type Language = "en" | "nl";

export function detectLanguage(): Language {
    const languages = navigator.languages?.length
        ? navigator.languages
        : [navigator.language];

    return languages.some((language) => language.toLowerCase().startsWith("nl"))
        ? "nl"
        : "en";
}

export function useLanguage() {
    const [language, setLanguage] = useState<Language>(detectLanguage);

    useEffect(() => {
        document.documentElement.lang = language;
    }, [language]);

    return [language, setLanguage] as const;
}

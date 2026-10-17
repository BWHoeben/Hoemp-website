import {translations} from "./translations.ts";

export default function useTranslation() {
    const language = navigator.language.toLowerCase().split('-')[0]
    return language === 'nl' ? translations.nl : translations.en
}

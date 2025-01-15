import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
// import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';
// Supported Languages
import US from './Libraries/Language/us.json';
import DE from './Libraries/Language/de.json';
import IT from './Libraries/Language/it.json';
import CN from './Libraries/Language/cn.json';
import RU from './Libraries/Language/ru.json';
import AE from './Libraries/Language/ae.json';

// i18n initialization
i18n
  .use(HttpBackend) // Load translations
  // .use(LanguageDetector) // Detect user language, do not use now, translations need to be checked
  .use(initReactI18next) // Bind i18next to React
  .init({
    fallbackLng: 'us', // Default language
    debug: true, // Enable debugging
    interpolation: {
      escapeValue: false, // React already handles escaping
    },
    resources: {
      us: {
        translation: US,
      },
      de: {
        translation: DE,
      },
      it: {
        translation: IT,
      },
      cn: {
        translation: CN,
      },
      ru: {
        translation: RU,
      },
      ae: {
        translation: AE,
      },
    },
    react: {
      useSuspense: true, // Enable suspense for lazy loading translations
    },
  });

export default i18n;

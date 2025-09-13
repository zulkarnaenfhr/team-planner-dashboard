import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpBackend from "i18next-http-backend";

i18n
   .use(HttpBackend) // ✅ load translation from /public/locales
   .use(LanguageDetector) // detect language
   .use(initReactI18next) // connect to React
   .init({
      fallbackLng: "en",
      debug: true, // bisa lihat log di console
      interpolation: {
         escapeValue: false,
      },
      backend: {
         loadPath: "/locales/{{lng}}/{{ns}}.json",
      },
   });

export default i18n;

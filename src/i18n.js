import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importa as traduções em JSON para cada idioma
import translationEn from './locales/en.json';
import translationPt from './locales/pt.json';

// Configuração do i18next
i18n.use(initReactI18next).init({
  // define o idioma padrão
  lng: 'pt',
  // define as traduções disponíveis
  resources: {
    en: {
      translation: translationEn,
    },
    pt: {
      translation: translationPt,
    },
  },
});

export default i18n;

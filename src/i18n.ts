import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  fr: {
    translation: {
      nav: {
        home: 'Accueil',
        about: 'A propos',
        services: 'Services',
        news: 'Actualites',
        spaces: 'Espaces',
        opportunities: 'Appels d offres',
        contact: 'Contact'
      },
      common: {
        reserve: 'Reserver',
        discover: 'Decouvrir',
        learnMore: 'En savoir plus',
        requestQuote: 'Demander un devis'
      }
    }
  },
  en: {
    translation: {
      nav: {
        home: 'Home',
        about: 'About',
        services: 'Services',
        news: 'News',
        spaces: 'Venues',
        opportunities: 'Opportunities',
        contact: 'Contact'
      },
      common: {
        reserve: 'Book now',
        discover: 'Discover',
        learnMore: 'Learn more',
        requestQuote: 'Request quote'
      }
    }
  }
};

void i18n.use(initReactI18next).init({
  resources,
  lng: 'fr',
  fallbackLng: 'fr',
  interpolation: {
    escapeValue: false
  }
});

export { i18n };

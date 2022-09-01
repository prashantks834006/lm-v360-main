import React, { FC, ReactNode, Suspense, useEffect } from 'react';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import Cookies from 'js-cookie';

type Props = {
  children: ReactNode;
};

const detection = {
  order: ['cookie', 'localStorage', 'htmlTag', 'querystring', 'sessionStorage', 'navigator', 'path', 'subdomain'],
  caches: ['cookie', 'localStorage'],
};

const backend = {
  loadPath: '/v360-app/assets/locales/{{lng}}.json',
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ['en', 'de', 'ar'],
    fallbackLng: 'en',
    detection,
    backend,
  });

const fallback = <div> Loading...</div>;

const ReactI18nProvider: FC<Props> = ({ children }) => {
  useEffect(() => {
    if (Cookies.get('i18next') === 'ar') {
      const bodyEl = document.querySelector('body');
      if (bodyEl) bodyEl.dir = 'rtl';
    }
  }, []);

  return <Suspense fallback={fallback}>{children}</Suspense>;
};

export default ReactI18nProvider;

import React, { FC, ReactNode } from 'react';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

type Props = {
  children: ReactNode;
};

const detection = {
  order: ['cookie', 'htmlTag', 'querystring', 'localStorage', 'sessionStorage', 'navigator', 'path', 'subdomain'],
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
    supportedLngs: ['en', 'fr', 'ar'],
    fallbackLng: 'en',
    detection,
    backend,
    react: { useSuspense: false },
  });

const ReactI18nProvider: FC<Props> = ({ children }) => {
  return <div>{children}</div>;
};

export default ReactI18nProvider;

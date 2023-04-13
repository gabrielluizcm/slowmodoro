import React from 'react';
import { useTranslation } from 'react-i18next';

import i18nRoot from '../../../i18n';
import LangButton from '../../atoms/LangButton';

import { LangWrapper } from './styled';

export default function LangSelector() {
  const { i18n } = useTranslation();
  const activeLang = i18n.language;

  const handleChangeLangClick = (newLang: string) => {
    i18nRoot.changeLanguage(newLang);
  };

  return (
    <LangWrapper>
      <LangButton countryCode='US' active={activeLang === 'en'} onClick={() => handleChangeLangClick('en')} />
      <LangButton countryCode='BR' active={activeLang === 'pt'} onClick={() => handleChangeLangClick('pt')} />
    </LangWrapper>
  );
}

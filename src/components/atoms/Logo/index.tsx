import React from 'react';
import { useTranslation } from 'react-i18next';

import { StyledLogo } from './styled';

import reversePomodoroImg from '../../../images/pomodoro.png';

export function Logo() {
  const { t } = useTranslation();

  return (
    <StyledLogo>
      <img className="logoImg" src={reversePomodoroImg} alt="Slowmodoro logo" />
      <h1>Slowmodoro</h1>
      <h3>{t('subtitle')}</h3>
    </StyledLogo>
  );
}

import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaLink, FaInfoCircle } from 'react-icons/fa';

import { Copyright, StyledHeader } from './styled';
import { ModalContent } from '../../molecules/MenuModal/styled';
import { Hr } from '../../molecules/MenuModal/styled';

export default function InfoModal() {
  const { t } = useTranslation();

  return (
    <ModalContent>
      <StyledHeader>
        Info <FaInfoCircle />
      </StyledHeader>
      <a
        href="https://en.wikipedia.org/wiki/Pomodoro_Technique"
        title="Pomodoro Technique page on Wikipedia"
      >
        <FaLink />
        {t('aboutPomodoro')}
      </a>
      <Hr />
      <a
        href="https://www.tiimoapp.com/blog/reverse-pomodoro-technique/"
        title="Reverse Pomodoro Article on TiimoApp"
      >
        <FaLink />
        {t('aboutReverse')}
      </a>
      <Copyright>
        <a
          href="https://www.flaticon.com/free-icons/pomodoro"
          title="Pomodoro Icons on Flaticon"
        >
          <FaLink />
          {t('iconCredit')}
        </a>
      </Copyright>
    </ModalContent>
  );
}

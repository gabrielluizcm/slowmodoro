import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import {
  StatusContext,
  ReversePomodorosContext,
  ReverseModeContext,
  PomodorosContext
} from '../../App';

import { StyledStatus } from './styled';

export function StatusLabel() {
  const { t } = useTranslation();
  const status = useContext(StatusContext);
  const reversePomodoros = useContext(ReversePomodorosContext);
  const reverseMode = useContext(ReverseModeContext);
  const pomodoros = useContext(PomodorosContext);

  let statusLabel = t('statusIdle');

  if (status === 'chilling')
    statusLabel = !reverseMode ? t('statusChill') : t('statusShortWork');
  else
    if (status === 'working')
      if (!reverseMode)
        statusLabel = reversePomodoros && reversePomodoros % 4 === 0
          ? t('statusLongWork')
          : t('statusShortWork');
      else
        statusLabel = pomodoros && pomodoros % 4 === 0
          ? t('statusLongChill')
          : t('statusChill');

  return <StyledStatus>{statusLabel}</StyledStatus>;
}

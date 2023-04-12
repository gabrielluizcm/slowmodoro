import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import { ReversePomodorosContext } from '../App';

import { secondsToTime } from '../../utils/secondsToTime';

import { StyledCounters } from './styled';

type CountersProps = {
  totalChillingTime: number;
  totalWorkingTime: number;
};

export function Counters(props: CountersProps) {
  const { t } = useTranslation();
  const reversePomodoros = useContext(ReversePomodorosContext);

  return (
    <StyledCounters>
      <p>
        <b>{t('totalChillCounter')}:</b>{' '}
        {secondsToTime(props.totalChillingTime)}
      </p>
      <p>
        <b>{t('totalWorkCounter')}:</b> {secondsToTime(props.totalWorkingTime)}
      </p>
      <p>
        <b>{t('reversePomodorosCounter')}:</b> {reversePomodoros}
      </p>
    </StyledCounters>
  );
}
